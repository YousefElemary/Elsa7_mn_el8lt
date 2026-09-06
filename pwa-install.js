// pwa-install.js — شغّال على كل زرار بكلاس install-app-btn
(function () {
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
  });

  function isIOS() {
    return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
  }

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  async function handleInstallClick(e) {
    e.preventDefault();

    if (isStandalone()) {
      alert('التطبيق متثبت بالفعل على جهازك ✅');
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      return;
    }

    if (isIOS()) {
      alert('لتثبيت التطبيق على الآيفون:\n\n1) دوس على زرار المشاركة (⬆️) تحت في المتصفح\n2) اختار "إضافة إلى الشاشة الرئيسية" (Add to Home Screen)');
    } else {
      alert('لتثبيت التطبيق:\n\nدوس على قائمة المتصفح (⋮ فوق على اليمين) واختار "Install app" أو "تثبيت التطبيق".');
    }
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.install-app-btn')) {
      handleInstallClick(e);
    }
  });
})();
