# Marakadhey – Never Miss Opportunities

> "Save Today. Stay Organized. Never Miss an Opportunity."  
> *"Save it. Remember it. Never lose it."*

**Marakadhey** is a powerful, privacy-first productivity browser extension and mobile app that helps you save important webpages, organize upcoming deadlines, and receive timely reminders for opportunities you discover online.

From application deadlines and coding assignments to webinars, job applications, and certifications, Marakadhey ensures you stay organized and never miss what matters on the web.

---

## 🌐 Official Store & Distribution Channels

| Platform | Channel | Link |
| :--- | :--- | :--- |
| **Google Chrome** | Chrome Web Store | [Add to Chrome](https://chromewebstore.google.com/detail/inidbaohifkncdjnondbkljhoogkhnce?utm_source=item-share-cb) |
| **Microsoft Edge** | Microsoft Edge Add-ons | [Get it for Edge](https://microsoftedge.microsoft.com/addons/detail/marakadhey%E2%80%93never-miss-opp/cmndbipcnkkmeojkioajenbckapcfpla) |
| **Android Mobile** | Direct APK Download | [Download Android APK](https://pranaveshn.vercel.app/marakadhey_mobile.apk) |

---

## 🚀 Key Features

* ✅ **Updated Promotional Screenshots & Working Audit (v2.3.2.3)**  
  Updated store screenshots and performed working audit covering real-time system time detection, multi-calendar support, and automatic date/time page scanning.

* ✅ **Dual Calendar Save Verification (v2.3.2.2)**  
  Intelligent verification prevents premature "Added to Calendar" status. Combines automatic tab navigation detection with an interactive `[Confirm Saved / Not Saved]` verification fallback for Google Calendar, Microsoft Outlook, and Yahoo Calendar.

* ✅ **Full-Featured Snooze Engine & 15-Minute Default (v2.3.2.2)**  
  Snooze alerts by `+15m`, `+30m`, `+1h`, `+3h`, `+1d`, `+3d`, `+1w`, or pick a custom date and time. Future scheduled deadlines accurately snooze forward from their due date rather than pulling back to today.

* ✅ **Urgent 24-Hour Due-Soon Mini-Cards (v2.3.2.2)**  
  Full action suite on upcoming items: Open Link, Calendar Sync, Quick Snooze, Edit, Delete (with inline confirmation), and Done.

* ✅ **Real-Time Date & Time Page Scanner (v2.3.2.1)**  
  Automatically scans and extracts opportunity deadline dates and times (AM/PM & 24-hour format) directly from webpage text and email notifications.

* ✅ **Multi-Calendar Integration (v2.3.2)**  
  Direct event synchronization to Google Calendar, Microsoft Outlook, and Yahoo Calendar with customizable default provider preferences and recurrence support.

* ✅ **One-Click Page Saving**  
  Save your current webpage instantly with automatic title and URL capture.

* ✅ **Intelligent System Time Detection (v2.3)**  
  Pre-fills the current system date and time while intelligently preserving your chosen time across quick date presets.

* ✅ **Smart Completion Workflow (v2.2)**  
  Choose to complete an entire recurring series, complete only the current occurrence, or reschedule to a custom date.

* ✅ **Flexible Recurrence Scheduling**  
  Set recurring alerts tailored to your schedule: Daily, Weekly, Weekdays, Weekends, Monthly, Quarterly, or Yearly.

* ✅ **Desktop Notifications & Background Snooze**  
  Receive desktop alert reminders with reliable alarm management and duplicate alert prevention.

* ✅ **Interactive Productivity Dashboard**  
  Monitor your pending reminders, track completion rates, and view upcoming deadlines at a glance.

---

## 🔒 Privacy First

Marakadhey is built with privacy at its core:
* ✔ All reminder data is stored **locally on your device** using local browser storage
* ✔ No account creation or personal login required
* ✔ No personal data or browsing history collected or transmitted
* ✔ No data shared or sold to advertisers
* ✔ Works completely offline without cloud dependency

---

## 💡 Why Marakadhey?

Every year, countless opportunities are missed simply because deadlines are forgotten in a sea of browser tabs. Marakadhey makes it effortless to capture deadlines the moment you find them and stay on track.

**Save Today. Stay Organized. Never Miss an Opportunity.**

---

## 📁 Landing Page Architecture

This repository hosts the official modern, responsive landing page for Marakadhey:

```
marakadhey_landingpage/
├── .github/
│   └── workflows/
│       └── deploy.yml               # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/
│   │   ├── icon.png                 # Authoritative Marakadhey product logo
│   │   ├── chrome.svg               # Official Chrome vector logo
│   │   ├── edge.svg                 # Official Microsoft Edge vector logo
│   │   ├── android.svg              # Official Android robot vector logo
│   │   ├── marquee_promo_tile.png   # Open Graph social preview banner
│   │   └── screenshot_*.png         # Official extension interface screenshots
│   └── favicon.png                  # Product favicon
├── src/
│   ├── style.css                    # Design system, glassmorphism, responsive styles
│   └── main.js                      # Interactivity, tabs, scroll reveals
├── index.html                       # Semantic HTML5, accessibility, SEO metadata
├── vite.config.js                   # Universal relative path configuration (base: './')
├── package.json                     # Scripts and dependencies (Vite)
└── README.md
```

---

## 🛠️ Landing Page Development

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Local Development
Starts the Vite dev server with instant hot module replacement (HMR):
```bash
npm run dev
```

### Production Build
Compiles all HTML, CSS, and JS into optimized static assets in `dist/` with universal relative paths:
```bash
npm run build
```

### Local Production Preview
Serves the generated `dist/` bundle locally:
```bash
npm run preview
```

---

## 📦 Deployment Options

The build output in `dist/` consists of standalone, provider-agnostic static files.

### 1. GitHub Pages (Pre-Configured via GitHub Actions)
- Repository: `https://github.com/pranavesh-n/marakadhey_landingpage.git`
- Pre-configured with [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- Enable in your repository: **Settings → Pages → Source: GitHub Actions**. Deploys automatically on every push to `main` with 100 GB/month free bandwidth and free custom domain SSL.

### 2. Deno Deploy (Global Edge CDN)
- Generous free tier: 100,000 requests/day, 100 GiB outbound data transfer/month.
- Connect your GitHub repo at [deno.com/deploy](https://deno.com/deploy) with build command `npm run build` and publish directory `dist`.

### 3. Zeabur (Modern Developer PaaS)
- Connect GitHub repo at [zeabur.com](https://zeabur.com) — automatic detection for Vite static sites with global CDN.

### 4. Surge.sh (Instant 1-Command CLI Deployment)
```bash
npm run build
npx surge dist marakadhey.surge.sh
```

---

## 📬 Contact & Support

For questions, feedback, or developer support:
* [LinkedIn](https://www.linkedin.com/in/pranaveshn)
* [Gmail Support](mailto:pranaveshnandakumar@gmail.com)
* [WhatsApp Direct](https://wa.me/916374161918)
