# VJ Peinture Sàrl - Website Deployment Guide

## Project Information
- **Business**: VJ Peinture Sàrl
- **Type**: Painting & Plastering Services
- **Location**: Charmoille, Switzerland (JU-2947)
- **Primary Language**: French
- **Secondary Language**: German

## Website Features

### Core Components
- ✅ Responsive single-page website
- ✅ Dual-language support (FR/DE) with URL-based routing
- ✅ Framer Motion animations
- ✅ Professional design system (Slate Blue + Orange accent)
- ✅ Custom fonts (DM Serif Display + Inter)

### Sections
1. **Header** - Navigation with language switcher (FR/DE)
2. **Hero** - Full-screen background image with CTA buttons
3. **About** - Company information with feature highlights
4. **Services** - 6 professional services with icons
5. **Gallery** - 17 project images with slider and descriptions
6. **Hours** - Opening hours with "today" highlight
7. **Contact** - Contact info cards + embedded Google Map
8. **Footer** - Navigation and copyright

### Special Features
- DisclaimerModal on page load (session-based)
- Smooth scroll navigation
- Mobile-responsive design
- Accessibility considerations
- SEO meta tags

## Build Information
- Framework: Vite + React + TypeScript
- UI Library: shadcn/ui
- Styling: Tailwind CSS
- Animations: Framer Motion
- Build Status: ✅ Successful (no errors/warnings)

## File Structure
```
/workspace/output/vj-peinture-sarl/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hours.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── DisclaimerModal.tsx
│   ├── hooks/
│   │   └── useLanguage.tsx
│   ├── lib/
│   │   └── translations.ts (FR + DE)
│   ├── pages/
│   │   └── Index.tsx
│   └── index.css (custom design system)
├── public/images/
│   ├── hero-bg.jpg (selected hero image)
│   ├── img-1.jpg to img-17.jpg (gallery)
│   └── logo.jpg (favicon)
├── index.html (SEO meta tags)
├── tailwind.config.ts (design system)
└── dist/ (production build)
```

## Translations
All text is fully translated in both French and German:
- Navigation labels
- Hero section (title, description, CTA)
- All section headings and content
- Gallery image descriptions
- Hours information
- Contact labels
- Footer content
- Disclaimer modal

## How to Deploy

### Local Development
```bash
cd /workspace/output/vj-peinture-sarl
npm install
npm run dev
```

### Production Build
```bash
npm run build
# Output in dist/ folder
```

### URLs
- **French (Primary)**: `/` 
- **German (Secondary)**: `/de`

## Contact Information
- **Phone**: +41 79 472 91 97
- **Email**: vjpeinture25@gmail.com
- **Address**: Le Cornat 106, 2947 Charmoille, CH
- **Coordinates**: 47.421751, 7.203445

## Important Notes
1. The website includes a disclaimer modal that shows on first page load
2. Language preference is URL-based, not localStorage-based
3. All images are local (downloaded and stored in public/images/)
4. Design colors are professional slate blue with orange accents
5. Framer Motion provides smooth animations throughout
