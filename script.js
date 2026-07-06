document.addEventListener('DOMContentLoaded', () => {
  const cta = document.getElementById('cta');
  const langToggle = document.getElementById('langToggle');
  const i18nElements = document.querySelectorAll('[data-i18n]');
  const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

  const WHATSAPP_URL = 'https://wa.me/972567653938';
  const LANGUAGE_STORAGE_KEY = 'opticore-language';

  const countryDialCodes = [
    { name: 'Afghanistan', flag: '🇦🇫', dialCode: '+93' },
    { name: 'Albania', flag: '🇦🇱', dialCode: '+355' },
    { name: 'Algeria', flag: '🇩🇿', dialCode: '+213' },
    { name: 'Andorra', flag: '🇦🇩', dialCode: '+376' },
    { name: 'Angola', flag: '🇦🇴', dialCode: '+244' },
    { name: 'Antigua and Barbuda', flag: '🇦🇬', dialCode: '+1-268' },
    { name: 'Argentina', flag: '🇦🇷', dialCode: '+54' },
    { name: 'Armenia', flag: '🇦🇲', dialCode: '+374' },
    { name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
    { name: 'Austria', flag: '🇦🇹', dialCode: '+43' },
    { name: 'Azerbaijan', flag: '🇦🇿', dialCode: '+994' },
    { name: 'Bahamas', flag: '🇧🇸', dialCode: '+1-242' },
    { name: 'Bahrain', flag: '🇧🇭', dialCode: '+973' },
    { name: 'Bangladesh', flag: '🇧🇩', dialCode: '+880' },
    { name: 'Barbados', flag: '🇧🇧', dialCode: '+1-246' },
    { name: 'Belarus', flag: '🇧🇾', dialCode: '+375' },
    { name: 'Belgium', flag: '🇧🇪', dialCode: '+32' },
    { name: 'Belize', flag: '🇧🇿', dialCode: '+501' },
    { name: 'Benin', flag: '🇧🇯', dialCode: '+229' },
    { name: 'Bhutan', flag: '🇧🇹', dialCode: '+975' },
    { name: 'Bolivia', flag: '🇧🇴', dialCode: '+591' },
    { name: 'Bosnia and Herzegovina', flag: '🇧🇦', dialCode: '+387' },
    { name: 'Botswana', flag: '🇧🇼', dialCode: '+267' },
    { name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
    { name: 'Brunei', flag: '🇧🇳', dialCode: '+673' },
    { name: 'Bulgaria', flag: '🇧🇬', dialCode: '+359' },
    { name: 'Burkina Faso', flag: '🇧🇫', dialCode: '+226' },
    { name: 'Burundi', flag: '🇧🇮', dialCode: '+257' },
    { name: 'Cabo Verde', flag: '🇨🇻', dialCode: '+238' },
    { name: 'Cambodia', flag: '🇰🇭', dialCode: '+855' },
    { name: 'Cameroon', flag: '🇨🇲', dialCode: '+237' },
    { name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
    { name: 'Central African Republic', flag: '🇨🇫', dialCode: '+236' },
    { name: 'Chad', flag: '🇹🇩', dialCode: '+235' },
    { name: 'Chile', flag: '🇨🇱', dialCode: '+56' },
    { name: 'China', flag: '🇨🇳', dialCode: '+86' },
    { name: 'Colombia', flag: '🇨🇴', dialCode: '+57' },
    { name: 'Comoros', flag: '🇰🇲', dialCode: '+269' },
    { name: 'Congo (Republic of the Congo)', flag: '🇨🇬', dialCode: '+242' },
    { name: 'Congo (DRC)', flag: '🇨🇩', dialCode: '+243' },
    { name: 'Costa Rica', flag: '🇨🇷', dialCode: '+506' },
    { name: 'Côte d’Ivoire', flag: '🇨🇮', dialCode: '+225' },
    { name: 'Croatia', flag: '🇭🇷', dialCode: '+385' },
    { name: 'Cuba', flag: '🇨🇺', dialCode: '+53' },
    { name: 'Cyprus', flag: '🇨🇾', dialCode: '+357' },
    { name: 'Czechia', flag: '🇨🇿', dialCode: '+420' },
    { name: 'Denmark', flag: '🇩🇰', dialCode: '+45' },
    { name: 'Djibouti', flag: '🇩🇯', dialCode: '+253' },
    { name: 'Dominica', flag: '🇩🇲', dialCode: '+1-767' },
    { name: 'Dominican Republic', flag: '🇩🇴', dialCode: '+1-809' },
    { name: 'Ecuador', flag: '🇪🇨', dialCode: '+593' },
    { name: 'Egypt', flag: '🇪🇬', dialCode: '+20' },
    { name: 'El Salvador', flag: '🇸🇻', dialCode: '+503' },
    { name: 'Equatorial Guinea', flag: '🇬🇶', dialCode: '+240' },
    { name: 'Eritrea', flag: '🇪🇷', dialCode: '+291' },
    { name: 'Estonia', flag: '🇪🇪', dialCode: '+372' },
    { name: 'Eswatini', flag: '🇸🇿', dialCode: '+268' },
    { name: 'Ethiopia', flag: '🇪🇹', dialCode: '+251' },
    { name: 'Fiji', flag: '🇫🇯', dialCode: '+679' },
    { name: 'Finland', flag: '🇫🇮', dialCode: '+358' },
    { name: 'France', flag: '🇫🇷', dialCode: '+33' },
    { name: 'Gabon', flag: '🇬🇦', dialCode: '+241' },
    { name: 'Gambia', flag: '🇬🇲', dialCode: '+220' },
    { name: 'Georgia', flag: '🇬🇪', dialCode: '+995' },
    { name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
    { name: 'Ghana', flag: '🇬🇭', dialCode: '+233' },
    { name: 'Greece', flag: '🇬🇷', dialCode: '+30' },
    { name: 'Grenada', flag: '🇬🇩', dialCode: '+1-473' },
    { name: 'Guatemala', flag: '🇬🇹', dialCode: '+502' },
    { name: 'Guinea', flag: '🇬🇳', dialCode: '+224' },
    { name: 'Guinea-Bissau', flag: '🇬🇼', dialCode: '+245' },
    { name: 'Guyana', flag: '🇬🇾', dialCode: '+592' },
    { name: 'Haiti', flag: '🇭🇹', dialCode: '+509' },
    { name: 'Honduras', flag: '🇭🇳', dialCode: '+504' },
    { name: 'Hungary', flag: '🇭🇺', dialCode: '+36' },
    { name: 'Iceland', flag: '🇮🇸', dialCode: '+354' },
    { name: 'India', flag: '🇮🇳', dialCode: '+91' },
    { name: 'Indonesia', flag: '🇮🇩', dialCode: '+62' },
    { name: 'Iran', flag: '🇮🇷', dialCode: '+98' },
    { name: 'Iraq', flag: '🇮🇶', dialCode: '+964' },
    { name: 'Ireland', flag: '🇮🇪', dialCode: '+353' },
    { name: 'Israel', flag: '🇮🇱', dialCode: '+972' },
    { name: 'Italy', flag: '🇮🇹', dialCode: '+39' },
    { name: 'Jamaica', flag: '🇯🇲', dialCode: '+1-876' },
    { name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
    { name: 'Jordan', flag: '🇯🇴', dialCode: '+962' },
    { name: 'Kazakhstan', flag: '🇰🇿', dialCode: '+7' },
    { name: 'Kenya', flag: '🇰🇪', dialCode: '+254' },
    { name: 'Kiribati', flag: '🇰🇮', dialCode: '+686' },
    { name: 'Kuwait', flag: '🇰🇼', dialCode: '+965' },
    { name: 'Kyrgyzstan', flag: '🇰🇬', dialCode: '+996' },
    { name: 'Laos', flag: '🇱🇦', dialCode: '+856' },
    { name: 'Latvia', flag: '🇱🇻', dialCode: '+371' },
    { name: 'Lebanon', flag: '🇱🇧', dialCode: '+961' },
    { name: 'Lesotho', flag: '🇱🇸', dialCode: '+266' },
    { name: 'Liberia', flag: '🇱🇷', dialCode: '+231' },
    { name: 'Libya', flag: '🇱🇾', dialCode: '+218' },
    { name: 'Liechtenstein', flag: '🇱🇮', dialCode: '+423' },
    { name: 'Lithuania', flag: '🇱🇹', dialCode: '+370' },
    { name: 'Luxembourg', flag: '🇱🇺', dialCode: '+352' },
    { name: 'Madagascar', flag: '🇲🇬', dialCode: '+261' },
    { name: 'Malawi', flag: '🇲🇼', dialCode: '+265' },
    { name: 'Malaysia', flag: '🇲🇾', dialCode: '+60' },
    { name: 'Maldives', flag: '🇲🇻', dialCode: '+960' },
    { name: 'Mali', flag: '🇲🇱', dialCode: '+223' },
    { name: 'Malta', flag: '🇲🇹', dialCode: '+356' },
    { name: 'Marshall Islands', flag: '🇲🇭', dialCode: '+692' },
    { name: 'Mauritania', flag: '🇲🇷', dialCode: '+222' },
    { name: 'Mauritius', flag: '🇲🇺', dialCode: '+230' },
    { name: 'Mexico', flag: '🇲🇽', dialCode: '+52' },
    { name: 'Micronesia', flag: '🇫🇲', dialCode: '+691' },
    { name: 'Moldova', flag: '🇲🇩', dialCode: '+373' },
    { name: 'Monaco', flag: '🇲🇨', dialCode: '+377' },
    { name: 'Mongolia', flag: '🇲🇳', dialCode: '+976' },
    { name: 'Montenegro', flag: '🇲🇪', dialCode: '+382' },
    { name: 'Morocco', flag: '🇲🇦', dialCode: '+212' },
    { name: 'Mozambique', flag: '🇲🇿', dialCode: '+258' },
    { name: 'Myanmar', flag: '🇲🇲', dialCode: '+95' },
    { name: 'Namibia', flag: '🇳🇦', dialCode: '+264' },
    { name: 'Nauru', flag: '🇳🇷', dialCode: '+674' },
    { name: 'Nepal', flag: '🇳🇵', dialCode: '+977' },
    { name: 'Netherlands', flag: '🇳🇱', dialCode: '+31' },
    { name: 'New Zealand', flag: '🇳🇿', dialCode: '+64' },
    { name: 'Nicaragua', flag: '🇳🇮', dialCode: '+505' },
    { name: 'Niger', flag: '🇳🇪', dialCode: '+227' },
    { name: 'Nigeria', flag: '🇳🇬', dialCode: '+234' },
    { name: 'North Korea', flag: '🇰🇵', dialCode: '+850' },
    { name: 'North Macedonia', flag: '🇲🇰', dialCode: '+389' },
    { name: 'Norway', flag: '🇳🇴', dialCode: '+47' },
    { name: 'Oman', flag: '🇴🇲', dialCode: '+968' },
    { name: 'Pakistan', flag: '🇵🇰', dialCode: '+92' },
    { name: 'Palau', flag: '🇵🇼', dialCode: '+680' },
    { name: 'Palestine', flag: '🇵🇸', dialCode: '+970' },
    { name: 'Panama', flag: '🇵🇦', dialCode: '+507' },
    { name: 'Papua New Guinea', flag: '🇵🇬', dialCode: '+675' },
    { name: 'Paraguay', flag: '🇵🇾', dialCode: '+595' },
    { name: 'Peru', flag: '🇵🇪', dialCode: '+51' },
    { name: 'Philippines', flag: '🇵🇭', dialCode: '+63' },
    { name: 'Poland', flag: '🇵🇱', dialCode: '+48' },
    { name: 'Portugal', flag: '🇵🇹', dialCode: '+351' },
    { name: 'Qatar', flag: '🇶🇦', dialCode: '+974' },
    { name: 'Romania', flag: '🇷🇴', dialCode: '+40' },
    { name: 'Russia', flag: '🇷🇺', dialCode: '+7' },
    { name: 'Rwanda', flag: '🇷🇼', dialCode: '+250' },
    { name: 'Saint Kitts and Nevis', flag: '🇰🇳', dialCode: '+1-869' },
    { name: 'Saint Lucia', flag: '🇱🇨', dialCode: '+1-758' },
    { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', dialCode: '+1-784' },
    { name: 'Samoa', flag: '🇼🇸', dialCode: '+685' },
    { name: 'San Marino', flag: '🇸🇲', dialCode: '+378' },
    { name: 'São Tomé and Príncipe', flag: '🇸🇹', dialCode: '+239' },
    { name: 'Saudi Arabia', flag: '🇸🇦', dialCode: '+966' },
    { name: 'Senegal', flag: '🇸🇳', dialCode: '+221' },
    { name: 'Serbia', flag: '🇷🇸', dialCode: '+381' },
    { name: 'Seychelles', flag: '🇸🇨', dialCode: '+248' },
    { name: 'Sierra Leone', flag: '🇸🇱', dialCode: '+232' },
    { name: 'Singapore', flag: '🇸🇬', dialCode: '+65' },
    { name: 'Slovakia', flag: '🇸🇰', dialCode: '+421' },
    { name: 'Slovenia', flag: '🇸🇮', dialCode: '+386' },
    { name: 'Solomon Islands', flag: '🇸🇧', dialCode: '+677' },
    { name: 'Somalia', flag: '🇸🇴', dialCode: '+252' },
    { name: 'South Africa', flag: '🇿🇦', dialCode: '+27' },
    { name: 'South Korea', flag: '🇰🇷', dialCode: '+82' },
    { name: 'South Sudan', flag: '🇸🇸', dialCode: '+211' },
    { name: 'Spain', flag: '🇪🇸', dialCode: '+34' },
    { name: 'Sri Lanka', flag: '🇱🇰', dialCode: '+94' },
    { name: 'Sudan', flag: '🇸🇩', dialCode: '+249' },
    { name: 'Suriname', flag: '🇸🇷', dialCode: '+597' },
    { name: 'Sweden', flag: '🇸🇪', dialCode: '+46' },
    { name: 'Switzerland', flag: '🇨🇭', dialCode: '+41' },
    { name: 'Syria', flag: '🇸🇾', dialCode: '+963' },
    { name: 'Taiwan', flag: '🇹🇼', dialCode: '+886' },
    { name: 'Tajikistan', flag: '🇹🇯', dialCode: '+992' },
    { name: 'Tanzania', flag: '🇹🇿', dialCode: '+255' },
    { name: 'Thailand', flag: '🇹🇭', dialCode: '+66' },
    { name: 'Timor-Leste', flag: '🇹🇱', dialCode: '+670' },
    { name: 'Togo', flag: '🇹🇬', dialCode: '+228' },
    { name: 'Tonga', flag: '🇹🇴', dialCode: '+676' },
    { name: 'Trinidad and Tobago', flag: '🇹🇹', dialCode: '+1-868' },
    { name: 'Tunisia', flag: '🇹🇳', dialCode: '+216' },
    { name: 'Turkey', flag: '🇹🇷', dialCode: '+90' },
    { name: 'Turkmenistan', flag: '🇹🇲', dialCode: '+993' },
    { name: 'Tuvalu', flag: '🇹🇻', dialCode: '+688' },
    { name: 'Uganda', flag: '🇺🇬', dialCode: '+256' },
    { name: 'Ukraine', flag: '🇺🇦', dialCode: '+380' },
    { name: 'United Arab Emirates', flag: '🇦🇪', dialCode: '+971' },
    { name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
    { name: 'United States', flag: '🇺🇸', dialCode: '+1' },
    { name: 'Uruguay', flag: '🇺🇾', dialCode: '+598' },
    { name: 'Uzbekistan', flag: '🇺🇿', dialCode: '+998' },
    { name: 'Vanuatu', flag: '🇻🇺', dialCode: '+678' },
    { name: 'Vatican City', flag: '🇻🇦', dialCode: '+379' },
    { name: 'Venezuela', flag: '🇻🇪', dialCode: '+58' },
    { name: 'Vietnam', flag: '🇻🇳', dialCode: '+84' },
    { name: 'Yemen', flag: '🇾🇪', dialCode: '+967' },
    { name: 'Zambia', flag: '🇿🇲', dialCode: '+260' },
    { name: 'Zimbabwe', flag: '🇿🇼', dialCode: '+263' },
    { name: 'Kosovo', flag: '🇽🇰', dialCode: '+383' }
  ];

  const populateCountryCodeSelect = () => {
    const countrySelect = document.getElementById('whatsappCountryCode');
    if (!countrySelect) return;

    countrySelect.innerHTML = '';
    countryDialCodes.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.dialCode;
      option.textContent = `${country.flag} ${country.dialCode} (${country.name})`;
      countrySelect.appendChild(option);
    });

    const defaultCountry = countryDialCodes.find((country) => country.dialCode === '+970') || countryDialCodes[0];
    if (defaultCountry) {
      countrySelect.value = defaultCountry.dialCode;
    }
  };

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
      // contact page
      contactTitle: 'Get in Touch',
      contactSubtitle: 'Tell us about your project — we usually reply within one business day.',
      contactName: 'Name',
      contactEmail: 'Email',
      contactWhatsappLabel: 'WhatsApp Number',
      contactService: 'Service',
      contactMessage: 'Message',
      contactNamePh: 'Your full name',
      contactEmailPh: 'you@example.com',
      contactWhatsappPlaceholder: '5XXXXXXXX',
      contactMessagePh: 'Share a few details about your project…',
      contactSubmit: 'Send Message',
      contactSubmitting: 'Sending...',
      contactSuccess: 'Thank you! Your message has been sent successfully.',
      contactError: 'Oops! There was a problem submitting your form.',
      contactErrorModal: 'Oops! Something went wrong. Please check your connection and try again.',
      errorModalTitle: 'Oops',
      errorModalRetry: 'Try Again',
      modalClose: 'Great!',
      contactWhatsappError: 'Please enter a valid WhatsApp number.',
      quickInfoEyebrow: 'Quick info',
      quickInfoTitle: "Let's build something exceptional together",
      quickInfoCopy: 'Need a polished landing page, secure automation, or a high-conversion web experience? Share a few details and we will map the right plan.',
      quickInfoResponse: 'Replies within 1 business day',
      channelEmail: 'Email',
      channelWhatsapp: 'WhatsApp',
      serviceAutomate: 'Automate Your Workflow',
      serviceWeb: 'Build Your Web Presence',
      serviceSecure: 'Secure Your Assets',
      serviceOther: 'Other',
      errorName: 'Please enter your name.',
      errorEmail: 'Please enter a valid email address.',
      errorService: 'Please select at least one service.',
      errorMessage: 'Please write a short message.',
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
      // contact page
      contactTitle: 'تواصل معنا',
      contactSubtitle: 'أخبرنا عن مشروعك — نرد عادةً خلال يوم عمل واحد.',
      contactName: 'الاسم',
      contactEmail: 'البريد الإلكتروني',
      contactWhatsappLabel: 'رقم الواتساب',
      contactService: 'الخدمة',
      contactMessage: 'الرسالة',
      contactNamePh: 'اسمك الكامل',
      contactEmailPh: 'you@example.com',
      contactWhatsappPlaceholder: '5XXXXXXXX',
      contactMessagePh: 'شارك بعض التفاصيل عن مشروعك…',
      contactSubmit: 'إرسال الرسالة',
      contactSubmitting: 'جاري الإرسال...',
      contactSuccess: 'شكرًا لك! تم إرسال رسالتك بنجاح.',
      contactError: 'عذرًا! حدثت مشكلة أثناء إرسال البيانات.',
      contactErrorModal: 'عذراً! حدث خطأ ما. يرجى التحقق من الاتصال والمحاولة مرة أخرى.',
      errorModalTitle: 'عذراً',
      errorModalRetry: 'إعادة المحاولة',
      modalClose: 'ممتاز!',
      contactWhatsappError: 'يرجى إدخال رقم واتساب صالح.',
      quickInfoEyebrow: 'معلومات سريعة',
      quickInfoTitle: 'لنصنع شيئًا استثنائيًا معًا',
      quickInfoCopy: 'هل تحتاج موقع إلكتروني احترافي مصممة بعناية، أو أتمتة آمنة، أو تجربة ويب عالية الجودة؟ شاركنا بعض التفاصيل وسنرسم لك الخطة المناسبة.',
      quickInfoResponse: 'الردود خلال يوم عمل واحد',
      channelEmail: 'البريد',
      channelWhatsapp: 'واتساب',
      serviceAutomate: 'أتمتة سير العمل',
      serviceWeb: 'بناء حضورك الرقمي',
      serviceSecure: 'تحصين الأصول الرقمية',
      serviceOther: 'أخرى',
      errorName: 'يرجى إدخال اسمك.',
      errorEmail: 'يرجى إدخال بريد إلكتروني صالح.',
      errorService: 'يرجى اختيار خدمة واحدة على الأقل.',
      errorMessage: 'يرجى كتابة رسالة قصيرة.',
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

    i18nPlaceholders.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (translations[language] && translations[language][key]) {
        element.setAttribute('placeholder', translations[language][key]);
      }
    });

    if (langToggle) {
      langToggle.textContent = language === 'ar' ? 'EN 🌐' : '🌐 العربية';
    }
  };

  const getStoredLanguage = () => {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === 'ar' ? 'ar' : 'en';
  };

  const modalOverlay = document.getElementById('feedbackModal');
  const modalMessage = document.getElementById('feedbackModalMessage');
  const modalCloseButton = document.getElementById('feedbackModalClose');
  const modalTitle = document.getElementById('feedbackModalTitle');
  const modalIcon = modalOverlay?.querySelector('.modal-icon');

  const errorModalOverlay = document.getElementById('errorModal');
  const errorModalMessage = document.getElementById('errorModalMessage');
  const errorModalRetryButton = document.getElementById('errorModalRetry');
  const errorModalTitle = document.getElementById('errorModalTitle');

  const closeFeedbackModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('visible');
    modalOverlay.setAttribute('aria-hidden', 'true');
    modalOverlay.hidden = true;
    window.clearTimeout(closeFeedbackModal.timeoutId);
  };

  const showFeedbackModal = (message, type = 'success') => {
    if (!modalOverlay || !modalMessage || !modalCloseButton || !modalTitle) return;

    modalOverlay.classList.remove('error');
    if (type === 'error') {
      modalOverlay.classList.add('error');
    }

    modalOverlay.hidden = false;
    modalOverlay.setAttribute('aria-hidden', 'false');
    modalTitle.textContent = type === 'error' ? 'Oops' : 'Success';
    modalMessage.textContent = message;
    modalCloseButton.textContent = translations[currentLanguage]?.modalClose || translations.en.modalClose;
    modalIcon.textContent = type === 'error' ? '⚠' : '✓';
    modalOverlay.classList.add('visible');

    window.clearTimeout(closeFeedbackModal.timeoutId);
    closeFeedbackModal.timeoutId = window.setTimeout(() => {
      closeFeedbackModal();
    }, 4500);
  };

  const closeErrorModal = () => {
    if (!errorModalOverlay) return;
    errorModalOverlay.classList.remove('visible');
    errorModalOverlay.setAttribute('aria-hidden', 'true');
    errorModalOverlay.hidden = true;
  };

  const showErrorModal = (message) => {
    if (!errorModalOverlay || !errorModalMessage || !errorModalRetryButton || !errorModalTitle) return;

    errorModalTitle.textContent = translations[currentLanguage]?.errorModalTitle || translations.en.errorModalTitle;
    errorModalMessage.textContent = message;
    errorModalRetryButton.textContent = translations[currentLanguage]?.errorModalRetry || translations.en.errorModalRetry;
    errorModalOverlay.hidden = false;
    errorModalOverlay.setAttribute('aria-hidden', 'false');
    errorModalOverlay.classList.add('visible');
  };

  modalOverlay?.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeFeedbackModal();
    }
  });

  errorModalOverlay?.addEventListener('click', (event) => {
    if (event.target === errorModalOverlay) {
      closeErrorModal();
    }
  });

  modalCloseButton?.addEventListener('click', closeFeedbackModal);
  errorModalRetryButton?.addEventListener('click', closeErrorModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!modalOverlay?.hidden) {
        closeFeedbackModal();
      } else if (!errorModalOverlay?.hidden) {
        closeErrorModal();
      }
    }
  });

  populateCountryCodeSelect();

  const initialLanguage = getStoredLanguage();
  applyLanguage(initialLanguage);

  langToggle?.addEventListener('click', () => {
    const nextLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  });

  cta?.addEventListener('click', (event) => {
    if (cta?.tagName.toLowerCase() !== 'a') {
      event.preventDefault();
    }
    window.location.href = 'contact.html';
  });

  document.querySelectorAll('.pill:not(.channel-btn)').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill:not(.channel-btn)').forEach((b) => b.classList.remove('pill-primary'));
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

  // Channel toggle (Email / WhatsApp)
  const channelBtns = document.querySelectorAll('.channel-btn');
  channelBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const channel = btn.dataset.channel;
      if (channel === 'whatsapp') {
        window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
        return;
      }
      channelBtns.forEach((b) => {
        b.classList.toggle('pill-primary', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });
    });
  });

  // Contact form validation + submit
  const contactForm = document.getElementById('contactForm');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const submitButton = contactForm?.querySelector('.contact-submit');
  const submitButtonLabel = submitButton?.querySelector('span');

  const setFieldError = (fieldEl, hasError) => {
    if (!fieldEl) return;
    fieldEl.classList.toggle('invalid', hasError);
    const errEl = fieldEl.querySelector('.field-error');
    if (errEl) errEl.hidden = !hasError;
  };

  const enforceNumericInput = (inputEl) => {
    inputEl.addEventListener('input', () => {
      inputEl.value = inputEl.value.replace(/\D/g, '');
      setFieldError(inputEl.closest('.field'), false);
    });
  };

  const clearErrorsOnInput = (el) => {
    el.addEventListener('input', () => setFieldError(el.closest('.field'), false));
    el.addEventListener('change', () => setFieldError(el.closest('.field'), false));
  };
  contactForm?.querySelectorAll('input, textarea, select').forEach((el) => {
    clearErrorsOnInput(el);
    if (el.id === 'whatsappNumber') {
      enforceNumericInput(el);
    }
  });

  const setSubmitButtonLoading = (isLoading) => {
    if (!submitButton) return;
    submitButton.disabled = isLoading;
    submitButton.classList.toggle('is-loading', isLoading);
    submitButton.style.cursor = isLoading ? 'not-allowed' : '';
    submitButton.style.opacity = isLoading ? '0.8' : '';

    const icon = submitButton.querySelector('i');
    if (isLoading) {
      const loadingText = translations[currentLanguage]?.contactSubmitting || translations.en.contactSubmitting;
      if (icon) {
        icon.className = 'fa-solid fa-spinner';
      }
      if (submitButtonLabel) {
        submitButtonLabel.textContent = loadingText;
      }
    } else {
      if (icon) {
        icon.className = 'fa-solid fa-paper-plane';
      }
      if (submitButtonLabel) {
        submitButtonLabel.textContent = translations[currentLanguage]?.contactSubmit || translations.en.contactSubmit;
      }
    }
  };

  contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameEl = contactForm.querySelector('#name');
    const emailEl = contactForm.querySelector('#email');
    const whatsappNumberEl = contactForm.querySelector('#whatsappNumber');
    const whatsappCountryCodeEl = contactForm.querySelector('#whatsappCountryCode');
    const messageEl = contactForm.querySelector('#message');
    const serviceChecks = contactForm.querySelectorAll('input[name="service"]');
    const serviceField = serviceChecks[0]?.closest('.field');
    const whatsappField = whatsappNumberEl?.closest('.field');

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const whatsappValue = whatsappNumberEl.value.trim();
    const message = messageEl.value.trim();
    const services = Array.from(serviceChecks).filter((c) => c.checked).map((c) => c.value);
    const selectedCountryCode = whatsappCountryCodeEl?.value || '';

    let firstInvalid = null;
    const mark = (fieldEl, invalid, focusTarget) => {
      setFieldError(fieldEl, invalid);
      if (invalid && !firstInvalid) firstInvalid = focusTarget || fieldEl;
    };

    mark(nameEl.closest('.field'), name.length === 0, nameEl);
    mark(emailEl.closest('.field'), !emailRegex.test(email), emailEl);
    mark(whatsappField, whatsappValue.length !== 9 || !/^\d{9}$/.test(whatsappValue), whatsappNumberEl);
    mark(serviceField, services.length === 0, serviceChecks[0]);
    mark(messageEl.closest('.field'), message.length === 0, messageEl);

    if (firstInvalid) {
      firstInvalid.focus?.();
      return;
    }

    setSubmitButtonLoading(true);

    const formData = new FormData(contactForm);
    formData.set('name', name);
    formData.set('email', email);
    formData.set('whatsapp_country_code', selectedCountryCode);
    formData.set('whatsapp_number', whatsappValue);
    formData.set('message', message);
    formData.set('service', services.join(', '));
    formData.set('whatsapp_full', `${selectedCountryCode} ${whatsappValue}`.trim());

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        const successKey = 'contactSuccess';
        const msg = translations[currentLanguage]?.[successKey] || translations.en[successKey];
        contactForm.reset();
        showFeedbackModal(msg, 'success');
        contactForm.querySelectorAll('.field.invalid').forEach((f) => f.classList.remove('invalid'));
        if (whatsappCountryCodeEl) {
          const defaultCountry = countryDialCodes.find((country) => country.dialCode === '+970') || countryDialCodes[0];
          if (defaultCountry) {
            whatsappCountryCodeEl.value = defaultCountry.dialCode;
          }
        }
      } else {
        const msg = translations[currentLanguage]?.contactErrorModal || translations.en.contactErrorModal;
        showErrorModal(msg);
      }
    } catch (error) {
      const msg = translations[currentLanguage]?.contactErrorModal || translations.en.contactErrorModal;
      showErrorModal(msg);
    } finally {
      setSubmitButtonLoading(false);
    }
  });

  applyLanguage(currentLanguage);
});
