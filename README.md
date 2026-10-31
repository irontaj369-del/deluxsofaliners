# Delux Sofa Liners — Official Web Application

> **Bespoke Sofas, Expert Furniture Restoration & Luxury Wall Panels**  
> Basheer Bagh, Hyderabad • 20+ Years Experience • Open 7 Days

A modern, high-performance web application built for **Delux Sofa Liners** featuring an interactive Reelmark-inspired 3D curved arch hero carousel, a dedicated Showcase Project Gallery with interactive zoom & pan lightbox preview, real-time cost estimation, fabric visualization, and direct WhatsApp lead generation.

---

## 🚀 Live Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Routing:** React Router v7 (with single-page application rewrites via `vercel.json`)
- **Styling:** Tailwind CSS v4 + Plus Jakarta Sans Typography
- **Icons:** Lucide React
- **Motion:** Motion (Framer Motion v12)
- **Data & Leads:** Supabase integration with offline fallback storage and XSS sanitization

---

## 📱 Responsive & Mobile-Optimized

- **Adaptive 3D Curved Carousel:** Auto-calculates card widths and 3D cylindrical geometry dynamically across Mobile (<640px), Tablet (640px–1024px), and Desktop (1024px+).
- **Interactive Lightbox Modal:** Full-screen multi-touch zoom and pan inspection to examine fabric weaves, tufting stitches, and wood finishes up close.
- **Fixed Mobile Utility Bar & WhatsApp FAB:** Ergonomic bottom touch bar and floating WhatsApp button positioned at `bottom-20 right-6` to avoid blocking controls on handheld devices.
- **Form Sanitization:** All inquiry forms sanitize user inputs to protect against XSS and validate Indian phone numbers.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
The compiled, optimized production files are written to `/dist`.

---

## 🐙 Step-by-Step: Pushing to GitHub

Run the following commands in your project root:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files to staging
git add .

# 3. Commit changes
git commit -m "feat: complete responsive Delux Sofa Liners website with 3D hero & showcase gallery"

# 4. Set the default branch to main
git branch -M main

# 5. Add your GitHub repository remote URL (replace with your repo link)
git remote add origin https://github.com/YOUR_USERNAME/delux-sofa-liners.git

# 6. Push to GitHub
git push -u origin main
```

---

## ⚡ Step-by-Step: Deploying on Vercel

### Method 1: Deploy via Vercel Web Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and log into your account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository (`delux-sofa-liners`) and click **"Import"**.
4. Configure the Project Settings (Vercel auto-detects Vite):
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. (Optional) Set Environment Variables:
   - `VITE_SUPABASE_URL`: *(Your Supabase project URL)*
   - `VITE_SUPABASE_ANON_KEY`: *(Your Supabase anon key)*
   *(Note: The app runs 100% smoothly even without Supabase credentials by utilizing resilient local lead capture).*
6. Click **"Deploy"**. Your site will be live on an SSL-secured `*.vercel.app` domain in seconds!

---

### Method 2: Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Log in and deploy
vercel

# 3. For production release
vercel --prod
```

---

## ⚙️ Configuration Files Summary

- `vercel.json`: Handles client-side routing rewrites so URLs like `/gallery`, `/new-sofas`, and `/contact` never return 404 on refresh, and configures immutable asset caching.
- `.gitignore`: Ensures `node_modules/`, `dist/`, `.env*`, `.vercel/`, and local OS files are never committed to your repository.
- `.env.example`: Template for environment variables.
- `index.html`: Fully configured with SEO meta tags, OpenGraph preview cards, Twitter cards, and Schema.org structured business data.
