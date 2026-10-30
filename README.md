# Krudex Technologies — Official Website & Platform

A high-performance, modern web application and corporate portfolio for **Krudex Technologies** — a specialized software engineering studio building high-impact web platforms, interactive 3D WebGL experiences, enterprise AI integrations, Google Ads and digital marketing, and student training with industry experts in collaboration with NovaSkill Hub.

Built with **Next.js 16 (App Router)**, **React 19**, **Three.js / React Three Fiber**, **Tailwind CSS v4**, and backed by **Cloudflare D1** (Serverless Edge SQLite).

---

## 🌟 Key Highlights & Features

- **Interactive 3D Graphics & WebGL**: Immersive 3D hero canvas powered by Three.js and React Three Fiber (`@react-three/fiber`, `@react-three/drei`) with smooth mouse-tracking and custom post-processing shaders.
- **Interactive 3D Edge Globe**: Real-time canvas globe powered by `cobe` with auto-rotation, point markers, and coordinate mapping.
- **Fluid Motion & Micro-interactions**: Smooth inertia scrolling powered by `lenis`, magnetic buttons, custom cursors, and layout transitions with `framer-motion`.
- **Serverless Edge Database**: Contact form inquiries securely saved to **Cloudflare D1** SQLite database through dedicated Next.js App Router API Route Handlers.
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
│   │   ├── layout.tsx      # Root layout (fonts, metadata, smooth scroll)
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
│       └── d1.ts           # Cloudflare D1 client & query utility
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

Open `.env.local` and add your Cloudflare credentials:
```env
# Cloudflare D1 Database Configuration
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_D1_DATABASE_ID=your_d1_database_id
CLOUDFLARE_D1_API_TOKEN=your_cloudflare_api_token
```

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

### Code Quality & Linting
Run ESLint to check for code standard conformance:
```bash
npm run lint
```

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
| `/terms` | Client engagement terms, deliverables, and IP transfer terms. |

---

## 🚢 Deployment

### Deploying on Vercel
1. Import the repository into your [Vercel Dashboard](https://vercel.com).
2. Under **Project Settings** → **Environment Variables**, add:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_D1_DATABASE_ID`
   - `CLOUDFLARE_D1_API_TOKEN`
3. Click **Deploy**.

### Deploying on Cloudflare Pages / Workers
This project can also be deployed to Cloudflare using `@opennextjs/cloudflare` with native D1 bindings configured in `wrangler.jsonc`.

---

## 📄 License & Intellectual Property

Copyright © 2026 Krudex Technologies. All rights reserved.
