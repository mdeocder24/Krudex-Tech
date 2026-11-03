# Krudex Global — Official Website & Platform

A high-performance, modern web application and corporate portfolio for **Krudex Global** — a specialized software engineering studio building high-impact web platforms, interactive 3D WebGL experiences, enterprise AI integrations, Google Ads and digital marketing, and student training with industry experts in collaboration with NovaSkill Hub.

Built with **Next.js 16 (App Router)**, **React 19**, **Three.js / React Three Fiber**, **Tailwind CSS v4**, and backed by **Cloudflare D1** (Serverless Edge SQLite).

---

## 🌟 Key Highlights & Features

- **Interactive 3D Graphics & WebGL**: Immersive 3D hero canvas powered by Three.js and React Three Fiber (`@react-three/fiber`, `@react-three/drei`) with smooth mouse-tracking and custom shaders. Falls back to a static logo for reduced-motion, Save-Data, and low-memory devices, and pauses rendering when off-screen.
- **Interactive 3D Edge Globe**: Real-time canvas globe powered by `cobe` with auto-rotation, point markers, and coordinate mapping.
- **Fluid Motion & Micro-interactions**: Smooth inertia scrolling powered by `lenis`, magnetic buttons, custom cursors, and layout transitions with `framer-motion`.
- **Serverless Edge Database**: Contact form inquiries securely saved to **Cloudflare D1** SQLite database through dedicated Next.js App Router API Route Handlers.
- **Hardened Contact API**: Field length caps, honeypot, per-IP rate limiting, optional Cloudflare Turnstile, and optional email notification via Resend.
- **SEO**: `sitemap.xml`, `robots.txt`, canonical URLs, generated Open Graph image, and JSON-LD (Organization, WebSite, FAQPage).
- **Security headers**: HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, and a Content-Security-Policy (currently Report-Only).
- **Design System**: Tailored dark-mode aesthetic utilizing **Tailwind CSS v4** and modern typography.
- **Fully Responsive**: Optimized across desktop, tablet, and mobile breakpoints.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org) with Turbopack |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **3D & WebGL** | [Three.js](https://threejs.org), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [cobe](https://github.com/shuding/cobe) |
| **Animation & Scroll** | [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) |
| **Database** | [Cloudflare D1](https://developers.cloudflare.com/d1/) (Serverless SQLite) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **CLI & Tools** | [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) |

---

## 📂 Project Architecture

```
Krudex-Tech/
├── public/                 # Static assets (images, icons, models)
├── src/
│   ├── app/                # Next.js App Router routes & pages
│   │   ├── api/            # Server-side API Route Handlers
│   │   │   └── contact/    # Inquiry submission endpoint (POST -> D1)
│   │   ├── about/          # Company history, vision & engineering principles
│   │   ├── contact/        # Interactive project scoping & inquiry form
│   │   ├── our-team/       # Leadership and team profiles
│   │   ├── privacy/        # Privacy policy documentation
│   │   ├── services/       # Engineering capabilities & service offerings
│   │   ├── terms/          # Terms of service
│   │   ├── layout.tsx      # Root layout (fonts, metadata, JSON-LD, smooth scroll)
│   │   ├── sitemap.ts      # Generated sitemap.xml
│   │   ├── robots.ts       # Generated robots.txt
│   │   ├── opengraph-image.tsx # Generated social preview image
│   │   └── page.tsx        # Homepage (Hero, 3D Canvas, Stats, Process, CTA)
│   ├── components/         # Reusable UI & 3D WebGL components
│   │   ├── Hero.tsx        # Hero section with headline and 3D integration
│   │   ├── Hero3DObject.tsx# React Three Fiber canvas & mesh shaders
│   │   ├── GlobeObject.tsx # Interactive Cobe canvas globe
│   │   ├── Navbar.tsx      # Responsive header with mobile menu
│   │   ├── Footer.tsx      # Global footer and quick navigation
│   │   ├── SmoothScroll.tsx# Lenis smooth-scroll wrapper
│   │   └── ...             # Stats, Process, CTA, MagneticButton
│   └── lib/
│       ├── d1.ts           # Cloudflare D1 client & query utility
│       ├── site.ts         # Site URL, contact details, route list
│       ├── rate-limit.ts   # In-memory per-IP rate limiter
│       ├── turnstile.ts    # Optional Cloudflare Turnstile verification
│       ├── notify.ts       # Optional Resend email on new inquiry
│       └── structured-data.ts # JSON-LD payloads
├── e2e/                    # Playwright smoke tests
├── .github/workflows/ci.yml # Lint, typecheck, build, e2e on every PR
├── design/brand-archive/   # Old brand images (not deployed)
├── d1_schema.sql           # SQLite database schema for Cloudflare D1
├── .env.example            # Sample environment variables template
├── next.config.ts          # Next.js configuration & routing rules
├── package.json            # Dependencies and npm scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

Follow these steps to run the website locally on your computer.

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version **20.x** or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js) or `pnpm` / `yarn` / `bun`

### 2. Clone the Repository
```bash
git clone https://github.com/mdeocder24/Krudex-Tech.git
cd Krudex-Tech
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy `.env.example` to create your local `.env.local` file:
```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the values:

| Variable | Required | Purpose |
|---|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Yes | Cloudflare account that owns the D1 database |
| `CLOUDFLARE_D1_DATABASE_ID` | Yes | D1 database for inquiries |
| `CLOUDFLARE_D1_API_TOKEN` | Yes | API token with `Account.D1:Edit` |
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Origin used in canonical URLs, sitemap, robots, OG tags |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Optional | Turnstile bot check on the contact form (set both) |
| `RESEND_API_KEY` / `CONTACT_NOTIFY_EMAIL` | Optional | Email the team on each new inquiry |
| `CONTACT_FROM_EMAIL` | Optional | Sender address on a Resend-verified domain |

---

## 🗄️ Database Setup (Cloudflare D1)

The contact form uses Cloudflare D1 to persist submissions.

### 1. Log in to Cloudflare with Wrangler
```bash
npx wrangler login
```

### 2. Create the D1 Database (if not already created)
```bash
npx wrangler d1 create krudex-db
```
This prints your `database_id` and `database_name`.

### 3. Apply the Database Schema
Execute the schema file [d1_schema.sql](./d1_schema.sql) on your remote Cloudflare database:
```bash
npx wrangler d1 execute krudex-db --remote --file=./d1_schema.sql
```

### 4. Verify Database Records
To inspect stored inquiries at any time:
```bash
npx wrangler d1 execute krudex-db --remote --command="SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 5;"
```

---

## 💻 Running the App

### Development Server
Start the local Next.js dev server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The page will reload automatically as you modify source files.

### Production Build
Test and preview the optimized production build:
```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Code Quality & Tests
```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript
npm run build && npm run test:e2e   # Playwright smoke tests against the production build
```
The first Playwright run needs a browser: `npx playwright install chromium`, or reuse installed Chrome with `PW_CHANNEL=chrome npm run test:e2e`. The contact-form test mocks `/api/contact`, so it never writes to D1.

CI (`.github/workflows/ci.yml`) runs all of the above on every push to `main` and every pull request.

---

## 🎨 Brand assets

Every logo on the site comes from **`src/components/brand/`**. Nothing else may reference a logo file.

| File | What it is |
|---|---|
| `brand.ts` | `BRAND` constants: name, wordmark, asset paths |
| `BrandLogo.tsx` | The logo. `variant="horizontal"` (navbar, footer) or `"stacked"` (hero fallback). Size it with a text class, e.g. `className="text-[20px]"`; every part scales in em |
| `GyroMark.tsx` | The 3D Gyro symbol. Live WebGL on capable devices (used on the 404 page), static PNG otherwise |
| `Wordmark.tsx` | Chrome "KRUDEX" over gold "GLOBAL" (styles: `.kx-chrome`, `.kx-gold`, `.kx-depth` in `globals.css`) |
| `gyroScene.ts` | The Three.js scene, ported from the design reference in `design/logo-gyro-reference/` |

Static renders live in `public/brand/` (mark 1024px and 512px, stacked lockup). The favicon (`src/app/icon.png`), Apple icon (`src/app/apple-icon.png`), social card (`src/app/opengraph-image.tsx`) and JSON-LD logo all use them.

**Guard:** `npm run check:brand` runs before every build and in CI. It fails if a file outside `src/components/brand/` references a logo image, if "Krudex Technologies" reappears, if a brand asset is missing, or if an old logo is put back in `public/`. `e2e/brand.spec.ts` checks that every page renders the logo in the navbar and footer.

**Changing the logo:** edit `gyroScene.ts` / `Wordmark.tsx`, then re-render the PNGs in `public/brand/` and both icons from the live components (a headless-Chrome screenshot of `<GyroMark animated={false} />` and `<BrandLogo variant="stacked" />` with a transparent background), keeping the same file names.

---

## 🌐 Site Map & Pages

| Route | Description |
|---|---|
| `/` | Landing page featuring 3D Hero, interactive globe, metrics, services overview, and engineering process. |
| `/services` | Comprehensive breakdown of engineering capabilities (AI, Web, Cloud, Product Design, Digital Marketing). |
| `/training` | Student training led by industry experts, in collaboration with NovaSkill Hub. |
| `/about` | Company background, engineering timeline (2022–2026), and foundational principles. |
| `/our-team` | Profiles and technical specializations of Krudex engineers and designers. |
| `/contact` | Project scoping inquiry form connected to Cloudflare D1 database. |
| `/privacy` | Privacy policy and data handling transparency. |
| `/terms` | Website terms of use. |

---

## 🚢 Deployment

### Deploying on Vercel
1. Import the repository into your [Vercel Dashboard](https://vercel.com).
2. Under **Project Settings** → **Environment Variables**, add the variables from the table above (at least the three Cloudflare ones and `NEXT_PUBLIC_SITE_URL`).
3. Click **Deploy**.

### Deploying on Cloudflare Pages / Workers
This project can also be deployed to Cloudflare using `@opennextjs/cloudflare` with native D1 bindings configured in `wrangler.jsonc`.

---

## 📄 License & Intellectual Property

Copyright © 2026 Krudex Global. All rights reserved.
