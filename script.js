const translations = {
  en: {
    brand: 'OptiCore',
    hero_title: 'OptiCore Solutions',
    card1_title: '🛡️ 1. Secure Your Assets',
    card1_p1: 'Site & Server Hardening',
    card1_p2: 'Network & Router Audit',
    card2_title: '</> 2. Build Your Web Presence',
    card2_p1: 'Dynamic Frontend UIs',
    card2_p2: 'UX-Focused Lightweight Sites',
    card3_title: '⚙️ 3. Automate Your Workflow',
    card3_p1: 'Custom Telegram Bots',
    card3_p2: 'WhatsApp Business Automation',
    cta: 'Start a Project Now',
    f_contact: 'Contact Us',
    f_terms: 'terms',
    f_privacy: 'privacy',
    f_services: 'services',
    f_support: 'support',
    tag: 'OptiCore.dev | The Core of Optimization',
    switch_label: 'العربية',
    alert: 'Thanks! Let\u2019s start your project. We\u2019ll be in touch soon.'
  },
  ar: {
    brand: 'أوبتي كور',
    hero_title: 'أوبتي كور للحلول التقنية',
    card1_title: '🛡️ 1. تحصين وتأمين الأصول الرقمية',
    card1_p1: 'تحصين المواقع والخوادم',
    card1_p2: 'تدقيق الشبكات والراوترات',
    card2_title: '</> 2. بناء حضورك على الويب',
    card2_p1: 'واجهات أمامية ديناميكية',
    card2_p2: 'مواقع خفيفة تركّز على تجربة المستخدم',
    card3_title: '⚙️ 3. أتمتة سير العمل',
    card3_p1: 'بوتات تيليجرام مخصصة',
    card3_p2: 'أتمتة واتساب للأعمال',
    cta: 'ابدأ مشروعك الآن',
    f_contact: 'تواصل معنا',
    f_terms: 'الشروط',
    f_privacy: 'الخصوصية',
    f_services: 'الخدمات',
    f_support: 'الدعم',
    tag: 'OptiCore.dev | جوهر التحسين والأتمتة',
    switch_label: 'English',
    alert: 'شكراً لك! لنبدأ مشروعك. سنتواصل معك قريباً.'
  }
};

let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  const label = document.querySelector('#lang-toggle .lang-label');
  if (label) label.textContent = dict.switch_label;
  document.body.classList.toggle('rtl', lang === 'ar');
}

document.addEventListener('DOMContentLoaded', () => {
  const cta = document.getElementById('cta');
  cta?.addEventListener('click', () => {
    alert(translations[currentLang].alert);
  });

  document.querySelectorAll('.pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach((b) => b.classList.remove('pill-primary'));
      btn.classList.add('pill-primary');
    });
  });

  const langBtn = document.getElementById('lang-toggle');
  langBtn?.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  });

  document.querySelectorAll('.card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(12px)';
    setTimeout(() => {
      card.style.transition = 'opacity .5s ease, transform .5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 120 * i);
  });
});
