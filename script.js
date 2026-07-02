document.addEventListener('DOMContentLoaded', () => {
  const cta = document.getElementById('cta');
  const langToggle = document.getElementById('langToggle');
  const i18nElements = document.querySelectorAll('[data-i18n]');

  const translations = {
    en: {
      heroTitle: 'OptiCore Solutions',
      card1Title: '1. Secure Your Assets',
      card1Btn1: 'Site & Server Hardening',
      card1Btn2: 'Network & Router Audit',
      card2Title: '2. Build Your Web Presence',
      card2Btn1: 'Dynamic Frontend UIs',
      card2Btn2: 'UX-Focused Lightweight Sites',
      card3Title: '3. Automate Your Workflow',
      card3Btn1: 'Custom Telegram Bots',
      card3Btn2: 'WhatsApp Business Automation',
      ctaText: 'Start a Project Now',
      footerContact: 'Contact Us',
      footerTerms: 'terms',
      footerPrivacy: 'privacy',
      footerServices: 'services',
      footerSupport: 'support',
      footerTag: 'OptiCore.dev | The Core of Optimization',
    },
    ar: {
      heroTitle: 'أوبتي كور للحلول التقنية',
      card1Title: '1. تحصين وتأمين الأصول الرقمية',
      card1Btn1: 'تحصين الموقع والخوادم',
      card1Btn2: 'مراجعة الشبكات وأجهزة التوجيه',
      card2Title: '2. بناء حضورك الرقمي',
      card2Btn1: 'واجهات مستخدم ديناميكية',
      card2Btn2: 'مواقع خفيفة مع تجربة مستخدم',
      card3Title: '3. أتمتة سير العمل',
      card3Btn1: 'روبوتات تيليجرام مخصصة',
      card3Btn2: 'أتمتة واتساب للأعمال',
      ctaText: 'ابدأ مشروعك الآن',
      footerContact: 'تواصل معنا',
      footerTerms: 'الشروط',
      footerPrivacy: 'الخصوصية',
      footerServices: 'الخدمات',
      footerSupport: 'الدعم',
      footerTag: 'OptiCore.dev | جوهر التحسين التقني',
    },
  };

  let currentLanguage = 'en';

  const applyLanguage = (language) => {
    currentLanguage = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en';

    i18nElements.forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });

    if (langToggle) {
      langToggle.textContent = language === 'ar' ? 'EN 🌐' : '🌐 العربية';
    }
  };

  langToggle?.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar');
  });

  cta?.addEventListener('click', () => {
    alert('Thanks! Let\u2019s start your project. We\u2019ll be in touch soon.');
  });

  document.querySelectorAll('.pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach((b) => b.classList.remove('pill-primary'));
      btn.classList.add('pill-primary');
    });
  });

  // subtle entrance animation
  document.querySelectorAll('.card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    setTimeout(() => {
      card.style.transition = 'opacity .5s ease, transform .5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 120 * i);
  });

  applyLanguage(currentLanguage);
});
