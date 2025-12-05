# Implementation Plan

- [x] 1. Set up luxury design system and remove restaurant content
  - Configure Tailwind with custom luxury color palette (navy, gold, cream)
  - Add premium Google Fonts (Playfair Display for headings, Inter for body)
  - Remove all restaurant references from navigation, content, and components
  - Update globals.css with luxury design tokens
  - _Requirements: 1.1, 1.3, 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 2. Revamp navigation and layout components
  - Create new luxury navigation component with sticky header
  - Update layout.js to remove restaurant link and add luxury styling
  - Implement mobile hamburger menu with slide-out drawer
  - Add "Book Now" CTA button to navigation
  - Ensure navigation shows only: Home, Rooms, Banquet, Contact
  - _Requirements: 4.2, 5.4, 9.1_

- [ ]* 2.1 Write property test for navigation consistency
  - **Property 6: Navigation consistency**
  - **Validates: Requirements 4.2**

- [x] 3. Redesign homepage with luxury aesthetic
  - Create hero section component with full-viewport height and elegant typography
  - Remove restaurant promotional content and Royal Touch section
  - Update welcome section with luxury design and better imagery
  - Add elegant rooms preview section with CTA to rooms page
  - Add banquet preview section with CTA to banquet page
  - Redesign amenities section (remove "Fine Dine Restaurant")
  - Update reviews/feedback section with luxury styling
  - Ensure all contact CTAs are prominent and styled
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 4.1, 4.3, 4.4, 9.1, 9.2, 9.3_

- [ ]* 3.1 Write property test for luxury design consistency
  - **Property 1: Luxury design consistency across pages**
  - **Validates: Requirements 1.1, 1.3**

- [ ]* 3.2 Write property test for restaurant content exclusion
  - **Property 2: Restaurant content exclusion**
  - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

- [ ]* 3.3 Write property test for contact information presence
  - **Property 4: Contact information presence**
  - **Validates: Requirements 9.1, 9.3**

- [x] 4. Revamp rooms page with elegant gallery
  - Redesign hotel-malda-wb/page.js with luxury aesthetic
  - Create room card components with high-quality image galleries
  - Organize rooms by type (Economy, Deluxe, Suite) with clear hierarchy
  - Add amenities list with elegant icons for each room type
  - Implement image gallery with hover effects or lightbox
  - Ensure mobile-optimized layout for room cards
  - Add prominent booking CTAs with phone and WhatsApp
  - _Requirements: 1.1, 2.1, 2.2, 2.3, 2.4, 2.5, 5.1, 5.2, 9.1, 9.2, 9.3_

- [ ]* 4.1 Write property test for image optimization
  - **Property 5: Image optimization**
  - **Validates: Requirements 8.1**

- [x] 5. Revamp banquet page with showcase design
  - Redesign banquet-malda-wb/page.js with luxury aesthetic
  - Create banquet showcase component with professional image gallery
  - Highlight capacity (200 guests) and key features prominently
  - Add event types section (weddings, corporate, birthdays) with elegant badges
  - Remove restaurant references and links
  - Implement mobile-friendly layout
  - Add multiple booking CTAs throughout the page
  - _Requirements: 1.1, 3.1, 3.2, 3.3, 3.4, 3.5, 4.3, 5.1, 9.1, 9.4_

- [x] 6. Update contact page with luxury design
  - Redesign contact/page.js with elegant layout
  - Create contact cards for phone, WhatsApp, and address
  - Add map integration or prominent map link
  - Ensure click-to-call and click-to-WhatsApp functionality
  - Style with luxury design system
  - Optimize for mobile devices
  - _Requirements: 1.1, 5.1, 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 7. Implement mobile responsiveness across all pages
  - Test and optimize all pages for mobile viewports (320px-768px)
  - Ensure touch targets are minimum 44x44 pixels
  - Implement responsive images with appropriate sizes
  - Test navigation on mobile devices
  - Verify tablet layouts (768px-1024px)
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ]* 7.1 Write property test for mobile responsiveness
  - **Property 3: Mobile responsiveness**
  - **Validates: Requirements 5.2**

- [x] 8. Optimize performance and images
  - Ensure all images use Next.js Image component with proper attributes
  - Implement lazy loading for below-the-fold images
  - Optimize image sizes and formats (WebP where possible)
  - Add loading states for images
  - Test page load times and optimize as needed
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 9. Final review and polish
  - Review all pages for luxury aesthetic consistency
  - Verify no restaurant content appears anywhere
  - Test all contact links (phone, WhatsApp, map)
  - Check responsive behavior on multiple devices
  - Validate SEO elements (alt tags, meta descriptions)
  - Test navigation flow across all pages
  - _Requirements: All_

- [ ]* 10. Optional: Implement Google Reviews integration
  - Set up Google Places API credentials
  - Create API route to fetch reviews from Google Business
  - Implement review caching mechanism
  - Create sentiment analysis logic
  - Build reviews display component with charts/graphs
  - Add error handling and fallback for API failures
  - Test with real Google Business data
  - _Requirements: 6.5, 7.1, 7.2, 7.3, 7.4, 7.5_
