// ============================================================
// auth.js — Supabase Auth + Points helper
// لازم يتحط في كل صفحة بعد سكريبت supabase-js:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   <script src="auth.js"></script>
// ============================================================

const SUPABASE_URL = "https://widgzltjopvfhbkzcikg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_j-MFqivZtlWUslu8aL9jBQ_HDzkX_zy"; // من Supabase: Settings > API

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// Mandatory login guard
// كل صفحة عدا login.html لازم يبقى فيها جلسة صالحة، وإلا يترحّل المستخدم فورًا.
// الصفحة بتتحط مخفية (visibility:hidden) عن طريق سكريبت صغير في <head>،
// وهنا بنكشفها بس لو فيه جلسة، أو نرحّل المستخدم لصفحة اللوجين لو مفيش.
// ============================================================

const AUTH_LOGIN_PAGE = "login.html";

function isLoginPage() {
  return window.location.pathname.split("/").pop() === AUTH_LOGIN_PAGE;
}

function revealPage() {
  document.documentElement.style.visibility = "visible";
}

function redirectToLogin() {
  const returnTo = encodeURIComponent(window.location.href);
  window.location.replace(`${AUTH_LOGIN_PAGE}?returnTo=${returnTo}`);
}

async function requireAuth() {
  if (isLoginPage()) {
    revealPage();
    return;
  }

  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error || !data || !data.session) {
      redirectToLogin();
      return;
    }
    revealPage();
  } catch (e) {
    console.error("Auth check failed:", e);
    redirectToLogin();
  }

  // لو اتعمل تسجيل خروج أو انتهت الجلسة وهو لسه في الصفحة، رحّله فورًا
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (!isLoginPage() && (event === "SIGNED_OUT" || !session)) {
      redirectToLogin();
    }
  });
}

// شغّل الفحص فورًا (متستناش DOMContentLoaded عشان تقلل وقت ظهور المحتوى قبل التأكد)
requireAuth();

// ---------- Auth actions ----------

async function signUpUser(email, password, name) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { name } }
  });
  return { data, error };
}

async function signInUser(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signOutUser() {
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
}

async function getCurrentUser() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user;
}

async function getProfile() {
  const user = await getCurrentUser();
  if (!user) return null;
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (error) { console.error(error); return null; }
  return data;
}

// ---------- Points ----------

// بتتنادى من أي لعبة لما اللاعب يخلصها
// gameId: نص فريد للعبة (زي "quiz-teen", "investigation-room", "who-am-i")
// points: عدد النقط المستحقة لو خلص أول مرة
async function awardGamePoints(gameId, points) {
  const user = await getCurrentUser();
  if (!user) {
    showLoginPrompt();
    return null;
  }
  const { data, error } = await supabaseClient.rpc("award_game_points", {
    p_game_id: gameId,
    p_points: points
  });
  if (error) { console.error(error); return null; }
  if (data > 0) showPointsToast(data, points);
  return data; // إجمالي نقط المستخدم بعد الإضافة
}

// ---------- UI helpers ----------

function showLoginPrompt() {
  if (document.getElementById("authToast")) return;
  const toast = document.createElement("div");
  toast.id = "authToast";
  toast.style.cssText = `
    position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
    background:#161a22; color:#eef1f6; border:1px solid #d4af37;
    padding:14px 22px; border-radius:12px; font-family:'Cairo',sans-serif;
    font-size:14px; z-index:9999; box-shadow:0 8px 24px rgba(0,0,0,.4);
    display:flex; align-items:center; gap:14px;
  `;
  toast.innerHTML = `
    <span>سجّل دخولك عشان تكسب نقط على اللعب 🎯</span>
    <a href="login.html" style="color:#d4af37; font-weight:700; text-decoration:none;">تسجيل الدخول</a>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 6000);
}

function showPointsToast(totalPoints, earned) {
  if (document.getElementById("authToast")) return;
  const toast = document.createElement("div");
  toast.id = "authToast";
  toast.style.cssText = `
    position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
    background:#161a22; color:#31d0aa; border:1px solid #31d0aa;
    padding:14px 22px; border-radius:12px; font-family:'Cairo',sans-serif;
    font-weight:700; font-size:14px; z-index:9999; box-shadow:0 8px 24px rgba(0,0,0,.4);
  `;
  toast.textContent = `+${earned} نقطة 🎉 (إجمالي نقطك: ${totalPoints})`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// بتحط حالة تسجيل الدخول في أي عنصر بـ id="authStatus" لو موجود في الصفحة (الناف بار مثلاً)
async function renderAuthStatus() {
  const el = document.getElementById("authStatus");
  if (!el) return;
  const user = await getCurrentUser();
  if (user) {
    const profile = await getProfile();
    el.innerHTML = `<a href="account.html" style="color:#d4af37; text-decoration:none; font-weight:700;">${profile?.points ?? 0} نقطة</a>`;
  } else {
    el.innerHTML = `<a href="login.html" style="color:inherit; text-decoration:none;">تسجيل الدخول</a>`;
  }
}

document.addEventListener("DOMContentLoaded", renderAuthStatus);
