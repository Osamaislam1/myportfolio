# Osama Islam Portfolio

A light, motion-led personal portfolio for a PHP / Laravel full-stack developer. Built with React, TypeScript, Vite, and Tailwind CSS, with GSAP + Lenis for scroll and intro animations.

![Theme](https://img.shields.io/badge/Theme-Light%20Editorial-C8FF00?style=flat-square)
![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?style=flat-square&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?style=flat-square)

## Features

- **Light immersive design** - Paper / ink palette with electric lime accent
- **Cinematic preloader** - Multilingual greetings, progress line, name beat, dual-panel curtain exit
- **Scroll-driven motion** - GSAP ScrollTrigger reveals, SplitText headlines, Lenis smooth scroll
- **Custom cursor** - Interactive ring / label on fine-pointer devices
- **Statement hero** - Large typography, specialty ticker, spinning badge, parallax accents
- **Project rows** - Hover inversion + detail modal
- **Fully responsive** - Tuned for mobile, tablet, and desktop
- **Reduced motion** - Animations skip when `prefers-reduced-motion` is set
- **Contact form** - Email via Web3Forms

## Sections

| Section | File | Description |
|---------|------|-------------|
| Preloader | `Preloader.tsx` | Three-stage intro before the page handoff |
| Hero | `Hero.tsx` | Headline, specialties ticker, stats, CTAs |
| Marquee | `ui/Marquee.tsx` | Tech / focus strip under the hero |
| About | `About.tsx` | Bio and core stack |
| Experience | `Experience.tsx` | Role timeline |
| Projects | `Projects.tsx` | Featured work with modal details |
| Skills | `Skills.tsx` | Categorized skills with animated bars |
| Education | `Education.tsx` | Degrees and certifications |
| Contact | `Contact.tsx` | Form + contact details |

## Quick Start

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
git clone https://github.com/Osamaislam1/myportfolio.git
cd myportfolio

npm install
npm run dev
npm run build
```

## Customization Guide

Content lives in `src/data/`. Edit those files instead of hunting through components.

### 1. Profile (`src/data/profile.ts`)

```ts
export const profile = {
  name: 'Your Name',
  role: 'Your Role',
  greeting: "Hey, I'm Your Name",
  heroHeadline: ['LINE ONE', 'LINE TWO', 'LINE THREE.'],
  specialties: ['ERPs', 'CRMs', 'E-commerce'],
  tagline: 'Short supporting sentence for the hero.',
  bio: 'Longer about-section bio.',
  email: 'you@example.com',
  social: {
    github: 'https://github.com/you',
    linkedin: 'https://linkedin.com/in/you',
  },
  stats: [
    { label: 'Years experience', value: '3.7+' },
    { label: 'Projects completed', value: '50+' },
    { label: 'Technologies', value: '15+' },
  ],
};
```

Also update `web3formsKey` at the bottom of the same file for the contact form.

### 2. Experience (`src/data/experience.ts`)

```ts
{
  company: 'Company Name',
  role: 'Your Role',
  period: 'Start - End',
  location: 'Location',
  description: ['Achievement 1', 'Achievement 2'],
  technologies: ['Tech1', 'Tech2'],
}
```

### 3. Projects (`src/data/projects.ts`)

```ts
{
  id: 1,
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  technologies: ['Laravel', 'React'],
  features: ['Feature 1', 'Feature 2'],
  liveUrl: 'https://your-project.com',
  category: 'fullstack', // 'fullstack' | 'frontend' | 'backend'
}
```

### 4. Skills (`src/data/skills.ts`)

```ts
{
  title: 'Backend',
  skills: [
    { name: 'Laravel', level: 92 }, // 0-100
  ],
}
```

### 5. Education (`src/data/education.ts`)

Update the education and certifications arrays in that file.

### 6. Contact form

1. Get a free key at [web3forms.com](https://web3forms.com/)
2. Set it in `src/data/profile.ts`:

```ts
export const web3formsKey = 'YOUR_ACCESS_KEY_HERE';
```

### 7. Theme (`tailwind.config.js`)

```js
colors: {
  paper: {
    DEFAULT: '#FAFAF8',
    soft: '#F1F1EE',
    lift: '#E9E9E5',
  },
  ink: {
    DEFAULT: '#111110',
    dim: '#4A4A46',
    faint: '#8A8A83',
  },
  accent: {
    DEFAULT: '#C8FF00',
    ink: '#6F9E00',
    dark: '#A3D000',
  },
}
```

Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (labels). Global utilities live in `src/index.css`.

## Project Structure

```
myportfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/                 # Cursor, Marquee, SplitReveal, etc.
│   │   ├── Preloader.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/                   # All editable content
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── testimonials.ts
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   └── useReveal.ts
│   ├── lib/
│   │   ├── gsap.ts
│   │   └── scroll.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
└── package.json
```

## Built With

- **React 18** - UI
- **TypeScript** - Types
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GSAP** (+ ScrollTrigger, SplitText, `@gsap/react`) - Motion
- **Lenis** - Smooth scrolling
- **Lucide React** - Icons
- **Web3Forms** - Contact form API

## Responsive Breakpoints

| Breakpoint | Screen size |
|------------|-------------|
| Mobile | &lt; 768px |
| Tablet | 768px - 1024px |
| Desktop | &gt; 1024px |

## Deployment

Recommended platforms:

- **Vercel** (good fit for Vite)
- **Netlify**
- **GitHub Pages**

```bash
npm run build
vercel --prod
```

## License

MIT License - feel free to use for your own portfolio.

## Author

**Osama Islam**

- Portfolio: [osamaislam.vercel.app](https://osamaislam.vercel.app)
- GitHub: [@Osamaislam1](https://github.com/Osamaislam1)
- LinkedIn: [osama-islam](https://linkedin.com/in/osama-islam)

---

Star this repo if you found it helpful.
