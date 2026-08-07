// --- Data Mocks ---

const teamMembers = [
    {
        id: 1,
        name: 'عبدالرحمن أشرف الكومى',
        role: 'مؤسس المبادرة',
        shortDesc: 'يقود فريق الصح من الغلط',
        fullBio: 'عبدالرحمن يقود فريق الصح من الغلط ويعمل على خلق محتوى هادف يلامس قضايا المجتمع ويحفز الشباب على التمييز بين الصح والغلط.',
        avatar: 'Abdelrahman.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 2,
        name: 'منى نصر الدين سلامة',
        role: 'منسقة المحتوى',
        shortDesc: 'تشارك في تنظيم المحتوى والتواصل مع الجمهور.',
        fullBio: 'منى نصر الدين سلامة تعمل على تنظيم المحتوى التوعوي وتطوير الرسائل التي تعكس قيم المبادرة وتساهم في التواصل مع الجمهور بشكل مؤثر.',
        avatar: 'Mona.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 3,
        name: 'مروان سمير جابر',
        role: 'مسئول وسائل التواصل والشراكات',
        shortDesc: 'يدير وسائل التواصل الاجتماعي ويسوق للمبادرة.',
        fullBio: 'مروان مسؤول عن إدارة وسائل التواصل الاجتماعي والتسويق للمبادرة، ويعمل على نشر رسائلها ومبادئها بشكل فعال.',
        avatar: 'Marwan.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 4,
        name: 'أسماء أشرف عبدالفتاح خليل',
        role: 'مسؤولة الإعلام',
        shortDesc: 'تدير الحملات على منصات التواصل الاجتماعي.',
        fullBio: 'أسماء تعمل جاهدة لنشر ثقافة "الصح من الغلط" عبر جميع المنصات الاجتماعية.',
        avatar: 'Asmaa.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 5,
        name: 'يوسف محمد العمرى',
        role: 'مدير التقنية',
        shortDesc: 'مطور الويب و المسؤول عن المنصة التقنية',
        fullBio: 'يوسف مهندس برمجيات محترف، يسخر مهاراته التقنية لتوفير منصة سهلة الاستخدام تخدم أهداف المبادرة وتوصل رسالتها لأكبر شريحة ممكنة.',
        avatar: 'Yousef.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    }
];

const volunteerMembers = [
    { id: 1, name: 'باتريك أسامه', role: 'مبرمج' },
    { id: 2, name: 'محمد طارق', role: 'مبرمج' },
    { id: 3, name: 'مينا جرجس', role: 'مبرمج' },
    { id: 4, name: 'جورج نادر', role: 'مبرمج' },
    { id: 5, name: 'ياسين فرج', role: 'ميديا' },
    { id: 6, name: 'حمزه محمد', role: 'ميديا' },
    { id: 7, name: 'فاطمه عمر فتحي', role: 'فوتوغرافر' },
    { id: 8, name: 'محمد عمر فتحي', role: 'video editor' },
    { id: 9, name: 'سيف الدين ايهاب مصطفي', role: 'video editor' },
    { id: 10, name: 'محمد احمد', role: 'مبرمج' },
    { id: 11, name: 'عبد الرحمن محمد احمد قطب', role: 'مبرمج' },
    { id: 12, name: 'محمد الكومي', role: 'تنظيم' },
    { id: 13, name: 'مروة عبد الناصر', role: 'رئيسة النادي' }
];

const blogPosts = [
    {
        id: 1, title: 'كيف نميز بين الأخبار الحقيقية والمزيفة؟',
        date: '١٥ مايو ٢٠٢٦', author: 'سارة خالد',
        excerpt: 'في عصر تدفق المعلومات السريع، أصبح التمييز بين الحقيقة والشائعة أمراً بالغ الأهمية.',
        content: `
            <p>في عصر تدفق المعلومات السريع، أصبح التمييز بين الحقيقة والشائعة أمراً بالغ الأهمية. يوماً بعد يوم، نتعرض لآلاف الأخبار عبر منصات التواصل الاجتماعي، والكثير منها غير دقيق أو موجه لخدمة أجندات معينة.</p>
            <p>لذلك، من المهم جداً التحقق من المصادر. ابحث دائماً عن مصادر موثوقة، ولا تعتمد على العناوين الرنانة فقط. القراءة النقدية والتفكير المنطقي هما درعك الأول ضد التضليل.</p>
            <p>مبادرتنا "الصح من الغلط" تهدف إلى تسليط الضوء على هذه المشكلة وتقديم أدوات عملية للشباب للتحقق من المعلومات قبل مشاركتها.</p>
        `
    },
    {
        id: 2, title: 'التنمر الإلكتروني: أسبابه وكيفية مواجهته',
        date: '١٠ مايو ٢٠٢٦', author: 'أحمد محمد',
        excerpt: 'التنمر الإلكتروني ظاهرة خطيرة تهدد استقرار المجتمع النفسي. لنتعرف على طرق مكافحته.',
        content: `
            <p>التنمر الإلكتروني ظاهرة خطيرة تهدد استقرار المجتمع النفسي. مع انتشار الأجهزة الذكية، أصبح بإمكان المتنمرين الوصول إلى ضحاياهم في أي وقت ومكان.</p>
            <p>من أهم أسباب التنمر الإلكتروني هو الشعور بالاختفاء وراء الشاشات، مما يعطي المتنمر جرأة أكبر. لمواجهة هذه الظاهرة، يجب علينا جميعاً أن نكون جزءاً من الحل، من خلال عدم المشاركة في التنمر، ودعم الضحايا، والإبلاغ عن المحتوى المسيء.</p>
            <p>يجب علينا أن نتعلم كيف نقول "لا" للتنمر وندافع عن "الصح" في كل الأوقات.</p>
        `
    },
    {
        id: 3, title: 'أهمية القيم في عصر التكنولوجيا',
        date: '٥ مايو ٢٠٢٦', author: 'عمر عبدالله',
        excerpt: 'كيف نحافظ على مبادئنا الإنسانية في عالم تسيطر عليه الآلات والذكاء الاصطناعي؟',
        content: `
            <p>كيف نحافظ على مبادئنا الإنسانية في عالم تسيطر عليه الآلات والذكاء الاصطناعي؟ هذا هو التحدي الأكبر في القرن الحادي والعشرين.</p>
            <p>التكنولوجيا بحد ذاتها محايدة، ولكن طريقة استخدامنا لها هي التي تحدد ما إذا كانت خيراً أم شراً. من هنا تأتي أهمية زرع القيم الأصيلة في نفوس الأجيال الصاعدة.</p>
            <p>يجب أن تكون التكنولوجيا أداة لبناء الإنسان والمجتمع، وليس وسيلة للهدم والتفرقة. هذا ما نسعى لتحقيقه من خلال مبادرة "الصح من الغلط".</p>
        `
    }
];

// --- Utility Functions ---

// Set Current Year in Footer
const yearSpans = document.querySelectorAll('#current-year, .year-span');
yearSpans.forEach(span => {
    if(span) span.textContent = new Date().getFullYear();
});

// Remove Loader
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.style.display = 'none', 500);
        }, 800);
    }
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const navbarLogoImg = document.querySelector('.navbar-logo-img');
const heroLogo = document.querySelector('.logo-placeholder');
if(navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if(navbarLogoImg) navbarLogoImg.classList.add('visible');
            if(heroLogo) heroLogo.classList.add('hidden');
        } else {
            navbar.classList.remove('scrolled');
            if(navbarLogoImg) navbarLogoImg.classList.remove('visible');
            if(heroLogo) heroLogo.classList.remove('hidden');
        }
    });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// Scroll Animation Observer (Slide up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all slide-up elements
