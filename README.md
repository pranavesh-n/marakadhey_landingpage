# Marakadhey — Public Landing Page

> "Save it. Remember it. Never lose it."

The official public landing page for **Marakadhey**, a privacy-first productivity and reminder ecosystem available on **Google Chrome**, **Microsoft Edge**, and **Android Mobile (APK)**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Local Development
Runs the Vite development server with hot-module replacement:
```bash
npm run dev
```

### Production Build
Compiles assets to the static `dist/` directory with relative paths for universal hosting:
```bash
npm run build
```

### Local Production Preview
Serves the production build locally:
```bash
npm run preview
```

---

## 📁 Project Architecture

```
marakadhey_ldpg/
├── .github/
│   └── workflows/
│       └── deploy.yml               # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/
│   │   ├── icon.png                 # Authoritative Marakadhey logo
│   │   ├── chrome.svg               # Official Google Chrome vector logo
│   │   ├── edge.svg                 # Official Microsoft Edge vector logo
│   │   ├── android.svg              # Official Android robot vector logo
│   │   ├── marquee_promo_tile.png   # Open Graph social banner
│   │   └── screenshot_*.png         # Product UI screenshots
│   └── favicon.png                  # Product favicon
├── src/
│   ├── style.css                    # Design system, glassmorphism, responsive styles
│   └── main.js                      # Navigation, tab switching, animations
├── index.html                       # Semantic HTML5, accessibility, SEO metadata
├── vite.config.js                   # Universal relative path config
├── package.json                     # Scripts and dependencies (Vite)
└── README.md
```

---

## 🌐 Official Distribution Channels

- **Google Chrome Web Store:** [Add to Chrome](https://chromewebstore.google.com/detail/inidbaohifkncdjnondbkljhoogkhnce?utm_source=item-share-cb)
- **Microsoft Edge Add-ons:** [Get it for Edge](https://microsoftedge.microsoft.com/addons/detail/marakadhey%E2%80%93never-miss-opp/cmndbipcnkkmeojkioajenbckapcfpla)
- **Android Mobile App (APK):** [Download Android APK](https://pranaveshn.vercel.app/marakadhey_mobile.apk)

---

## 📦 Deployment Options

The project compiles to pure static HTML/CSS/JS in `dist/`. No vendor lock-in.

### 1. GitHub Pages (Automated via GitHub Actions)
- Repository: `https://github.com/pranavesh-n/marakadhey_landingpage.git`
- Pre-configured with `.github/workflows/deploy.yml`.
- Enable in **Repo Settings -> Pages -> Source: GitHub Actions**. Deploys automatically on every push to `main` with 100GB/mo free bandwidth and custom domain support.

### 2. Deno Deploy (Ultra-Fast Edge CDN)
- Generous free tier: 100,000 requests/day, 100 GiB outbound data transfer/mo.
- Connect your GitHub repo at [deno.com/deploy](https://deno.com/deploy) and set build command `npm run build` and output `dist`.

### 3. Zeabur (Modern Developer PaaS)
- Connect GitHub repo at [zeabur.com](https://zeabur.com) — zero configuration needed for Vite static sites.

### 4. Surge.sh (1-Command Instant CLI)
```bash
npm run build
npx surge dist marakadhey.surge.sh
```
