# 🎬 Virendra Parmar — Cinematic Portfolio

A stunning Next.js portfolio website for **Virendra Parmar**, cinematographer and video editor based in Jabalpur.

## ✨ Features

- **Full Cinematic Design** — Dark gold theme inspired by luxury cinema
- **Advanced Parallax** — Scroll-driven parallax effects on hero, images & backgrounds
- **Framer Motion Animations** — Page reveals, stagger effects, smooth transitions
- **Film Grain Overlay** — Authentic cinema texture effect
- **Custom Cursor** — Gold dot cursor with smooth follower animation
- **Film Reel Marquee** — Scrolling marquee with film sprocket holes
- **Glitch Text Effect** — Cinematic glitch on headings
- **Animated Counters** — Stats that count up on scroll
- **Project Filter Grid** — Filterable portfolio with animated transitions
- **Testimonial Carousel** — Auto-playing client testimonials
- **Scroll Progress Bar** — Gold progress indicator in navbar
- **TypeWriter Animation** — Dynamic text in hero section
- **Mobile-Responsive** — Full screen mobile menu with clip-path animation
- **Contact Form** — Full contact form with service selector
- **Instagram Reel Grid** — Links directly to Instagram portfolio

## 🚀 Quick Start

```bash
# 1. Navigate to project folder
cd virendra-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:3000
```

## 📁 Folder Structure

```
virendra-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with fonts & metadata
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About page
│   ├── services/page.tsx       # Services page
│   ├── work/page.tsx           # Portfolio / Reels page
│   └── contact/page.tsx        # Contact form page
├── components/
│   ├── Navbar.tsx              # Animated navbar with mobile menu
│   ├── Footer.tsx              # Film strip footer
│   ├── CustomCursor.tsx        # Gold custom cursor
│   ├── animations/
│   │   └── AnimatedSection.tsx # Reusable scroll animations
│   └── sections/
│       ├── HeroSection.tsx     # Hero with parallax & typewriter
│       ├── AboutSection.tsx    # About with counters & tools
│       ├── ServicesSection.tsx # Services grid with hover effects
│       ├── WorkSection.tsx     # Portfolio with category filter
│       ├── TestimonialsSection.tsx  # Auto-playing testimonials
│       ├── CTASection.tsx      # Call-to-action with parallax
│       └── FilmReelMarquee.tsx # Scrolling marquee strip
├── hooks/
│   └── index.ts               # Custom React hooks
├── lib/
│   ├── data.ts                # All content data
│   └── utils.ts               # Utility functions
├── styles/
│   └── globals.css            # Global styles & animations
├── types/
│   └── index.ts               # TypeScript types
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Color Palette

| Token | Color | Usage |
|-------|-------|-------|
| `cinema-black` | `#080808` | Main background |
| `cinema-dark` | `#0D0D0D` | Section backgrounds |
| `cinema-card` | `#111111` | Card backgrounds |
| `cinema-gold` | `#C9A84C` | Primary accent |
| `cinema-gold-light` | `#E8C96A` | Shimmer highlights |
| `cinema-white` | `#F5F0E8` | Body text |

## 📱 Contact Info

- **Phone:** +91 87178 18475
- **Email:** virendarparmar8475@gmail.com
- **Instagram:** [@virendra421_](https://www.instagram.com/virendra421_/)

## 🛠️ Customization

### Adding Real Projects
Edit `/lib/data.ts` — update the `projects` array with real thumbnails and video URLs.

### Embedding Instagram Reels
In `/app/work/page.tsx`, replace the placeholder grid with Instagram embeds or use the Instagram Basic API.

### Replacing Photos
Replace Unsplash URLs in `data.ts` and component files with actual photos of Virendra.

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | Page animations & parallax |
| `react-type-animation` | Typewriter text effect |
| `react-intersection-observer` | Scroll-triggered animations |
| `lenis` | Smooth scrolling |
| `react-icons` | Icon library |

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

Built with ❤️ for Virendra Parmar — *Where Cinema Meets Creativity*