document.addEventListener('DOMContentLoaded', () => {
    renderTeamMembers();
    renderVolunteerMembers();
    renderQuiz();

    const slideElements = document.querySelectorAll('.slide-up, .about-card, .team-card');
    slideElements.forEach(el => {
        if(!el.classList.contains('slide-up')){
            el.classList.add('slide-up');
        }
        observer.observe(el);
    });

    const particlesContainer = document.getElementById('particles');
    if(particlesContainer) {
        for(let i=0; i<20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${5 + Math.random() * 10}s`;
            particlesContainer.appendChild(particle);
        }
    }
});

// --- Render Functions ---

function renderTeamMembers() {
    const container = document.getElementById('team-container');
    if(!container) return;

    container.innerHTML = teamMembers.map(member => `
        <a href="profile.html?id=${member.id}" class="team-card glass">
            <div class="member-avatar">
                <img src="${member.avatar}" alt="${member.name}" class="avatar-img">
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
                <p class="short-desc">${member.shortDesc}</p>
            </div>
            <div class="view-profile-btn">
                <span>عرض الملف الشخصي</span>
            </div>
        </a>
    `).join('');
}

function renderVolunteerMembers() {
    const pitch = document.getElementById('volunteer-container');
    const managerContainer = document.getElementById('manager-container');
    if(!pitch) return;

    const gk = volunteerMembers.filter(m => m.role === 'فوتوغرافر');
    const def = volunteerMembers.filter(m => m.role === 'مبرمج');
    const mid = volunteerMembers.filter(m => m.role === 'video editor');
    const fwd = volunteerMembers.filter(m => m.role === 'ميديا');
    const manager = volunteerMembers.filter(m => m.role === 'تنظيم');
    const president = volunteerMembers.filter(m => m.role === 'رئيسة النادي');

    let n = 1;
    [...gk, ...def, ...mid, ...fwd].forEach(m => { m.number = n++; });

    const renderRow = (players, cls) => `
        <div class="pitch-row ${cls}">
            ${players.map(p => `
                <div class="player">
                    <div class="player-jersey">${p.number}</div>
                    <div class="player-name">${p.name}</div>
                    <div class="player-role">${p.role}</div>
                </div>
            `).join('')}
        </div>
    `;

    pitch.innerHTML = `
        ${renderRow(fwd, 'row-fwd')}
        ${renderRow(mid, 'row-mid')}
        ${renderRow(def, 'row-def')}
        ${renderRow(gk, 'row-gk')}
    `;

    if (managerContainer) {
        managerContainer.innerHTML = `
            ${president.map(m => `
                <div class="manager-card president-card">
                    <div class="manager-jersey">🏆</div>
                    <div>
                        <div class="player-name">${m.name}</div>
                        <div class="player-role">رئيسة النادي</div>
                    </div>
                </div>
            `).join('')}
            ${manager.map(m => `
                <div class="manager-card">
                    <div class="manager-jersey">👔</div>
                    <div>
                        <div class="player-name">${m.name}</div>
                        <div class="player-role">المدير الفني</div>
                    </div>
                </div>
            `).join('')}
        `;
    }
}

// --- Dynamic Page Loaders ---

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadProfileData() {
    let id = getUrlParam('id');
    const type = getUrlParam('type');
    if (!id) id = 1;
    const container = document.getElementById('profile-content');
    if(!container) return;

    const member = type === 'volunteer'
        ? volunteerMembers.find(m => m.id == id)
        : teamMembers.find(m => m.id == id);
    
    if(!member) {
        container.innerHTML = `<div style="text-align: center; padding: 50px;"><h2>لم يتم العثور على العضو</h2></div>`;
        return;
    }

    if (type === 'volunteer') {
        container.innerHTML = `
            <div class="profile-header">
                <div class="profile-title">
                    <h1>${member.name}</h1>
                    <p class="profile-role">${member.role}</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">
                <img src="${member.avatar}" alt="${member.name}" class="profile-avatar-img">
            </div>
            <div class="profile-title">
                <h1>${member.name}</h1>
                <p class="profile-role">${member.role}</p>
                <div class="profile-socials">
                    <a href="${member.social.facebook}" class="social-icon-small" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="${member.social.instagram}" class="social-icon-small" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="${member.social.linkedin}" class="social-icon-small" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M4 11h4v8H4z"></path><path d="M12 11h4v1.2h.03c.56-1.06 1.93-2.18 3.97-2.18 4.24 0 5.02 2.79 5.02 6.41V19h-4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V19h-4z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="profile-bio">
            <h3>نبذة شخصية</h3>
            <div class="bio-divider"></div>
            <p>${member.fullBio}</p>
        </div>
    `;
}

// ================================================================
// ===== FLOATING CHATBOT WITH CONVERSATION MEMORY =====
// ================================================================

// Configuration
const CHATBOT_MODEL = "llama-3.1-8b-instant";

// Knowledge Base
const CHATBOT_KNOWLEDGE = `
    📌 **معلومات عامة عن المبادرة ورؤيتها**
    - ما هي مبادرة الصح من الغلط؟ هي مبادرة تهدف إلى تصحيح المفاهيم، نشر الوعي، وبناء جيل واعٍ يدرك الفرق بين الصح والغلط في عصر مليء بالتحديات.
    - رؤية المبادرة: بناء مجتمع واعٍ قادر على التمييز بين الصواب والخطأ.
    - مهمة المبادرة: نشر الوعي من خلال محتوى هادف وبرامج تفاعلية.
    - الأهداف الرئيسية: تصحيح المفاهيم المغلوطة، توفير بيئة داعمة للنقاش البناء، وخلق تأثير إيجابي مستدام.

    👥 **فريق العمل والمؤسسين**
    - مؤسس المبادرة: عبدالرحمن أشرف الكومى.
    - منسقة المحتوى: منى نصر الدين سلامة.
    - مسئول وسائل التواصل والتسويق: مروان سمير جابر.
    - مسؤولة الإعلام: أسماء أشرف عبدالفتاح خليل.
    - مصمم الفيديوهات: يوسف محمد العمرى.
    - مبرمج الشات بوت: محمد أحمد إبراهيم.

    🤝 **التطوع والمتطوعون**
    - كيف يمكن التطوع؟ عبر تعبئة الاستمارة الإلكترونية.
    - فريق التطوع يضم 12 متطوعاً موزعين على أقسام: البرمجة، الميديا، التصوير الفوتوغرافي، مونتاج الفيديو، والتنظيم.
    - المدير الفني/مسؤول التنظيم: محمد الكومي.

    🏢 **الشراكات والتعاون**
    - شركاء المبادرة: أكاديمية سياج، ومكتبة مصر العامة.

    📚 **الكورسات والمدونة**
    - تقدم المبادرة "الكورس الأساسي" في القيم والمفاهيم.
    - كورسات خارجية موصى بها: Google AI Essentials (عبر skills.google) وكورسات Claude من Anthropic.
    - مقالات المدونة: "كيف نميز بين الأخبار الحقيقية والمزيفة؟"، "التنمر الإلكتروني"، "أهمية القيم في عصر التكنولوجيا".

    📱 **قنوات التواصل**
    - فيسبوك وواتساب.

    🤖 **الاستخدام الصح والغلط للذكاء الاصطناعي**
    - التحقق من المعلومات: لا تصدق أي إجابة من الذكاء الاصطناعي دون التأكد منها من مصدر موثوق، لأن هذه الأدوات قد تخطئ أو "تختلق" معلومات.
    - الاعتماد الكلي خطأ: استخدام الذكاء الاصطناعي كمساعد للتفكير أفضل من استخدامه بديلاً كاملاً عن التفكير الشخصي أو المذاكرة.
    - الاستخدام الأخلاقي في الدراسة: الاستعانة بالذكاء الاصطناعي للفهم والمراجعة أمر صحيح، أما نسخ الإجابات دون فهم أو تقديمها كمجهود شخصي بالكامل فهو غير أمين علمياً.
    - الخصوصية: يجب الحذر من مشاركة بيانات شخصية أو حساسة مع أدوات الذكاء الاصطناعي.
    - التحيز والدقة: نتائج الذكاء الاصطناعي قد تحمل تحيزات بناءً على البيانات التي دُرّب عليها، لذا التفكير النقدي ضروري دائماً.
`;

// ===== CONVERSATION MEMORY =====
let chatHistory = [];

// ===== DOM Elements =====
const toggleBtn = document.getElementById('chatbotToggle');
const chatWindow = document.getElementById('chatbotWindow');
const closeBtn = document.getElementById('chatbotClose');
const messagesContainer = document.getElementById('chatbotMessages');
const inputField = document.getElementById('chatbotInput');

// Only initialize if all elements exist
if (toggleBtn && chatWindow && closeBtn && messagesContainer && inputField) {

    // ===== Add to History Function =====
    function addToHistory(role, content) {
        chatHistory.push({ role: role, content: content });
        // Keep only last 20 messages to avoid token limits
        if (chatHistory.length > 20) {
            chatHistory = chatHistory.slice(-20);
        }
    }

    // ===== Clear Chat History Function =====
    window.clearChatHistory = function() {
        chatHistory = [];
        messagesContainer.innerHTML = '';
        const welcomeMsg = '👋 مرحباً بك في مبادرة الصح من الغلط! كيف يمكنني مساعدتك اليوم؟';
        addChatbotMessage(welcomeMsg, false);
        addToHistory('assistant', welcomeMsg);
    };

    // ===== Toggle Chat =====
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active') && messagesContainer.children.length === 0) {
            const welcomeMsg = '👋 مرحباً بك في مبادرة الصح من الغلط! أنا هنا للإجابة عن جميع استفساراتك حول المبادرة، فريق العمل، الكورسات، التطوع، والشراكات. كيف يمكنني مساعدتك اليوم؟';
            addChatbotMessage(welcomeMsg, false);
            addToHistory('assistant', welcomeMsg);
        }
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (chatWindow.classList.contains('active')) {
            if (!chatWindow.contains(e.target) && !toggleBtn.contains(e.target)) {
                chatWindow.classList.remove('active');
            }
        }
    });

    // ===== Add Message =====
    function addChatbotMessage(text, isUser) {
        const div = document.createElement('div');
        div.className = `message ${isUser ? 'user' : 'bot'}`;
        div.textContent = text;
        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // ===== Typing Indicator =====
    function showTyping() {
        const div = document.createElement('div');
        div.className = 'typing-indicator';
        div.id = 'chatbotTyping';
        div.innerHTML = `
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        `;
        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTyping() {
        const typing = document.getElementById('chatbotTyping');
        if (typing) typing.remove();
    }

    // ===== Send Message (WITH CONVERSATION MEMORY) =====
    window.sendChatbotMessage = async function() {
        const question = inputField.value.trim();
        if (!question) return;

        // Add user message to UI and history
        addChatbotMessage(question, true);
        addToHistory('user', question);
        inputField.value = '';
        showTyping();

        try {
            // Build messages array with full conversation history
            const messages = [
                {
                    role: "system",
                    content: `أنت مساعد ودود ومختص لمبادرة "الصح من الغلط". 
                    
                    أنت تجري محادثة طبيعية مع المستخدم. تذكر ما قاله المستخدم سابقاً واستخدم السياق للإجابة.
                    
                    استخدم المعلومات التالية بدقة للإجابة. يمكنك أيضاً الإجابة عن أي أسئلة تتعلق بالاستخدام الصح والغلط للذكاء الاصطناعي (مثل: كيفية التحقق من المعلومات، مخاطر الاعتماد الكامل على الذكاء الاصطناعي، الاستخدام الأخلاقي له في الدراسة والعمل، الخصوصية، والتحيز في نتائجه)، لأن هذا الموضوع مرتبط مباشرة برسالة المبادرة. إذا كان السؤال خارج هذين النطاقين، قل: "عذراً، هذا السؤال خارج نطاق المبادرة. يرجى التواصل مع فريق التطوير." 
                    
                    كن موجزاً ومفيداً، واستخدم النقاط عندما يكون ذلك مناسباً.
                    استخدم العربية الفصحى أو العامية المصرية حسب ما يناسب السياق.

                    المعلومات:
                    ${CHATBOT_KNOWLEDGE}`
                }
            ];

            // Add conversation history (last 10 messages for context)
            const historyToSend = chatHistory.slice(-10);
            messages.push(...historyToSend);

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: CHATBOT_MODEL,
                    messages: messages,
                    temperature: 0.3,
                    max_tokens: 900
                })
            });

            const data = await response.json();
            hideTyping();
            const answer = data.choices[0].message.content;
            addChatbotMessage(answer, false);
            addToHistory('assistant', answer);

        } catch (error) {
            hideTyping();
            addChatbotMessage("⚠️ حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.", false);
            console.error(error);
        }
    }

    // ===== Quick Questions =====
    window.askQuick = async function(question) {
        inputField.value = question;
        await sendChatbotMessage();
    };

    // ===== Enter key =====
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatbotMessage();
    });

} // End of chatbot initialization
// ===== AI Awareness Quiz =====
const quizQuestionPool = [
    { q: "تسليم بحث كتبه الذكاء الاصطناعي بالكامل باسمك من غير قراءة أو فهم", correct: false },
    { q: "استخدام الذكاء الاصطناعي عشان تفهم موضوع صعب وتراجع بيه بنفسك", correct: true },
    { q: "تصديق أي معلومة يقولها شات بوت من غير التأكد منها من مصدر موثوق", correct: false },
    { q: "مشاركة بيانات شخصية حساسة (زي رقم بطاقة أو عنوانك) مع أدوات الذكاء الاصطناعي", correct: false },
    { q: "استخدام الذكاء الاصطناعي كنقطة بداية للأفكار، ثم تطويرها وتدقيقها بنفسك", correct: true },
    { q: "سؤال الذكاء الاصطناعي عن معلومة طبية واتخاذ قرار علاجي بناءً عليها بدون استشارة طبيب", correct: false },
    { q: "استخدام الذكاء الاصطناعي لتلخيص مقال طويل عشان توفر وقتك في المذاكرة", correct: true },
    { q: "الاعتماد على الذكاء الاصطناعي في كل قرار حياتي صغير وكبير بدون تفكير شخصي", correct: false },
    { q: "مراجعة الكود اللي كتبه الذكاء الاصطناعي والتأكد إنه شغال صح قبل استخدامه", correct: true },
    { q: "نشر صورة أو فيديو مصنوع بالذكاء الاصطناعي على إنه حقيقي من غير توضيح", correct: false },
    { q: "استخدام الذكاء الاصطناعي عشان تتدرب على مقابلة شغل وتحسن إجاباتك", correct: true },
    { q: "افتراض إن كل إجابة من الذكاء الاصطناعي دقيقة 100% ومفيهاش أخطاء", correct: false },
    { q: "سؤال الذكاء الاصطناعي عن رأيه في موضوع حساس والتعامل مع رده كحقيقة نهائية", correct: false },
    { q: "استخدام أدوات الذكاء الاصطناعي للترجمة كمساعدة، مع مراجعة الترجمة بنفسك", correct: true },
    { q: "كتابة برومبت يطلب من الذكاء الاصطناعي معلومات شخصية عن شخص تاني بدون إذنه", correct: false },
    { q: "استخدام الذكاء الاصطناعي عشان تولد أفكار لمشروع، وبعدين تختار وتطور الأنسب منها", correct: true },
    { q: "الاعتقاد إن كل صورة أو فيديو تشوفه أونلاين حقيقي 100% ومفيهوش تلاعب", correct: false },
    { q: "مراجعة سياسة الخصوصية لأي أداة ذكاء اصطناعي قبل ما تدخل بياناتك فيها", correct: true },
    { q: "استخدام الذكاء الاصطناعي في حل امتحان أونلاين بدل ما تذاكر", correct: false },
    { q: "سؤال الذكاء الاصطناعي يشرحلك مفهوم صعب بطريقة مبسطة كخطوة أولى، وبعدين تدور على مصادر تانية", correct: true },
    { q: "اعتبار إن الذكاء الاصطناعي مش بيتحيز أبداً لأنه \"مجرد برنامج\"", correct: false },
    { q: "التأكد من مصدر أي معلومة حساسة (طبية، قانونية، مالية) قبل التصرف بناءً عليها حتى لو جاتلك من الذكاء الاصطناعي", correct: true },
    { q: "استخدام أداة ذكاء اصطناعي لتوليد صور لشخص حقيقي في مواقف ملفقة بدون إذنه", correct: false },
    { q: "سؤال الذكاء الاصطناعي عن مصادر إضافية للتعمق في موضوع بتذاكره", correct: true },
    { q: "اعتبار ملاحظات الذكاء الاصطناعي على شغلك بديل كامل عن رأي معلم أو مدرب حقيقي", correct: false },
    { q: "استخدام الذكاء الاصطناعي في العصف الذهني قبل الاجتماعات أو المشاريع", correct: true },
    { q: "تصديق إن الذكاء الاصطناعي \"يفكر ويحس\" زي الإنسان بالظبط", correct: false },
    { q: "توضيح للقارئ لما تستخدم محتوى ولّده الذكاء الاصطناعي في عمل بتنشره", correct: true },
    { q: "استخدام نفس إجابة الذكاء الاصطناعي في أكتر من مكان (بحث، تقرير، بوست) من غير أي تعديل", correct: false },
    { q: "تعلم أساسيات إزاي الذكاء الاصطناعي بيشتغل عشان تفهم حدوده ومميزاته", correct: true }
];

const QUIZ_LENGTH = 10;
let currentQuizQuestions = [];
let quizAnswers = [];

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    currentQuizQuestions = shuffleArray(quizQuestionPool).slice(0, QUIZ_LENGTH);
    quizAnswers = new Array(currentQuizQuestions.length).fill(null);

    const resultEl = document.getElementById('quizResult');
    if (resultEl) resultEl.style.display = 'none';

    container.innerHTML = currentQuizQuestions.map((item, i) => `
        <div class="quiz-question" data-index="${i}">
            <p class="quiz-q-text">${i + 1}. ${item.q}</p>
            <div class="quiz-options">
                <button type="button" class="quiz-option" onclick="selectQuizAnswer(${i}, true, this)">صح</button>
                <button type="button" class="quiz-option" onclick="selectQuizAnswer(${i}, false, this)">غلط</button>
            </div>
        </div>
    `).join('') + `<button type="button" class="quiz-submit-btn" onclick="submitQuiz()">اعرف نتيجتك</button>`;
}

window.selectQuizAnswer = function(index, value, btn) {
    quizAnswers[index] = value;
    const options = btn.parentElement.querySelectorAll('.quiz-option');
    options.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
};

window.submitQuiz = function() {
    const resultEl = document.getElementById('quizResult');
    if (!resultEl) return;

    if (quizAnswers.includes(null)) {
        resultEl.style.display = 'block';
        resultEl.innerHTML = `<p class="quiz-warning">⚠️ جاوب على كل الأسئلة الأول عشان تعرف نتيجتك.</p>`;
        return;
    }

    let score = 0;
    currentQuizQuestions.forEach((item, i) => { if (quizAnswers[i] === item.correct) score++; });

    let message;
    if (score === currentQuizQuestions.length) {
        message = "ممتاز! وعيك بالاستخدام الصح للذكاء الاصطناعي عالي جداً 🌟";
    } else if (score >= currentQuizQuestions.length * 0.6) {
        message = "وعيك كويس، بس لسه فيه نقط تستاهل انتباه أكتر 👍";
    } else {
        message = "وعيك محتاج شوية تطوير — راجع النصائح اللي فوق وجرب تاني 💡";
    }

    resultEl.style.display = 'block';
    resultEl.innerHTML = `
        <p class="quiz-score">نتيجتك: ${score} / ${currentQuizQuestions.length}</p>
        <p class="quiz-message">${message}</p>
        <button type="button" class="quiz-retry-btn" onclick="renderQuiz()">جرب أسئلة تانية 🔄</button>
    `;
};

// ===== "صح ولا غلط؟" AI Usage Scenario Tool =====
window.checkAiScenario = async function() {
    const input = document.getElementById('aiToolInput');
    const resultEl = document.getElementById('aiToolResult');
    const btn = document.getElementById('aiToolBtn');
    if (!input || !resultEl) return;

    const scenario = input.value.trim();
    if (!scenario) {
        resultEl.style.display = 'block';
        resultEl.innerHTML = `<p class="ai-tool-warning">⚠️ اكتب الموقف الأول.</p>`;
        return;
    }

    resultEl.style.display = 'block';
    resultEl.innerHTML = `<p class="ai-tool-loading">⏳ بنفكر...</p>`;
    btn.disabled = true;

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: typeof CHATBOT_MODEL !== 'undefined' ? CHATBOT_MODEL : "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content: `أنت جزء من مبادرة "الصح من الغلط" لنشر الوعي بالاستخدام الصحيح للذكاء الاصطناعي. المستخدم هيديك موقف استخدم فيه الذكاء الاصطناعي، ومطلوب منك:
1. تبدأ إجابتك بكلمة "✅ صح" أو "⚠️ محتاج انتباه" بس - بدون أي كلام تاني قبلها.
2. بعدها سطر جديد فيه تفسير قصير جداً (سطرين كحد أقصى) بالعامية المصرية البسيطة يوضح السبب.
3. خليك موضوعي ومتوازن، ومتفتيش قدام لجنة تحكيم أو جمهور عام - يعني اللغة لازم تكون بسيطة ومحترمة.`
                    },
                    { role: "user", content: scenario }
                ],
                temperature: 0.3,
                max_tokens: 300
            })
        });

        const data = await response.json();
        const answer = data.choices[0].message.content;
        resultEl.innerHTML = `<p class="ai-tool-answer">${answer.replace(/\n/g, '<br>')}</p>`;
    } catch (error) {
        resultEl.innerHTML = `<p class="ai-tool-warning">⚠️ حدث خطأ في الاتصال. حاول تاني.</p>`;
        console.error(error);
    } finally {
        btn.disabled = false;
    }
};
