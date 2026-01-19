# Barney Gastro

A modern, elegant, and fully responsive restaurant website built with Next.js 14.

## Features

- **Modern Design** - Premium and elegant UI with smooth animations
- **Fully Responsive** - Optimized for all screen sizes
- **Interactive Menu** - Category-based menu system with filtering
- **Reservation System** - Built-in reservation form
- **Instagram Integration** - Showcase your Instagram feed
- **Google Maps** - Embedded location map
- **SEO Optimized** - Meta tags and structured data
- **Multi-language Ready** - Turkish language support

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide Icons** - Beautiful icons
- **Swiper.js** - Touch-friendly sliders

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/umutverne/barney-gastro.git

# Navigate to project directory
cd barney-gastro

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── menu/              # Menu page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Menu.tsx           # Menu preview
│   ├── Testimonials.tsx   # Customer reviews
│   ├── Contact.tsx        # Contact form
│   ├── InstagramGallery.tsx # Instagram feed
│   ├── Navbar.tsx         # Navigation
│   └── Footer.tsx         # Footer
└── ...
```

## Deployment

Deploy easily on Vercel:

```bash
vercel --prod
```

## License

MIT
