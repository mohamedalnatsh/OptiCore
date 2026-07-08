document.addEventListener("DOMContentLoaded", () => {
  const cta = document.getElementById("cta");
  const langToggle = document.getElementById("langToggle");
  const i18nElements = document.querySelectorAll(
    "[data-i18n]:not([data-lock-english='true'])",
  );
  const i18nPlaceholders = document.querySelectorAll(
    "[data-i18n-placeholder]:not([data-lock-english='true'])",
  );

  const WHATSAPP_URL = "https://wa.me/972567653938";
  const LANGUAGE_STORAGE_KEY = "opticore-language";

  const countryDialCodes = [
    { name: "Afghanistan", flag: "🇦🇫", dialCode: "+93" },
    { name: "Albania", flag: "🇦🇱", dialCode: "+355" },
    { name: "Algeria", flag: "🇩🇿", dialCode: "+213" },
    { name: "Andorra", flag: "🇦🇩", dialCode: "+376" },
    { name: "Angola", flag: "🇦🇴", dialCode: "+244" },
    { name: "Antigua and Barbuda", flag: "🇦🇬", dialCode: "+1-268" },
    { name: "Argentina", flag: "🇦🇷", dialCode: "+54" },
    { name: "Armenia", flag: "🇦🇲", dialCode: "+374" },
    { name: "Australia", flag: "🇦🇺", dialCode: "+61" },
    { name: "Austria", flag: "🇦🇹", dialCode: "+43" },
    { name: "Azerbaijan", flag: "🇦🇿", dialCode: "+994" },
    { name: "Bahamas", flag: "🇧🇸", dialCode: "+1-242" },
    { name: "Bahrain", flag: "🇧🇭", dialCode: "+973" },
    { name: "Bangladesh", flag: "🇧🇩", dialCode: "+880" },
    { name: "Barbados", flag: "🇧🇧", dialCode: "+1-246" },
    { name: "Belarus", flag: "🇧🇾", dialCode: "+375" },
    { name: "Belgium", flag: "🇧🇪", dialCode: "+32" },
    { name: "Belize", flag: "🇧🇿", dialCode: "+501" },
    { name: "Benin", flag: "🇧🇯", dialCode: "+229" },
    { name: "Bhutan", flag: "🇧🇹", dialCode: "+975" },
    { name: "Bolivia", flag: "🇧🇴", dialCode: "+591" },
    { name: "Bosnia and Herzegovina", flag: "🇧🇦", dialCode: "+387" },
    { name: "Botswana", flag: "🇧🇼", dialCode: "+267" },
    { name: "Brazil", flag: "🇧🇷", dialCode: "+55" },
    { name: "Brunei", flag: "🇧🇳", dialCode: "+673" },
    { name: "Bulgaria", flag: "🇧🇬", dialCode: "+359" },
    { name: "Burkina Faso", flag: "🇧🇫", dialCode: "+226" },
    { name: "Burundi", flag: "🇧🇮", dialCode: "+257" },
    { name: "Cabo Verde", flag: "🇨🇻", dialCode: "+238" },
    { name: "Cambodia", flag: "🇰🇭", dialCode: "+855" },
    { name: "Cameroon", flag: "🇨🇲", dialCode: "+237" },
    { name: "Canada", flag: "🇨🇦", dialCode: "+1" },
    { name: "Central African Republic", flag: "🇨🇫", dialCode: "+236" },
    { name: "Chad", flag: "🇹🇩", dialCode: "+235" },
    { name: "Chile", flag: "🇨🇱", dialCode: "+56" },
    { name: "China", flag: "🇨🇳", dialCode: "+86" },
    { name: "Colombia", flag: "🇨🇴", dialCode: "+57" },
    { name: "Comoros", flag: "🇰🇲", dialCode: "+269" },
    { name: "Congo (Republic of the Congo)", flag: "🇨🇬", dialCode: "+242" },
    { name: "Congo (DRC)", flag: "🇨🇩", dialCode: "+243" },
    { name: "Costa Rica", flag: "🇨🇷", dialCode: "+506" },
    { name: "Côte d’Ivoire", flag: "🇨🇮", dialCode: "+225" },
    { name: "Croatia", flag: "🇭🇷", dialCode: "+385" },
    { name: "Cuba", flag: "🇨🇺", dialCode: "+53" },
    { name: "Cyprus", flag: "🇨🇾", dialCode: "+357" },
    { name: "Czechia", flag: "🇨🇿", dialCode: "+420" },
    { name: "Denmark", flag: "🇩🇰", dialCode: "+45" },
    { name: "Djibouti", flag: "🇩🇯", dialCode: "+253" },
    { name: "Dominica", flag: "🇩🇲", dialCode: "+1-767" },
    { name: "Dominican Republic", flag: "🇩🇴", dialCode: "+1-809" },
    { name: "Ecuador", flag: "🇪🇨", dialCode: "+593" },
    { name: "Egypt", flag: "🇪🇬", dialCode: "+20" },
    { name: "El Salvador", flag: "🇸🇻", dialCode: "+503" },
    { name: "Equatorial Guinea", flag: "🇬🇶", dialCode: "+240" },
    { name: "Eritrea", flag: "🇪🇷", dialCode: "+291" },
    { name: "Estonia", flag: "🇪🇪", dialCode: "+372" },
    { name: "Eswatini", flag: "🇸🇿", dialCode: "+268" },
    { name: "Ethiopia", flag: "🇪🇹", dialCode: "+251" },
    { name: "Fiji", flag: "🇫🇯", dialCode: "+679" },
    { name: "Finland", flag: "🇫🇮", dialCode: "+358" },
    { name: "France", flag: "🇫🇷", dialCode: "+33" },
    { name: "Gabon", flag: "🇬🇦", dialCode: "+241" },
    { name: "Gambia", flag: "🇬🇲", dialCode: "+220" },
    { name: "Georgia", flag: "🇬🇪", dialCode: "+995" },
    { name: "Germany", flag: "🇩🇪", dialCode: "+49" },
    { name: "Ghana", flag: "🇬🇭", dialCode: "+233" },
    { name: "Greece", flag: "🇬🇷", dialCode: "+30" },
    { name: "Grenada", flag: "🇬🇩", dialCode: "+1-473" },
    { name: "Guatemala", flag: "🇬🇹", dialCode: "+502" },
    { name: "Guinea", flag: "🇬🇳", dialCode: "+224" },
    { name: "Guinea-Bissau", flag: "🇬🇼", dialCode: "+245" },
    { name: "Guyana", flag: "🇬🇾", dialCode: "+592" },
    { name: "Haiti", flag: "🇭🇹", dialCode: "+509" },
    { name: "Honduras", flag: "🇭🇳", dialCode: "+504" },
    { name: "Hungary", flag: "🇭🇺", dialCode: "+36" },
    { name: "Iceland", flag: "🇮🇸", dialCode: "+354" },
    { name: "India", flag: "🇮🇳", dialCode: "+91" },
    { name: "Indonesia", flag: "🇮🇩", dialCode: "+62" },
    { name: "Iran", flag: "🇮🇷", dialCode: "+98" },
    { name: "Iraq", flag: "🇮🇶", dialCode: "+964" },
    { name: "Ireland", flag: "🇮🇪", dialCode: "+353" },
    { name: "Israel", flag: "🇮🇱", dialCode: "+972" },
    { name: "Italy", flag: "🇮🇹", dialCode: "+39" },
    { name: "Jamaica", flag: "🇯🇲", dialCode: "+1-876" },
    { name: "Japan", flag: "🇯🇵", dialCode: "+81" },
    { name: "Jordan", flag: "🇯🇴", dialCode: "+962" },
    { name: "Kazakhstan", flag: "🇰🇿", dialCode: "+7" },
    { name: "Kenya", flag: "🇰🇪", dialCode: "+254" },
    { name: "Kiribati", flag: "🇰🇮", dialCode: "+686" },
    { name: "Kuwait", flag: "🇰🇼", dialCode: "+965" },
    { name: "Kyrgyzstan", flag: "🇰🇬", dialCode: "+996" },
    { name: "Laos", flag: "🇱🇦", dialCode: "+856" },
    { name: "Latvia", flag: "🇱🇻", dialCode: "+371" },
    { name: "Lebanon", flag: "🇱🇧", dialCode: "+961" },
    { name: "Lesotho", flag: "🇱🇸", dialCode: "+266" },
    { name: "Liberia", flag: "🇱🇷", dialCode: "+231" },
    { name: "Libya", flag: "🇱🇾", dialCode: "+218" },
    { name: "Liechtenstein", flag: "🇱🇮", dialCode: "+423" },
    { name: "Lithuania", flag: "🇱🇹", dialCode: "+370" },
    { name: "Luxembourg", flag: "🇱🇺", dialCode: "+352" },
    { name: "Madagascar", flag: "🇲🇬", dialCode: "+261" },
    { name: "Malawi", flag: "🇲🇼", dialCode: "+265" },
    { name: "Malaysia", flag: "🇲🇾", dialCode: "+60" },
    { name: "Maldives", flag: "🇲🇻", dialCode: "+960" },
    { name: "Mali", flag: "🇲🇱", dialCode: "+223" },
    { name: "Malta", flag: "🇲🇹", dialCode: "+356" },
    { name: "Marshall Islands", flag: "🇲🇭", dialCode: "+692" },
    { name: "Mauritania", flag: "🇲🇷", dialCode: "+222" },
    { name: "Mauritius", flag: "🇲🇺", dialCode: "+230" },
    { name: "Mexico", flag: "🇲🇽", dialCode: "+52" },
    { name: "Micronesia", flag: "🇫🇲", dialCode: "+691" },
    { name: "Moldova", flag: "🇲🇩", dialCode: "+373" },
    { name: "Monaco", flag: "🇲🇨", dialCode: "+377" },
    { name: "Mongolia", flag: "🇲🇳", dialCode: "+976" },
    { name: "Montenegro", flag: "🇲🇪", dialCode: "+382" },
    { name: "Morocco", flag: "🇲🇦", dialCode: "+212" },
    { name: "Mozambique", flag: "🇲🇿", dialCode: "+258" },
    { name: "Myanmar", flag: "🇲🇲", dialCode: "+95" },
    { name: "Namibia", flag: "🇳🇦", dialCode: "+264" },
    { name: "Nauru", flag: "🇳🇷", dialCode: "+674" },
    { name: "Nepal", flag: "🇳🇵", dialCode: "+977" },
    { name: "Netherlands", flag: "🇳🇱", dialCode: "+31" },
    { name: "New Zealand", flag: "🇳🇿", dialCode: "+64" },
    { name: "Nicaragua", flag: "🇳🇮", dialCode: "+505" },
    { name: "Niger", flag: "🇳🇪", dialCode: "+227" },
    { name: "Nigeria", flag: "🇳🇬", dialCode: "+234" },
    { name: "North Korea", flag: "🇰🇵", dialCode: "+850" },
    { name: "North Macedonia", flag: "🇲🇰", dialCode: "+389" },
    { name: "Norway", flag: "🇳🇴", dialCode: "+47" },
    { name: "Oman", flag: "🇴🇲", dialCode: "+968" },
    { name: "Pakistan", flag: "🇵🇰", dialCode: "+92" },
    { name: "Palau", flag: "🇵🇼", dialCode: "+680" },
    { name: "Palestine", flag: "🇵🇸", dialCode: "+970" },
    { name: "Panama", flag: "🇵🇦", dialCode: "+507" },
    { name: "Papua New Guinea", flag: "🇵🇬", dialCode: "+675" },
    { name: "Paraguay", flag: "🇵🇾", dialCode: "+595" },
    { name: "Peru", flag: "🇵🇪", dialCode: "+51" },
    { name: "Philippines", flag: "🇵🇭", dialCode: "+63" },
    { name: "Poland", flag: "🇵🇱", dialCode: "+48" },
    { name: "Portugal", flag: "🇵🇹", dialCode: "+351" },
    { name: "Qatar", flag: "🇶🇦", dialCode: "+974" },
    { name: "Romania", flag: "🇷🇴", dialCode: "+40" },
    { name: "Russia", flag: "🇷🇺", dialCode: "+7" },
    { name: "Rwanda", flag: "🇷🇼", dialCode: "+250" },
    { name: "Saint Kitts and Nevis", flag: "🇰🇳", dialCode: "+1-869" },
    { name: "Saint Lucia", flag: "🇱🇨", dialCode: "+1-758" },
    {
      name: "Saint Vincent and the Grenadines",
      flag: "🇻🇨",
      dialCode: "+1-784",
    },
    { name: "Samoa", flag: "🇼🇸", dialCode: "+685" },
    { name: "San Marino", flag: "🇸🇲", dialCode: "+378" },
    { name: "São Tomé and Príncipe", flag: "🇸🇹", dialCode: "+239" },
    { name: "Saudi Arabia", flag: "🇸🇦", dialCode: "+966" },
    { name: "Senegal", flag: "🇸🇳", dialCode: "+221" },
    { name: "Serbia", flag: "🇷🇸", dialCode: "+381" },
    { name: "Seychelles", flag: "🇸🇨", dialCode: "+248" },
    { name: "Sierra Leone", flag: "🇸🇱", dialCode: "+232" },
    { name: "Singapore", flag: "🇸🇬", dialCode: "+65" },
    { name: "Slovakia", flag: "🇸🇰", dialCode: "+421" },
    { name: "Slovenia", flag: "🇸🇮", dialCode: "+386" },
    { name: "Solomon Islands", flag: "🇸🇧", dialCode: "+677" },
    { name: "Somalia", flag: "🇸🇴", dialCode: "+252" },
    { name: "South Africa", flag: "🇿🇦", dialCode: "+27" },
    { name: "South Korea", flag: "🇰🇷", dialCode: "+82" },
    { name: "South Sudan", flag: "🇸🇸", dialCode: "+211" },
    { name: "Spain", flag: "🇪🇸", dialCode: "+34" },
    { name: "Sri Lanka", flag: "🇱🇰", dialCode: "+94" },
    { name: "Sudan", flag: "🇸🇩", dialCode: "+249" },
    { name: "Suriname", flag: "🇸🇷", dialCode: "+597" },
    { name: "Sweden", flag: "🇸🇪", dialCode: "+46" },
    { name: "Switzerland", flag: "🇨🇭", dialCode: "+41" },
    { name: "Syria", flag: "🇸🇾", dialCode: "+963" },
    { name: "Taiwan", flag: "🇹🇼", dialCode: "+886" },
    { name: "Tajikistan", flag: "🇹🇯", dialCode: "+992" },
    { name: "Tanzania", flag: "🇹🇿", dialCode: "+255" },
    { name: "Thailand", flag: "🇹🇭", dialCode: "+66" },
    { name: "Timor-Leste", flag: "🇹🇱", dialCode: "+670" },
    { name: "Togo", flag: "🇹🇬", dialCode: "+228" },
    { name: "Tonga", flag: "🇹🇴", dialCode: "+676" },
    { name: "Trinidad and Tobago", flag: "🇹🇹", dialCode: "+1-868" },
    { name: "Tunisia", flag: "🇹🇳", dialCode: "+216" },
    { name: "Turkey", flag: "🇹🇷", dialCode: "+90" },
    { name: "Turkmenistan", flag: "🇹🇲", dialCode: "+993" },
    { name: "Tuvalu", flag: "🇹🇻", dialCode: "+688" },
    { name: "Uganda", flag: "🇺🇬", dialCode: "+256" },
    { name: "Ukraine", flag: "🇺🇦", dialCode: "+380" },
    { name: "United Arab Emirates", flag: "🇦🇪", dialCode: "+971" },
    { name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
    { name: "United States", flag: "🇺🇸", dialCode: "+1" },
    { name: "Uruguay", flag: "🇺🇾", dialCode: "+598" },
    { name: "Uzbekistan", flag: "🇺🇿", dialCode: "+998" },
    { name: "Vanuatu", flag: "🇻🇺", dialCode: "+678" },
    { name: "Vatican City", flag: "🇻🇦", dialCode: "+379" },
    { name: "Venezuela", flag: "🇻🇪", dialCode: "+58" },
    { name: "Vietnam", flag: "🇻🇳", dialCode: "+84" },
    { name: "Yemen", flag: "🇾🇪", dialCode: "+967" },
    { name: "Zambia", flag: "🇿🇲", dialCode: "+260" },
    { name: "Zimbabwe", flag: "🇿🇼", dialCode: "+263" },
    { name: "Kosovo", flag: "🇽🇰", dialCode: "+383" },
  ];

  const populateCountryCodeSelect = () => {
    const countrySelect = document.getElementById("whatsappCountryCode");
    if (!countrySelect) return;

    countrySelect.innerHTML = "";
    countryDialCodes.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.dialCode;
      option.textContent = `${country.flag} ${country.dialCode} (${country.name})`;
      countrySelect.appendChild(option);
    });

    const defaultCountry =
      countryDialCodes.find((country) => country.dialCode === "+44") ||
      countryDialCodes[0];
    if (defaultCountry) {
      countrySelect.value = defaultCountry.dialCode;
    }
  };

  const translations = {
    en: {
      heroTitle: "OptiCore Solutions",
      card1Title: "1. Secure Your Assets",
      card1Btn1: "Site & Server Hardening",
      card1Btn2: "Network & Router Audit",
      card2Title: "2. Build Your Web Presence",
      card2Btn1: "Dynamic Frontend UIs",
      card2Btn2: "UX-Focused Lightweight Sites",
      card3Title: "3. Automate Your Workflow",
      card3Btn1: "Custom Telegram Bots",
      card3Btn2: "WhatsApp Business Automation",
      ctaText: "Start a Project Now",
      projectsCta: "Our projects",
      footerContact: "Contact Us",
      footerTerms: "terms",
      footerPrivacy: "privacy",
      footerServices: "services",
      footerSupport: "support",
      footerTag: "OptiCore.dev | The Core of Optimization",
      termsTitle: "Terms of Service",
      termsSubtitle:
        "These terms describe how OptiCore delivers projects, handles revisions, and protects shared work.",
      termsSection1Title: "Service Terms",
      termsSection1Text:
        "OptiCore provides consulting, web development, security hardening, and automation services based on the scope agreed in the project brief. Any change in scope, timing, or deliverables should be confirmed in writing before work continues.",
      termsSection2Title: "Project Timelines",
      termsSection2Text:
        "Standard response times and delivery estimates are shared at project kickoff. Delays caused by late feedback, missing assets, or third-party dependencies may affect the final timeline.",
      termsSection3Title: "Intellectual Property",
      termsSection3Text:
        "Deliverables created specifically for the client remain the property of the client upon full payment, unless otherwise agreed. OptiCore may reuse general techniques, frameworks, and reusable components in future work.",
      termsSection4Title: "Revisions",
      termsSection4Text:
        "Revisions are included within the agreed scope. Additional rounds of edits or substantial design changes may be billed separately and should be discussed before implementation begins.",
      termsSection5Title: "Third-Party Fees & Subscriptions",
      termsSection5Text:
        "All ongoing third-party expenses, including but not limited to web hosting, domain registration, server costs, and external API subscriptions (e.g., WhatsApp Cloud API or Telegram hosting), are the sole financial responsibility of the client unless explicitly stated otherwise.",
      privacyTitle: "Privacy Policy",
      privacySubtitle:
        "We collect only the information needed to respond to your request and maintain a secure service experience.",
      privacySection1Title: "Data Collection",
      privacySection1Text:
        "When you contact us through the website or WhatsApp, we may collect your name, email address, WhatsApp number, and project details so we can understand your request and follow up appropriately.",
      privacySection2Title: "Information Security",
      privacySection2Text:
        "We use reasonable technical and organizational measures to protect submitted information. However, no method of transmission over the internet is completely secure, so we encourage clients to avoid sharing sensitive credentials.",
      privacySection3Title: "Cookie Usage",
      privacySection3Text:
        "The website may use browser storage to remember your selected language and basic site preferences. These settings are local to your device and are not shared with third parties.",
      privacySection4Title: "Confidentiality",
      privacySection4Text:
        "As a technical solution and security provider, OptiCore guarantees strict confidentiality regarding your project code, configuration settings, API tokens, and server credentials. We do not share or disclose any proprietary technical assets shared during development.",
      privacySection5Title: "Your Rights & Policy Updates",
      privacySection5Text:
        "You retain the right to request the deletion or update of your contact information from our records at any time. This policy may be updated periodically to reflect changes in our services.",
      supportTitle: "Support & Help Center",
      supportSubtitle:
        "Find quick answers to common questions, or reach out directly if you need more help.",
      faq1Question: "How long does a project take?",
      faq1Answer:
        "A standard project usually takes between 3 and 10 business days depending on scope, content readiness, and feedback speed.",
      faq2Question: "What technologies do you use?",
      faq2Answer:
        "We commonly work with modern web technologies, secure hosting setups, automation tools, and WhatsApp or Telegram integrations.",
      faq3Question: "Can I request revisions after delivery?",
      faq3Answer:
        "Yes. Minor revisions are typically included in the agreed scope, while major changes may require a separate estimate.",
      faq4Question: "Do I need to purchase hosting and a domain myself?",
      faq4Answer:
        "We will assist and guide you to choose the best and most secure cloud providers. However, the purchase and licenses must be registered under your own name or company billing info.",
      faq5Question:
        "How do you guarantee the security of bots and automated workflows?",
      faq5Answer:
        "We build using highly optimized code structures and deploy automation tasks on secure sandboxes or restricted servers, preventing token leaks and guaranteeing maximum uptime.",
      faq6Question:
        "Do you provide long-term maintenance after project delivery?",
      faq6Answer:
        "Every project includes a standard technical warranty period to fix any deployment bugs. Continuous feature updates, monitoring, or regular maintenance can be structured into a monthly retainer plan.",
      supportCtaTitle: "Still need help?",
      supportCtaText:
        "We’re ready to help you shape your next step and answer any open questions.",
      supportCtaButton: "Contact Us",
      projectsEyebrow: "OptiCore Portfolio",
      projectsHeroTitle: "our projects",
      projectsHeroText:
        "We combine security, modern interfaces, and automation to deliver reliable digital solutions built with care for today’s business needs.",
      projectsSectionSecurityTitle: "Security Tools",
      projectsSectionSecurityText:
        "Advanced security auditing utilities, vulnerability scanners, and automated incident response scripts designed to protect infrastructure against active exploitation.",
      projectsSectionWebTitle: "Web Interfaces",
      projectsSectionWebText:
        "Modern, lightweight, and fast websites designed to deliver a polished and professional experience.",
      projectsSectionBotsTitle: "Bots",
      projectsSectionBotsText:
        "Automation for everyday operations through intelligent bots that support communication, tracking, and workflow management.",
      preview_btn: "Preview",
      uncle_ashraf_desc:
        "A specialized router security auditing and botnet remediation utility built to detect critical vulnerabilities in LB-LINK firmware and instantly sanitize compromised hosts from remote command injections.",
      ecommerce_dashboard_desc:
        "A modern admin dashboard experience for e-commerce stores with a flexible layout and polished product management workflows.",
      minimalist_portfolio_desc:
        "A contemporary personal website focused on simplicity, clarity, and a refined professional presentation.",
      crud_js_desc:
        "A practical CRUD application that demonstrates clean data management and a smooth, user-friendly interface.",
      cafe_page_desc:
        "A visually polished coffee shop landing page designed to deliver an elegant browsing experience.",
      carco_desc:
        "A modern automotive website experience that reflects a strong brand identity with clear and professional presentation.",
      islamic_center_desc:
        "A structured Islamic center website designed to present content and services in an organized and professional manner.",
      masao_desc:
        "A professional web template centered on balance between functional design and visual flexibility.",
      form_template_desc:
        "An interactive form template designed to make data entry clear, intuitive, and efficient.",
      eye_hospital_bot_desc:
        "A containerized WhatsApp assistant built with Node.js and Docker to automate hospital administrative workflows, helping staff instantly retrieve shift schedules, sterilization SOPs, and internal documents securely.",
      fortnite_update_bot_desc:
        "An intelligent tracking bot designed to monitor Fortnite updates, check server status, and send instant notifications.",
      // contact page
      contactTitle: "Get in Touch",
      contactSubtitle:
        "Tell us about your project — we usually reply within one business day.",
      contactName: "Name",
      contactEmail: "Email",
      contactWhatsappLabel: "WhatsApp Number",
      contactService: "Service",
      contactMessage: "Message",
      contactNamePh: "Your full name",
      contactEmailPh: "you@example.com",
      contactWhatsappPlaceholder: "5XXXXXXXX",
      contactMessagePh: "Share a few details about your project…",
      contactSubmit: "Send Message",
      contactSubmitting: "Sending...",
      contactSuccess: "Thank you! Your message has been sent successfully.",
      contactError: "Oops! There was a problem submitting your form.",
      contactErrorModal:
        "Oops! Something went wrong. Please check your connection and try again.",
      errorModalTitle: "Oops",
      errorModalRetry: "Try Again",
      modalClose: "Great!",
      contactWhatsappError: "Please enter a valid WhatsApp number.",
      quickInfoEyebrow: "Quick info",
      quickInfoTitle: "Let's build something exceptional together",
      quickInfoCopy:
        "Need a polished landing page, secure automation, or a high-conversion web experience? Share a few details and we will map the right plan.",
      quickInfoResponse: "Replies within 1 business day",
      channelEmail: "Email",
      channelWhatsapp: "WhatsApp",
      serviceAutomate: "Automate Your Workflow",
      serviceWeb: "Build Your Web Presence",
      serviceSecure: "Secure Your Assets",
      serviceOther: "Other",
      errorName: "Please enter your name.",
      errorEmail: "Please enter a valid email address.",
      errorService: "Please select at least one service.",
      errorMessage: "Please write a short message.",
    },
    ar: {
      heroTitle: "أوبتي كور للحلول التقنية",
      card1Title: "1. تحصين وتأمين الأصول الرقمية",
      card1Btn1: "تحصين الموقع والخوادم",
      card1Btn2: "مراجعة الشبكات وأجهزة التوجيه",
      card2Title: "2. بناء حضورك الرقمي",
      card2Btn1: "واجهات مستخدم ديناميكية",
      card2Btn2: "مواقع خفيفة مع تجربة مستخدم",
      card3Title: "3. أتمتة سير العمل",
      card3Btn1: "روبوتات تيليجرام مخصصة",
      card3Btn2: "أتمتة واتساب للأعمال",
      ctaText: "ابدأ مشروعك الآن",
      projectsCta: "مشاريعنا",
      footerContact: "تواصل معنا",
      footerTerms: "الشروط",
      footerPrivacy: "الخصوصية",
      footerServices: "الخدمات",
      footerSupport: "الدعم",
      footerTag: "OptiCore.dev | جوهر التحسين التقني",
      termsTitle: "شروط الاستخدام",
      termsSubtitle:
        "تصف هذه الشروط كيف تقدم OptiCore المشاريع، وتتولى المراجعات، وتحمي العمل المشترك.",
      termsSection1Title: "شروط الخدمة",
      termsSection1Text:
        "تقدم OptiCore خدمات الاستشارات وتطوير الويب وتحصين الأنظمة والأتمتة بناءً على النطاق المتفق عليه في موجز المشروع. يجب توثيق أي تغيير في النطاق أو الجدول أو المستندات كتابيًا قبل متابعة العمل.",
      termsSection2Title: "الجداول الزمنية للمشاريع",
      termsSection2Text:
        "يتم مشاركة أوقات الاستجابة والتقديرات الزمنية عند بدء المشروع. قد تؤثر التأخيرات الناتجة عن الملاحظات المتأخرة أو الأصول المفقودة أو الاعتماد على جهات خارجية على الجدول النهائي.",
      termsSection3Title: "الملكية الفكرية",
      termsSection3Text:
        "تظل المستندات والمنتجات التي تُنشئ خصيصًا لعميل ما ملكًا للعميل عند اكتمال الدفع بالكامل، ما لم يُتفق على خلاف ذلك. قد تستخدم OptiCore التقنيات والأطر والمكونات القابلة لإعادة الاستخدام في أعمال مستقبلية.",
      termsSection4Title: "المراجعات",
      termsSection4Text:
        "تُشمل المراجعات ضمن النطاق المتفق عليه. قد تُفرض رسوم إضافية على جولات مراجعة إضافية أو تغييرات تصميم جوهرية، ويجب مناقشتها قبل البدء في التنفيذ.",
      termsSection5Title: "تكاليف الطرف الثالث والاشتراكات",
      termsSection5Text:
        "جميع النفقات المستمرة الخاصة بالأطراف الثالثة، بما في ذلك على سبيل المثال لا الحصر: استضافة الويب، حجز النطاق (Domain)، تكاليف الخوادم، واشتراكات الـ APIs الخارجية (مثل منصات واتساب أو سيرفرات تليجرام)، هي مسؤولية مالية حصرية تقع على عاتق العميل ما لم يُنص على خلاف ذلك صراحةً.",
      privacyTitle: "سياسة الخصوصية",
      privacySubtitle:
        "نجمع فقط المعلومات اللازمة للرد على طلبك والحفاظ على تجربة خدمة آمنة.",
      privacySection1Title: "جمع البيانات",
      privacySection1Text:
        "عند التواصل معنا عبر الموقع أو واتساب، قد نجمع اسمك وعنوان بريدك الإلكتروني ورقم واتساب وتفاصيل المشروع حتى نفهم طلبك ونتابع معه بشكل مناسب.",
      privacySection2Title: "أمان المعلومات",
      privacySection2Text:
        "نستخدم تدابير تقنية وتنظيمية معقولة لحماية المعلومات المقدمة. ومع ذلك، لا توجد وسيلة نقل عبر الإنترنت آمنة تمامًا، لذلك نشجع العملاء على تجنب مشاركة بيانات الاعتماد الحساسة.",
      privacySection3Title: "استخدام الكوكيز",
      privacySection3Text:
        "قد يستخدم الموقع تخزين المتصفح لتذكر اللغة المختارة وتفضيلات الموقع الأساسية. هذه الإعدادات محلية على جهازك ولا يتم مشاركتها مع أطراف ثالثة.",
      privacySection4Title: "السرية وعدم الإفصاح",
      privacySection4Text:
        "بصفتنا مزوداً للحلول التقنية والأمنية، تضمن OptiCore السرية التامة فيما يتعلق بأكواد مشروعك، وإعدادات النظام، ومفاتيح الـ API، وبيانات اعتماد الخوادم. نحن لا نشارك أو نفصح عن أي أصول تقنية خاصة يتم تزويدنا بها أثناء العمل.",
      privacySection5Title: "حقوق المستخدم والتحديثات",
      privacySection5Text:
        "تحتفظ بالحق في طلب حذف أو تحديث معلومات الاتصال الخاصة بك من سجلاتنا في أي وقت. قد يتم تحديث هذه السياسة بشكل دوري لتواكب التغييرات في خدماتنا.",
      supportTitle: "الدعم ومركز المساعدة",
      supportSubtitle:
        "اعثر على إجابات سريعة على الأسئلة الشائعة، أو تواصل معنا مباشرة إذا احتجت إلى مزيد من المساعدة.",
      faq1Question: "كم يستغرق المشروع؟",
      faq1Answer:
        "يستغرق المشروع القياسي عادةً بين 3 و10 أيام عمل حسب النطاق واستعداد المحتوى وسرعة الملاحظات.",
      faq2Question: "ما التقنيات التي تستخدمها؟",
      faq2Answer:
        "نعمل غالبًا مع تقنيات الويب الحديثة وأنظمة الاستضافة الآمنة وأدوات الأتمتة ودمج واتساب أو تيليجرام.",
      faq3Question: "هل يمكنني طلب مراجعات بعد التسليم؟",
      faq3Answer:
        "نعم. عادةً ما تُشمل المراجعات البسيطة ضمن النطاق المتفق عليه، بينما قد تتطلب التغييرات الكبرى تقديرًا منفصلًا.",
      faq4Question: "هل أحتاج لشراء الاستضافة والنطاق بنفسي؟",
      faq4Answer:
        "سنقوم بمساعدتك وتوجيهك لاختيار أفضل مزودي السحابية والأكثر أماناً. ومع ذلك، يجب أن يتم الشراء والتراخيص باسمك الخاص أو ببيانات الدفع التابعة لشركتك.",
      faq5Question: "كيف تضمنون أمان واستقرار البوتات وأنظمة الأتمتة؟",
      faq5Answer:
        "نقوم بالبناء باستخدام هياكل برمجية محسنة للغاية ونشر مهام الأتمتة على خوادم محمية وقيود وصول صارمة، مما يمنع تسريب مفاتيح الـ Tokens ويضمن استقرار الخدمة لأعلى فترة ممكنة.",
      faq6Question: "هل توفرون صيانة ودعم فني طويل الأمد بعد تسليم المشروع؟",
      faq6Answer:
        "يتضمن كل مشروع فترة ضمان تقنية قياسية لإصلاح أي أخطاء برمجية بعد النشر. أما التحديثات المستمرة للميزات، أو المراقبة الدورية، فيمكن تنظيمها ضمن خطة صيانة شهرية مستقلة.",
      supportCtaTitle: "هل تحتاج إلى مزيد من المساعدة؟",
      supportCtaText:
        "نحن جاهزون لمساعدتك في تشكيل الخطوة القادمة والإجابة على أي أسئلة مفتوحة.",
      supportCtaButton: "تواصل معنا",
      projectsEyebrow: "مشاريعنا",
      projectsHeroTitle: "معرض أعملنا",
      projectsHeroText:
        "ندمج بين الأمان والواجهة الحديثة والأتمتة لتقديم حلول رقمية موثوقة ومصممة بعناية لتلبية احتياجات الأعمال اليوم.",
      projectsSectionSecurityTitle: "الأدوات الأمنية",
      projectsSectionSecurityText:
        "أدوات متقدمة لتدقيق الأمان وفحص الثغرات الشبكية، وسكربتات آلية للاستجابة للحوادث وتطهير البنية التحتية من الاختراقات النشطة.",
      projectsSectionWebTitle: "واجهات الويب",
      projectsSectionWebText:
        "مواقع حديثة وخفيفة وسريعة مصممة لتقديم تجربة بصرية احترافية ومهنية.",
      projectsSectionBotsTitle: "البوتات",
      projectsSectionBotsText:
        "أتمتة العمليات اليومية عبر روبوتات ذكية تدعم التواصل والتتبع وإدارة سير العمل.",
      preview_btn: "معاينة",
      uncle_ashraf_desc:
        "أداة متخصصة لفحص الثغرات الأمنية ومعالجة راوترات LB-LINK، مصممة للكشف عن ثغرات حقن الأوامر عن بُعد وتطهير الأجهزة المخترقة من برمجيات البوت نت الخبيثة.",
      ecommerce_dashboard_desc:
        "لوحة تحكم حديثة لتجربة متجر إلكتروني مع تخطيط مرن وسير عمل متقدم لإدارة المنتجات.",
      minimalist_portfolio_desc:
        "موقع شخصي عصري يركز على البساطة والوضوح مع واجهة احترافية.",
      crud_js_desc:
        "تطبيق CRUD عملي يوضح إدارة البيانات بوضوح وسهولة داخل واجهة مستخدم أنيقة.",
      cafe_page_desc:
        "صفحة متجر قهوة مصممة بصريًا بشكل احترافي مع تجربة استخدام سلسة.",
      carco_desc:
        "واجهة موقع سيارات حديثة تعكس هوية العلامة التجارية بوضوح واحتراف.",
      islamic_center_desc:
        "موقع مركز إسلامي مخصص لتقديم المحتوى والخدمات بشكل منظم واحترافي.",
      masao_desc:
        "قالب ويب احترافي يركز على التوازن بين التصميم الوظيفي والمرونة البصرية.",
      form_template_desc:
        "قالب نموذج تفاعلي مصمم لتجربة إدخال البيانات بشكل واضح وسهل الاستخدام.",
      eye_hospital_bot_desc:
        "مساعد واتساب مؤتمت ومحمي عبر بيئة Docker ومبني بلغة Node.js، مخصص لأتمتة سير العمل الإداري داخل المستشفى ومساعدة الطواقم في جلب جداول المناوبات، وإجراءات التعقيم (SOPs)، والوثائق الداخلية فوراً.",
      fortnite_update_bot_desc:
        "بوت ذكي يقوم برصد وتتبع تحديثات لعبة فورت نايت وحالة خوادمها وإرسال إشعارات فورية.",
      // contact page
      contactTitle: "تواصل معنا",
      contactSubtitle: "أخبرنا عن مشروعك — نرد عادةً خلال يوم عمل واحد.",
      contactName: "الاسم",
      contactEmail: "البريد الإلكتروني",
      contactWhatsappLabel: "رقم الواتساب",
      contactService: "الخدمة",
      contactMessage: "الرسالة",
      contactNamePh: "اسمك الكامل",
      contactEmailPh: "you@example.com",
      contactWhatsappPlaceholder: "5XXXXXXXX",
      contactMessagePh: "شارك بعض التفاصيل عن مشروعك…",
      contactSubmit: "إرسال الرسالة",
      contactSubmitting: "جاري الإرسال...",
      contactSuccess: "شكرًا لك! تم إرسال رسالتك بنجاح.",
      contactError: "عذرًا! حدثت مشكلة أثناء إرسال البيانات.",
      contactErrorModal:
        "عذراً! حدث خطأ ما. يرجى التحقق من الاتصال والمحاولة مرة أخرى.",
      errorModalTitle: "عذراً",
      errorModalRetry: "إعادة المحاولة",
      modalClose: "ممتاز!",
      contactWhatsappError: "يرجى إدخال رقم واتساب صالح.",
      quickInfoEyebrow: "معلومات سريعة",
      quickInfoTitle: "لنصنع شيئًا استثنائيًا معًا",
      quickInfoCopy:
        "هل تحتاج موقع إلكتروني احترافي مصممة بعناية، أو أتمتة آمنة، أو تجربة ويب عالية الجودة؟ شاركنا بعض التفاصيل وسنرسم لك الخطة المناسبة.",
      quickInfoResponse: "الردود خلال يوم عمل واحد",
      channelEmail: "البريد",
      channelWhatsapp: "واتساب",
      serviceAutomate: "أتمتة سير العمل",
      serviceWeb: "بناء حضورك الرقمي",
      serviceSecure: "تحصين الأصول الرقمية",
      serviceOther: "أخرى",
      errorName: "يرجى إدخال اسمك.",
      errorEmail: "يرجى إدخال بريد إلكتروني صالح.",
      errorService: "يرجى اختيار خدمة واحدة على الأقل.",
      errorMessage: "يرجى كتابة رسالة قصيرة.",
    },
  };

  let currentLanguage = "en";

  const applyLanguage = (language) => {
    currentLanguage = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language === "ar" ? "ar" : "en";

    i18nElements.forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });

    i18nPlaceholders.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (translations[language] && translations[language][key]) {
        element.setAttribute("placeholder", translations[language][key]);
      }
    });

    if (langToggle) {
      langToggle.textContent = language === "ar" ? "EN 🌐" : "🌐 العربية";
    }
  };

  const getStoredLanguage = () => {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === "ar" ? "ar" : "en";
  };

  const modalOverlay = document.getElementById("feedbackModal");
  const modalMessage = document.getElementById("feedbackModalMessage");
  const modalCloseButton = document.getElementById("feedbackModalClose");
  const modalTitle = document.getElementById("feedbackModalTitle");
  const modalIcon = modalOverlay?.querySelector(".modal-icon");

  const errorModalOverlay = document.getElementById("errorModal");
  const errorModalMessage = document.getElementById("errorModalMessage");
  const errorModalRetryButton = document.getElementById("errorModalRetry");
  const errorModalTitle = document.getElementById("errorModalTitle");

  const closeFeedbackModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("visible");
    modalOverlay.setAttribute("aria-hidden", "true");
    modalOverlay.hidden = true;
    window.clearTimeout(closeFeedbackModal.timeoutId);
  };

  const showFeedbackModal = (message, type = "success") => {
    if (!modalOverlay || !modalMessage || !modalCloseButton || !modalTitle)
      return;

    modalOverlay.classList.remove("error");
    if (type === "error") {
      modalOverlay.classList.add("error");
    }

    modalOverlay.hidden = false;
    modalOverlay.setAttribute("aria-hidden", "false");
    modalTitle.textContent = type === "error" ? "Oops" : "Success";
    modalMessage.textContent = message;
    modalCloseButton.textContent =
      translations[currentLanguage]?.modalClose || translations.en.modalClose;
    modalIcon.textContent = type === "error" ? "⚠" : "✓";
    modalOverlay.classList.add("visible");

    window.clearTimeout(closeFeedbackModal.timeoutId);
    closeFeedbackModal.timeoutId = window.setTimeout(() => {
      closeFeedbackModal();
    }, 4500);
  };

  const closeErrorModal = () => {
    if (!errorModalOverlay) return;
    errorModalOverlay.classList.remove("visible");
    errorModalOverlay.setAttribute("aria-hidden", "true");
    errorModalOverlay.hidden = true;
  };

  const showErrorModal = (message) => {
    if (
      !errorModalOverlay ||
      !errorModalMessage ||
      !errorModalRetryButton ||
      !errorModalTitle
    )
      return;

    errorModalTitle.textContent =
      translations[currentLanguage]?.errorModalTitle ||
      translations.en.errorModalTitle;
    errorModalMessage.textContent = message;
    errorModalRetryButton.textContent =
      translations[currentLanguage]?.errorModalRetry ||
      translations.en.errorModalRetry;
    errorModalOverlay.hidden = false;
    errorModalOverlay.setAttribute("aria-hidden", "false");
    errorModalOverlay.classList.add("visible");
  };

  modalOverlay?.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeFeedbackModal();
    }
  });

  errorModalOverlay?.addEventListener("click", (event) => {
    if (event.target === errorModalOverlay) {
      closeErrorModal();
    }
  });

  modalCloseButton?.addEventListener("click", closeFeedbackModal);
  errorModalRetryButton?.addEventListener("click", closeErrorModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
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

  langToggle?.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "ar" ? "en" : "ar";
    applyLanguage(nextLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  });

  cta?.addEventListener("click", (event) => {
    if (cta?.tagName.toLowerCase() !== "a") {
      event.preventDefault();
    }
    window.location.href = "contact.html";
  });

  document.querySelectorAll(".pill:not(.channel-btn)").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".pill:not(.channel-btn)")
        .forEach((b) => b.classList.remove("pill-primary"));
      btn.classList.add("pill-primary");
    });
  });

  // subtle entrance animation
  document.querySelectorAll(".card").forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    setTimeout(() => {
      card.style.transition = "opacity .5s ease, transform .5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 120 * i);
  });

  // Channel toggle (Email / WhatsApp)
  const channelBtns = document.querySelectorAll(".channel-btn");
  channelBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const channel = btn.dataset.channel;
      if (channel === "whatsapp") {
        window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
        return;
      }
      channelBtns.forEach((b) => {
        b.classList.toggle("pill-primary", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
    });
  });

  // Contact form validation + submit
  const contactForm = document.getElementById("contactForm");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const submitButton = contactForm?.querySelector(".contact-submit");
  const submitButtonLabel = submitButton?.querySelector("span");

  const setFieldError = (fieldEl, hasError) => {
    if (!fieldEl) return;
    fieldEl.classList.toggle("invalid", hasError);
    const errEl = fieldEl.querySelector(".field-error");
    if (errEl) errEl.hidden = !hasError;
  };

  const enforceNumericInput = (inputEl) => {
    inputEl.addEventListener("input", () => {
      inputEl.value = inputEl.value.replace(/\D/g, "");
      setFieldError(inputEl.closest(".field"), false);
    });
  };

  const clearErrorsOnInput = (el) => {
    el.addEventListener("input", () =>
      setFieldError(el.closest(".field"), false),
    );
    el.addEventListener("change", () =>
      setFieldError(el.closest(".field"), false),
    );
  };
  contactForm?.querySelectorAll("input, textarea, select").forEach((el) => {
    clearErrorsOnInput(el);
    if (el.id === "whatsappNumber") {
      enforceNumericInput(el);
    }
  });

  const setSubmitButtonLoading = (isLoading) => {
    if (!submitButton) return;
    submitButton.disabled = isLoading;
    submitButton.classList.toggle("is-loading", isLoading);
    submitButton.style.cursor = isLoading ? "not-allowed" : "";
    submitButton.style.opacity = isLoading ? "0.4" : "";

    const icon = submitButton.querySelector("i");
    if (isLoading) {
      const loadingText =
        translations[currentLanguage]?.contactSubmitting ||
        translations.en.contactSubmitting;
      if (icon) {
        icon.className = "fa-solid fa-spinner";
      }
      if (submitButtonLabel) {
        submitButtonLabel.textContent = loadingText;
      }
    } else {
      if (icon) {
        icon.className = "fa-solid fa-paper-plane";
      }
      if (submitButtonLabel) {
        submitButtonLabel.textContent =
          translations[currentLanguage]?.contactSubmit ||
          translations.en.contactSubmit;
      }
    }
  };
  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameEl = contactForm.querySelector("#name");
    const emailEl = contactForm.querySelector("#email");
    const whatsappNumberEl = contactForm.querySelector("#whatsappNumber");
    const whatsappCountryCodeEl = contactForm.querySelector(
      "#whatsappCountryCode",
    );
    const messageEl = contactForm.querySelector("#message");
    const serviceChecks = contactForm.querySelectorAll('input[name="service"]');
    const serviceField = serviceChecks[0]?.closest(".field");
    const whatsappField = whatsappNumberEl?.closest(".field");

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const whatsappValue = whatsappNumberEl.value.trim();
    const message = messageEl.value.trim();
    const services = Array.from(serviceChecks)
      .filter((c) => c.checked)
      .map((c) => c.value);
    const selectedCountryCode = whatsappCountryCodeEl?.value || "";

    let firstInvalid = null;
    const mark = (fieldEl, invalid, focusTarget) => {
      setFieldError(fieldEl, invalid);
      if (invalid && !firstInvalid) firstInvalid = focusTarget || fieldEl;
    };

    mark(nameEl.closest(".field"), name.length === 0, nameEl);
    mark(emailEl.closest(".field"), !emailRegex.test(email), emailEl);
    mark(
      whatsappField,
      whatsappValue.length !== 9 || !/^\d{9}$/.test(whatsappValue),
      whatsappNumberEl,
    );
    mark(serviceField, services.length === 0, serviceChecks[0]);
    mark(messageEl.closest(".field"), message.length === 0, messageEl);

    if (firstInvalid) {
      firstInvalid.focus?.();
      return;
    }

    setSubmitButtonLoading(true);

    try {
      // رابط الووركر الآمن في كلاود فلير
      const CLOUDFLARE_WORKER_URL =
        "https://telgram-bot.contact-opticore.workers.dev/";

      // دمج وتنسيق تفاصيل الواتساب والخدمات داخل حقل الرسالة لكي يستلمها الووركر كاملة
      const fullFormattedMessage = `\n*رقم الواتساب:* ${selectedCountryCode} ${whatsappValue}\n*الخدمات المطلوبة:* ${services.join(", ")}\n\n*الرسالة:* ${message}`;

      const response = await fetch(CLOUDFLARE_WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: fullFormattedMessage,
        }),
      });

      if (response.ok) {
        const result = await response.json();

        if (result.success) {
          const successKey = "contactSuccess";
          const msg =
            translations[currentLanguage]?.[successKey] ||
            translations.en[successKey];

          contactForm.reset();
          showFeedbackModal(msg, "success");

          contactForm
            .querySelectorAll(".field.invalid")
            .forEach((f) => f.classList.remove("invalid"));

          if (whatsappCountryCodeEl) {
            const defaultCountry =
              countryDialCodes.find((country) => country.dialCode === "+970") ||
              countryDialCodes[0];
            if (defaultCountry) {
              whatsappCountryCodeEl.value = defaultCountry.dialCode;
            }
          }
        } else {
          const msg =
            translations[currentLanguage]?.contactErrorModal ||
            translations.en.contactErrorModal;
          showErrorModal(msg);
        }
      } else {
        const msg =
          translations[currentLanguage]?.contactErrorModal ||
          translations.en.contactErrorModal;
        showErrorModal(msg);
      }
    } catch (error) {
      console.error("Worker connection failed:", error);
      const msg =
        translations[currentLanguage]?.contactErrorModal ||
        translations.en.contactErrorModal;
      showErrorModal(msg);
    } finally {
      setSubmitButtonLoading(false);
    }
  });

  applyLanguage(currentLanguage);
});
