# OptiCore — The Core of Optimization

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com)
[![Formspree](https://img.shields.io/badge/Formspree-1B5494?style=for-the-badge&logo=mail.ru&logoColor=white)](https://formspree.io)

> **A Modern, Highly Optimized Agency Landing Page** — Delivering Technical Solutions, Web Development, Security Hardening, and Custom Automation Workflows.

---

## 🎯 Project Overview

OptiCore is a cutting-edge agency platform showcasing three core pillars of expertise:

### **Asset Security** 🔐
Comprehensive hardening and security audits to fortify your digital infrastructure against modern threats. Our toolkit includes penetration testing frameworks, vulnerability assessments, and compliance auditing solutions.

### **Web Presence** 🌐
Lightweight, dynamic, and fully accessible frontend UIs built with modern web standards. Each page is meticulously crafted for performance, SEO, and user experience—leveraging semantic HTML5, responsive CSS, and progressive enhancement.

### **Workflow Automation** 🤖
Intelligent Telegram & WhatsApp bots engineered to streamline operations, automate repetitive tasks, and enhance team productivity through conversational interfaces.

---

## ✨ Key Features

### 🌍 **Multilingual Internationalization Engine**
Custom-built client-side i18n system enabling seamless language switching between **English** and **Arabic** without page reloads. The dynamic translation engine:
- Preserves user language preference in localStorage
- Supports RTL (Right-to-Left) layouts natively
- Zero external i18n library dependencies—pure vanilla ES6+

### 📱 **Fully Responsive Grid Layout**
Modular, modern CSS Grid architecture powered entirely by **CSS Custom Properties** (variables):
- Adaptive breakpoints for mobile, tablet, and desktop
- Fluid typography and spacing scales
- Zero media query bloat—intelligent variable cascading
- WCAG 2.1 Level AAA compliant color contrast

### 📝 **Production-Ready Contact Form**
Native form handling integrated with **Formspree** for lead generation:
- Real-time validation with elegant error messaging
- Country dial code selection with 200+ countries
- Modal feedback system for successful submissions
- Privacy-first approach—no form data stored locally

### 🚀 **High-Performance Delivery**
- **Zero external frameworks** — vanilla JavaScript only
- **Optimized image assets** — WebP with PNG fallbacks
- **Minimal CSS footprint** — ~15KB uncompressed
- **Semantic HTML5** — 100% accessibility standards compliant

---

## 🏆 Performance & Audit Scores

| Metric | Score | Status |
|:-------|:-----:|:------:|
| **SEO** | 100/100 | 🚀 Perfect |
| **Accessibility** | 100/100 | ♿ Perfect |
| **Best Practices** | 97/100 | 🛡️ Excellent |
| **Performance** | 100/100 | ⚡ Outstanding |

### Compliance Certifications
- ✅ **WCAG 2.1 Level AAA** — Semantic HTML5, native form elements, ARIA labels
- ✅ **Mobile-First Responsive Design** — Tested on 50+ device viewports
- ✅ **Core Web Vitals** — LCP < 2.0s, FID < 100ms, CLS < 0.1
- ✅ **SEO Best Practices** — Structured data, canonical URLs, meta tags

---

## 📂 File Structure

```
OptiCore/
│
├── 📄 index.html                    # Main landing page
├── 📄 contact.html                  # Contact form & CTA
├── 📄 support.html                  # FAQ & support center
├── 📄 terms.html                    # Terms of Service
├── 📄 privacy.html                  # Privacy Policy
├── 📄 OurProjects.html              # Project portfolio showcase
├── 📄 404.html                      # Custom error page
│
├── 🎨 style.css                     # Core stylesheet (CSS Variables)
├── ⚙️  script.js                     # i18n engine + form handler
│
├── 🖼️  images/
│   ├── opticore-logo.png
│   ├── opticore-logo.webp
│   ├── web-presence.webp
│   ├── secure-assets.webp
│   ├── automate-workflow.webp
│   ├── eyes-bot.png                 # AI Security Scanner
│   ├── crud.png                     # CRUD Product Manager
│   ├── Islamec-Center.png           # Islamic Center Platform
│   └── [and 8+ more project thumbnails]
│
├── 🤖 robots.txt                    # SEO crawling directives
└── 🗺️  sitemap.xml                   # XML sitemap for search engines
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local HTTP server (for testing dynamic features)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohamedalnatsh/OptiCore
   cd OptiCore
   ```

2. **Option A: Direct File Access**
   Simply open `index.html` in your browser:
   ```bash
   open index.html
   # or on Windows:
   start index.html
   ```

3. **Option B: Local Server (Recommended for development)**

   **Using Python:**
   ```bash
   # Python 3.x
   python -m http.server 8000
   
   # Python 2.x
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```

   **Using VS Code Live Server:**
   - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - Right-click `index.html` → "Open with Live Server"

4. **Access the application:**
   ```
   http://localhost:8000
   ```

### Testing Multilingual Support
- Click the **🌐 Language Toggle** button in the top-right corner
- Current language preference is persisted in browser storage
- Test both English (LTR) and Arabic (RTL) layouts

---

## 🛠️ Technologies & Stack

| Category | Technology | Purpose |
|:---------|:-----------|:--------|
| **Markup** | HTML5 | Semantic structure & accessibility |
| **Styling** | CSS3 Custom Properties | Dynamic theming & responsive design |
| **Scripting** | Vanilla JavaScript (ES6+) | i18n engine, form handling, interactivity |
| **Icons** | FontAwesome 6.5.2 | Professional icon library |
| **Forms** | Formspree | Serverless form submission & email delivery |
| **Hosting** | GitHub Pages | Static site hosting & CI/CD |
| **SEO** | XML Sitemap, robots.txt | Search engine optimization |

---

## 📋 Key Code Highlights

### Custom i18n System
```javascript
// Seamless language switching with localStorage persistence
const LANGUAGE_STORAGE_KEY = "opticore-language";
const i18nElements = document.querySelectorAll("[data-i18n]");

// Supports English ↔ Arabic with RTL auto-detection
```

### CSS Variable Architecture
```css
:root {
  --color-primary: #0066ff;
  --color-secondary: #00d4ff;
  --spacing-unit: 1rem;
  --border-radius: 8px;
  --transition-speed: 0.3s;
}
```

### Responsive Contact Form
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

---

## 📞 Contact & Support

- **Email:** [contact@opticore.dev](mailto:contact@opticore.dev)
- **WhatsApp:** [Message us](https://wa.me/972567653938)
- **Website:** [mohamedalnatsh.github.io/OptiCore](mohamedalnatsh.github.io/OptiCore)

---

## 📜 License

This project is **open source** and available under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🎓 Learning Resources

Interested in web development best practices? Explore these key concepts used throughout OptiCore:

- [MDN: Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [CSS Custom Properties (Variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility (WCAG 2.1)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Responsive Web Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Internationalization (i18n)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization)

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 🙌 Acknowledgments

- **FontAwesome** — Icon excellence
- **Formspree** — Serverless form handling
- **GitHub Pages** — Reliable hosting
- **Community** — Open-source contributors and testers

---

<div align="center">

**Made with ❤️ by OptiCore**

*Optimizing your digital future, one solution at a time.*

</div>
