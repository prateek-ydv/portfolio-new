# Prateek Yadav - Portfolio

A stunning, production-grade personal portfolio for a DevSecOps engineer at Coralogix who leverages Claude and Cursor for AI-augmented development.

## Design

**Aesthetic**: Dark terminal-hacker meets refined engineering portfolio. Like a SOC dashboard crossed with a premium dev portfolio.

- **Background**: Deep dark (#080c0f) with subtle blue tint
- **Primary Accent**: Neon green (#39ff14) — terminal green
- **Secondary Accent**: Cyan (#00d4ff) — links and highlights
- **Surface Cards**: GitHub dark-style (#0d1117)
- **Typography**: JetBrains Mono (display) + IBM Plex Sans (body)

## Features

- **Custom Crosshair Cursor**: Glows green on hover
- **Terminal Prompt Animation**: Character-by-character name reveal
- **Typewriter Effect**: Cycling role titles
- **Animated Terminal Window**: Fake security commands loop
- **Scroll Animations**: Framer Motion fade-ups with stagger
- **Timeline Layout**: Experience section with accent borders
- **Placeholder Projects**: Ready for future additions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: JetBrains Mono, IBM Plex Sans

## Sections

1. **Hero** - Terminal prompt (`root@prateek:~$ whoami`), name reveal, typewriter roles
2. **About** - Bio + animated terminal window showing security commands
3. **Experience** - Timeline layout with Coralogix roles (SOC Ops → DevOps)
4. **AI Workflow** - "How I Work" cards (Claude, Cursor, Automations)
5. **Skills** - Grouped skill panels (Security, Cloud, Languages, etc.)
6. **Projects** - Placeholder cards with "Coming Soon" overlay
7. **Education** - Degree + certifications
8. **Contact** - Minimal centered CTA

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Data Files

All content is driven from dedicated data files for easy updates:

```
src/lib/
├── personal.ts    # Name, email, github, linkedin, bio, roles
├── experience.ts  # Companies, roles, bullets, dates
├── skills.ts      # Skill groups and tags
├── projects.ts    # Projects array (placeholder for now)
└── education.ts   # Degrees and certifications
```

### Updating Content

**Personal Info** (`lib/personal.ts`):
```typescript
export const personal = {
  name: "Your Name",
  email: "your@email.com",
  github: "https://github.com/your-username",
  // ...
};
```

**Experience** (`lib/experience.ts`):
```typescript
export const experience = [
  {
    company: "Company Name",
    roles: [
      {
        title: "Role Title",
        period: "Start – End",
        bullets: ["Achievement 1", "Achievement 2"],
      },
    ],
  },
];
```

**Projects** (`lib/projects.ts`):
```typescript
export const projects = [
  {
    id: "1",
    title: "Project Name",
    description: "Description here",
    techStack: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
    status: "live", // or "coming-soon"
  },
];
```

## File Structure

```
src/
├── app/
│   ├── globals.css    # Design system, animations
│   ├── layout.tsx     # Fonts, metadata, cursor
│   └── page.tsx       # Page assembly
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── AIWorkflow.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   └── TerminalWindow.tsx
└── lib/
    ├── personal.ts
    ├── experience.ts
    ├── skills.ts
    ├── projects.ts
    └── education.ts
```

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy via Vercel dashboard or CLI
```

## Contact

- **Email**: yprateek181@gmail.com
- **GitHub**: [prateek-ydv](https://github.com/prateek-ydv)
- **LinkedIn**: [prateek-yadav4221](https://linkedin.com/in/prateek-yadav4221)

---

Built with Next.js, Tailwind CSS, and Framer Motion.
Powered by Claude + Cursor.
