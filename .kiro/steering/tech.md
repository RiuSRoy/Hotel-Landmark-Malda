# Technology Stack

## Framework & Core
- **Next.js 13.1.6** with App Router (app directory structure)
- **React 18.2.0** for UI components
- **Node.js** runtime

## Styling & UI
- **Tailwind CSS 3.2.4** for utility-first styling
- **Custom luxury design system** with brand colors (navy, gold, cream, charcoal)
- **Google Fonts**: Playfair Display (headings), Inter (body text)
- **FontAwesome** for icons
- **React Bootstrap** and **Flowbite React** for additional components

## Analytics & Tracking
- **React GA4** for Google Analytics
- **Facebook Pixel** integration (via custom component)

## Image Optimization
- **Next.js Image** component with Sharp for optimization

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint checks
```

## Environment
- Uses `.env` file for environment variables
- ESLint configured with `next/core-web-vitals` preset
