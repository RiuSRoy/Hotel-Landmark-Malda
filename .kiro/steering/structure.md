# Project Structure

## Directory Organization

```
/app                    # Next.js 13 App Router pages
  /banquet-malda-wb     # Banquet hall page
  /hotel-malda-wb       # Hotel rooms page
  /contact              # Contact page
  /privacy-policy-royal-touch  # Privacy policy
  layout.js             # Root layout with navigation
  page.js               # Homepage
  footer.js             # Footer component
  globals.css           # Global styles & Tailwind

/components             # Reusable React components
  FacebookPixel.js      # Analytics component

/pages                  # Legacy Pages Router (minimal usage)
  /api                  # API routes
  _app.jsx              # Custom App component

/public                 # Static assets
  /rooms                # Room images
  /site-photo           # Banquet & restaurant photos
  *.pdf                 # Menu PDFs
  *.png, *.jpeg         # Logos and images

analytics.js            # Google Analytics setup
```

## Key Conventions

### Routing
- Uses Next.js 13 App Router (app directory)
- SEO-optimized URLs follow pattern: `<keyword>-<city>-<state-abbr>`
- Example: `/hotel-malda-wb`, `/banquet-malda-wb`

### Components
- Root layout includes sticky navigation and footer
- Navigation is responsive with mobile menu
- All pages wrapped in consistent layout

### Styling
- Tailwind utility classes throughout
- Custom luxury design system with reusable classes:
  - `.luxury-btn-primary`, `.luxury-btn-secondary`
  - `.luxury-card`, `.luxury-section`, `.luxury-container`
  - `.luxury-heading`, `.luxury-subheading`
- CSS variables for fonts: `--font-heading`, `--font-body`

### Images
- Use Next.js `<Image>` component for optimization
- Alt tags must include SEO keywords
- Images stored in `/public` directory

### SEO Requirements
- All alt tags include relevant keywords
- URLs follow `<keyword>-<city>-<state-abbr>` pattern
- Two internal links + one external link to Google Business Profile per page
- Metadata configured in layout.js

### Contact & Booking
- Primary phone: +91-96416-93184
- WhatsApp integration for direct messaging
- Google Business Profile: https://maps.app.goo.gl/8qn2799ytFekerMP8
