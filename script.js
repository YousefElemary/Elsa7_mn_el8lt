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
        role: 'مسئول وسائل التواصل والتسويق',
        shortDesc: 'يدير وسائل التواصل الاجتماعي ويسوق للمبادرة.',
        fullBio: 'مروان مسؤول عن إدارة وسائل التواصل الاجتماعي والتسويق للمبادرة، ويعمل على نشر رسائلها ومبادئها بشكل فعال.',
        avatar: 'Marwan.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 4,
        name: 'أسماء فؤاد',
        role: 'مسؤولة الإعلام',
        shortDesc: 'تدير الحملات على منصات التواصل الاجتماعي.',
        fullBio: 'أسماء تعمل جاهدة لنشر ثقافة "الصح من الغلط" عبر جميع المنصات الاجتماعية.',
        avatar: 'Asmaa.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 5,
        name: 'يوسف محمد العمرى',
        role: 'مصمم فيديوهات',
        shortDesc: 'يوسف هو المساعد لنا فى تحويل أفكارنا الى فيديوهات بشكل احترافى.',
        fullBio: 'يوسف هو المساعد لنا فى تحويل أفكارنا الى فيديوهات بشكل احترافى، ويعمل على تحويل الأفكار إلى محتوى بصري جذاب واحترافي يساهم في توصيل رسائل المبادرة بشكل مؤثر.',
        avatar: 'Yousef.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    }
];

const volunteerMembers = [
    {
        id: 1,
        name: 'باتريك أسامة',
        role: 'مسئول عن المتطوعين',
        shortDesc: 'مهمته توزيع المهام و الاحتفاظ على سير المتطوعين بشكل متوازٍ.',
        avatar: '657518365_122103158414917687_2018520676206605947_n.jpg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 2,
        name: 'نور الدين',
        role: 'متطوعة دعم المجتمع',
        shortDesc: 'تعمل على التواصل مع المدارس والمجموعات الشبابية.',
        avatar: 'Yousef.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 3,
        name: 'سارة حسين',
        role: 'متطوعة فعالية',
        shortDesc: 'تنظم اللقاءات وتساعد في إدارة الحضور والنقاشات.',
        avatar: 'Mona.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 4,
        name: 'إيهاب محمود',
        role: 'متطوع دعم فني',
        shortDesc: 'يساعد في تنسيق المحتوى الرقمي وتحسين تجربة المستخدم.',
        avatar: 'Marwan.jpeg',
        social: { facebook: '#', instagram: '#', linkedin: '#' }
    },
    {
        id: 5,
        name: 'هبة خالد',
        role: 'متطوعة توصيل رسائل',
        shortDesc: 'تساهم في نشر المبادرة داخل المجتمع وتوحيد الفرق التطوعية.',
        avatar: 'Mona.jpeg',
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
    renderTeamMembers();
    renderVolunteerMembers();

    const slideElements = document.querySelectorAll('.slide-up, .about-card, .team-card');
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
// Blog rendering removed

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
    const container = document.getElementById('volunteer-container');
    if(!container) return;

    container.innerHTML = volunteerMembers.map(member => `
        <div class="team-card glass">
            <div class="member-avatar">
                <img src="${member.avatar}" alt="${member.name}" class="avatar-img">
            </div>

            <div class="member-info">
                <h3>${member.name}</h3>
                <p class="role">${member.role}</p>
                <p class="short-desc">${member.shortDesc}</p>
            </div>
        </div>
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

// loadArticleData removed (blog deleted)
