// --- Data Mocks ---
const teamMembers = [
    {
        id: 1, name:'Abdelrahman Elkomy', role: 'مؤسس المبادرة',
        shortDesc: 'صاحب فكرة المبادرة والمدير العام لها.',
        fullBio: 'الكومي هو المؤسس الرئيسي لمبادرة "الصح من الغلط". يمتلك خبرة تفوق العشر سنوات في مجال التنمية المجتمعية وتوجيه الشباب. يهدف من خلال هذه المبادرة إلى خلق بيئة إيجابية تساهم في بناء جيل واعٍ.',
        avatar: 'Abdelrahman.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 2, name: 'Marwan Samir', role: 'رئيسة التحرير',
        shortDesc: 'مسؤولة عن مراجعة وتدقيق المحتوى المنشور.',
        fullBio: 'مروان يشرف على جميع المقالات والمنشورات للتأكد من توافقها مع أهداف المبادرة.',
        avatar: 'Marwan.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 3, name: 'Yousef Mohamed ELemary', role: 'مدير التقنية',
        shortDesc: 'مطور الويب والمسؤول عن المنصة التقنية.',
        fullBio: 'يوسف مهندس برمجيات محترف، يسخر مهاراته التقنية لتوفير منصة سهلة الاستخدام تخدم أهداف المبادرة وتوصل رسالتها لأكبر شريحة ممكنة.',
        avatar: 'Yousef.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 4, name: 'Mona Nasr', role: 'مصممة جرافيك',
        shortDesc: 'صانعة الهوية البصرية والتصاميم الإبداعية.',
        fullBio: 'منى فنانة تصاميمها تساعد في إيصال أفكار المبادرة بشكل جذاب ومؤثر.',
        avatar: 'Mona.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 5, name: 'Asmaa Ashraf', role: 'مسؤول التواصل الاجتماعي',
        shortDesc: 'يدير حسابات المبادرة ويتواصل مع المتابعين.',
        fullBio: 'اسماء تعمل جاهدة لنشر ثقافة "الصح من الغلط" عبر جميع المنصات الاجتماعية.',
        avatar: 'Asmaa.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    }
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
            setTimeout(() => loader.style.display = 'none', 500); // remove from flow
        }, 800); // 0.8s fake load time for effect
    }
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if(navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
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
    
    // Close menu when clicking a link
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
            // Unobserve after animating once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all slide-up elements
document.addEventListener('DOMContentLoaded', () => {
    // Render Data on Home Page first so cards exist in DOM
    renderBlogPosts();
    renderTeamMembers();

    const slideElements = document.querySelectorAll('.slide-up, .about-card, .blog-card, .team-card');
    slideElements.forEach(el => {
        // Add class to non-manually tagged elements to prep for animation
        if(!el.classList.contains('slide-up')){
            el.classList.add('slide-up');
        }
        observer.observe(el);
    });

    // Generate Particles for Hero if exists
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

// --- Render Functions (Home Page) ---
function renderBlogPosts() {
    const container = document.getElementById('blog-container');
    if(!container) return;

    container.innerHTML = blogPosts.map(post => `
        <a href="article.html?id=${post.id}" class="blog-card glass">
            <div class="blog-meta">
                <span>${post.date}</span>
                <span>${post.author}</span>
            </div>
            <h3>${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="read-more">
                <span>اقرأ المزيد</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </div>
        </a>
    `).join('');
}

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

// --- Dynamic Page Loaders (Profile / Article) ---
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadProfileData() {
    let id = getUrlParam('id');
    if (!id) id = 1; // Fallback for direct previews
    const container = document.getElementById('profile-content');
    if(!container) return;

    const member = teamMembers.find(m => m.id == id);
    
    if(!member) {
        container.innerHTML = `<div style="text-align: center; padding: 50px;"><h2>لم يتم العثور على العضو</h2></div>`;
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
                <a href="${member.social.facebook}" class="social-icon-small">
                    Facebook
                </a>

                <a href="${member.social.instagram}" class="social-icon-small">
                    Instagram
                </a>

                <a href="${member.social.linkedin}" class="social-icon-small">
                    LinkedIn
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

function loadArticleData() {
    let id = getUrlParam('id');
    if (!id) id = 1; // Fallback for direct previews
    const container = document.getElementById('article-content');
    if(!container) return;

    const post = blogPosts.find(p => p.id == id);
    
    if(!post) {
        container.innerHTML = `<div style="text-align: center; padding: 50px;"><h2>لم يتم العثور على المقال</h2></div>`;
        return;
    }

    container.innerHTML = `
        <div class="article-header">
            <h1>${post.title}</h1>
            <div class="article-meta">
                <span>تاريخ النشر: ${post.date}</span>
                <span>الكاتب: ${post.author}</span>
            </div>
        </div>
        <div class="article-body">
            ${post.content}
        </div>
    `;
}
