# Terminal Portfolio 🖥️

A creative, hacker-themed personal portfolio website built with React, TypeScript, Vite, and TailwindCSS. Features a unique terminal/command-line aesthetic with matrix-style effects, glitch animations, and interactive navigation.

![Terminal Portfolio](https://img.shields.io/badge/Theme-Hacker%20Terminal-00ff41?style=flat-square)
![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- **Terminal Aesthetic** - Command-line inspired UI with green-on-black theme
- **Matrix Rain Effect** - Animated falling characters background
- **Interactive Terminal Navigation** - Navigate using terminal commands
- **Glitch Text Effects** - Cyberpunk-style text animations
- **Scanlines Overlay** - Retro CRT monitor effect
- **Typing Animations** - Real-time typing effect for text
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Contact Form** - Working email form via Web3Forms API
- **Smooth Animations** - Framer Motion powered transitions

## �️ Sections

| Section | File | Description |
|---------|------|-------------|
| Hero | `Hero.tsx` | Main landing with glitch name, typing animation |
| About | `About.tsx` | Personal info in code-style format |
| Experience | `Experience.tsx` | Git-commit style work timeline |
| Projects | `Projects.tsx` | Filterable project grid with modal details |
| Skills | `Skills.tsx` | Categorized skills with proficiency bars |
| Education | `Education.tsx` | Academic background & certifications |
| Contact | `Contact.tsx` | Terminal-themed contact form |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Osamaislam1/myportfolio.git
cd myportfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/Hero.tsx`):
```tsx
// Line ~84-88: Update your name
<GlitchText text="Your Name" className="text-terminal-green glow-text" />

// Line ~51: Update your skills
const skills = ["Skill1", "Skill2", "Skill3", "Skill4"];

// Line ~104-107: Update your bio
<p>Your professional description here</p>
```

**About Section** (`src/components/About.tsx`):
```tsx
// Line ~91-100: Update personal details
<span className="text-terminal-green">"Your Name"</span>
<span className="text-terminal-green">"Your Role"</span>
<span className="text-terminal-green">"Your Location"</span>
```

### 2. Experience (`src/components/Experience.tsx`)
```tsx
// Line ~22-50: Update experiences array
const experiences: ExperienceItem[] = [
    {
        id: 1,
        company: 'Company Name',
        role: 'Your Role',
        period: 'Start - End',
        location: 'Location',
        description: ['Achievement 1', 'Achievement 2'],
        technologies: ['Tech1', 'Tech2', 'Tech3'],
    },
];
```

### 3. Projects (`src/components/Projects.tsx`)
```tsx
// Line ~31-100: Update projects array
const projects: Project[] = [
    {
        id: 1,
        title: 'Project Name',
        description: 'Short description',
        longDescription: 'Detailed description',
        technologies: ['Tech1', 'Tech2'],
        features: ['Feature 1', 'Feature 2'],
        liveUrl: 'https://your-project.com',
        category: 'fullstack', // 'fullstack' | 'frontend' | 'backend'
    },
];
```

### 4. Skills (`src/components/Skills.tsx`)
```tsx
// Line ~27-68: Update skill categories
const skillCategories = [
    {
        title: 'Category Name',
        icon: <IconComponent />,
        skills: [
            { name: 'Skill', level: 90 }, // level is 0-100
        ],
    },
];
```

### 5. Education (`src/components/Education.tsx`)
```tsx
// Update education array with your degrees
// Update certifications array with your certificates
```

### 6. Contact Form Setup ⚡

The contact form uses **Web3Forms** for email delivery. To set up:

1. **Get API Key**: Visit [web3forms.com](https://web3forms.com/) and create a free account
2. **Update API Key** in `src/components/Contact.tsx`:
```tsx
// Line ~84: Replace with your Web3Forms access key
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

3. **Update Contact Info** (Line ~93-136):
```tsx
// Update email
<span>your.email@example.com</span>

// Update location
<span>Your City, Country</span>

// Update social links
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
```

### 7. Colors & Theme (`tailwind.config.js`)
```js
// Customize terminal colors
colors: {
    terminal: {
        green: '#00ff41',    // Main accent color
        dark: '#0a0a0a',     // Background
        cyan: '#00d4ff',     // Secondary accent
        amber: '#ffb000',    // Warning/highlight
    },
}
```

### 8. Social Links

Update in `Hero.tsx` (Line ~200-217):
```tsx
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
```

## 📁 Project Structure

```
myportfolio/
├── public/
│   └── resume.pdf           # Your resume PDF
├── src/
│   ├── components/
│   │   ├── effects/         # Visual effects (Matrix, Glitch, etc.)
│   │   ├── layout/          # Layout components
│   │   ├── navigation/      # Terminal navigation
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.css            # Global styles
│   └── main.tsx
├── tailwind.config.js       # Theme configuration
└── package.json
```

## 🛠️ Built With

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Web3Forms** - Contact Form API

## � Responsive Breakpoints

| Breakpoint | Screen Size |
|------------|-------------|
| Mobile | < 480px |
| Tablet | < 768px |
| Desktop | > 768px |

## 🚢 Deployment

Recommended platforms:
- **Vercel** (recommended for Vite apps)
- **Netlify**
- **GitHub Pages**

```bash
# Build and deploy to Vercel
npm run build
vercel --prod
```

## 📝 License

MIT License - feel free to use for your own portfolio!

## 👨‍💻 Author

**Osama Islam**
- Portfolio: [osamaislam.vercel.app](https://osamaislam.vercel.app)
- GitHub: [@Osamaislam1](https://github.com/Osamaislam1)
- LinkedIn: [osama-islam](https://linkedin.com/in/osama-islam)

---

⭐ Star this repo if you found it helpful!
