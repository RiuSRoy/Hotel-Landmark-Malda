# Design Document

## Overview

The Hotel Landmark website revamp transforms the existing Next.js application into a modern luxury hotel website. The redesign focuses on two core business areas: rooms and banquet hall, while completely removing restaurant content. The design emphasizes visual elegance, user experience, and mobile responsiveness.

## Architecture

### Technology Stack
- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom luxury design tokens
- **Fonts**: Premium Google Fonts (Playfair Display, Cormorant Garamond, or similar serif for headers; Inter or Montserrat for body)
- **Icons**: FontAwesome (existing) or Lucide React
- **Images**: Next.js Image component with optimization
- **Optional**: Google Places API for reviews integration

### Design System

**Color Palette (Luxury Hotel Theme)**
- Primary: Deep navy (#1a2332) or charcoal (#2d3436)
- Secondary: Gold/brass accent (#d4af37 or #c9a961)
- Background: Cream/off-white (#faf9f6)
- Text: Dark gray (#333333)
- Accent: Muted rose or burgundy (#8b4f5c)

**Typography**
- Headings: Serif font (Playfair Display, Cormorant Garamond) - elegant, luxury feel
- Body: Sans-serif (Inter, Montserrat) - clean, readable
- Font sizes: Responsive scale using Tailwind

**Spacing & Layout**
- Generous whitespace for luxury feel
- Max-width containers (1280px-1400px)
- Grid-based layouts for rooms and banquet galleries
- Card-based components with subtle shadows

## Components and Interfaces

### Core Components

#### 1. Navigation Component
```typescript
interface NavigationProps {
  currentPath: string;
}
```
- Sticky header with transparent-to-solid transition on scroll
- Logo on left, navigation links center/right
- Mobile: Hamburger menu with slide-out drawer
- Links: Home, Rooms, Banquet, Contact
- CTA button: "Book Now" with phone/WhatsApp

#### 2. Hero Section Component
```typescript
interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
```
- Full-viewport height hero with parallax effect
- Overlay gradient for text readability
- Large elegant typography
- Prominent CTA button

#### 3. Room Card Component
```typescript
interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  images: string[];
  amenities: string[];
  price?: string;
}
```
- Image gallery with hover effects
- Room name and description
- Amenities list with icons
- "View Details" or "Book Now" CTA

#### 4. Banquet Showcase Component
```typescript
interface BanquetShowcaseProps {
  images: string[];
  capacity: number;
  features: string[];
  eventTypes: string[];
}
```
- Large image gallery/carousel
- Key statistics (capacity, area)
- Feature highlights
- Event type badges

#### 5. Reviews Section Component (Optional)
```typescript
interface ReviewsSectionProps {
  reviews: Review[];
  sentimentData?: SentimentAnalysis;
  showAnalytics: boolean;
}

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface SentimentAnalysis {
  positive: number;
  neutral: number;
  negative: number;
  averageRating: number;
}
```
- Review cards with star ratings
- Optional: Sentiment chart (pie/bar chart)
- Link to Google Business profile

#### 6. Contact Section Component
```typescript
interface ContactSectionProps {
  phone: string;
  whatsapp: string;
  address: string;
  mapLink: string;
}
```
- Contact cards with icons
- Click-to-call/WhatsApp functionality
- Embedded map or map link

## Data Models

### Room Type
```typescript
type Room = {
  id: string;
  name: string;
  description: string;
  images: string[];
  amenities: string[];
  price?: string;
  capacity: number;
};
```

### Banquet Information
```typescript
type Banquet = {
  name: string;
  description: string;
  images: string[];
  capacity: number;
  features: string[];
  eventTypes: string[];
};
```

### Contact Information
```typescript
type ContactInfo = {
  phone: string;
  whatsapp: string;
  address: string;
  mapLink: string;
  googleBusinessUrl: string;
};
```

### Google Review (Optional)
```typescript
type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Luxury design consistency across pages
*For any* page in the Website, the rendered HTML should contain the luxury design system color classes and typography classes defined in the design system
**Validates: Requirements 1.1, 1.3**

### Property 2: Restaurant content exclusion
*For any* page in the Website, the rendered HTML should NOT contain references to "restaurant", "Royal Touch", or "fine dine" in navigation, content sections, or amenity lists
**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**

### Property 3: Mobile responsiveness
*For any* page component, when rendered at mobile viewport widths (320px-768px), all interactive elements should have touch targets of at least 44x44 pixels
**Validates: Requirements 5.2**

### Property 4: Contact information presence
*For any* key page (home, rooms, banquet), the rendered HTML should contain phone number and WhatsApp contact links
**Validates: Requirements 9.1, 9.3**

### Property 5: Image optimization
*For any* image displayed on the Website, it should use Next.js Image component with appropriate width, height, and alt attributes
**Validates: Requirements 8.1**

### Property 6: Navigation consistency
*For any* page, the navigation component should contain exactly these links: Home, Rooms, Banquet, Contact (and NOT Restaurant)
**Validates: Requirements 4.2**

## Error Handling

### Image Loading Failures
- Provide fallback placeholder images
- Use Next.js Image component error handling
- Log errors for monitoring

### API Failures (Google Reviews - Optional)
- Graceful degradation: show static testimonials if API fails
- Implement retry logic with exponential backoff
- Cache successful responses
- Display user-friendly error messages

### Navigation Errors
- 404 page with luxury design
- Redirect broken links to homepage
- Maintain navigation accessibility

### Mobile Rendering Issues
- Progressive enhancement approach
- Fallback layouts for unsupported features
- Test across major mobile browsers

## Testing Strategy

### Unit Testing
- Component rendering tests for each major component
- Props validation tests
- Conditional rendering logic (e.g., optional Google Reviews)
- Link and navigation functionality
- Contact button click handlers

### Property-Based Testing
We will use **fast-check** (for JavaScript/TypeScript) as our property-based testing library.

Each property-based test will:
- Run a minimum of 100 iterations
- Be tagged with the format: **Feature: hotel-luxury-revamp, Property {number}: {property_text}**
- Reference the corresponding correctness property from this design document

Property tests will verify:
- Design system consistency across randomly generated page states
- Restaurant content exclusion across all page variations
- Mobile responsiveness with various viewport sizes
- Contact information presence validation
- Image component usage verification

### Integration Testing
- Full page rendering tests
- Navigation flow tests
- Mobile responsive behavior
- Form submissions (contact forms)

### Visual Regression Testing (Optional)
- Screenshot comparison for design consistency
- Cross-browser compatibility checks

### Manual Testing Checklist
- Test on real mobile devices (iOS, Android)
- Verify luxury aesthetic meets expectations
- Check all images load correctly
- Validate contact links work (call, WhatsApp)
- Test navigation on all screen sizes
- Verify no restaurant content appears anywhere

## Implementation Notes

### Phase 1: Design System Setup
- Configure Tailwind with custom luxury theme
- Set up custom fonts
- Create base layout component
- Remove all restaurant references

### Phase 2: Core Pages Revamp
- Homepage redesign with hero section
- Rooms page with elegant gallery
- Banquet page showcase
- Contact page enhancement

### Phase 3: Component Development
- Navigation component
- Room cards
- Banquet showcase
- Reviews section (static first)
- Contact section

### Phase 4: Mobile Optimization
- Responsive layouts
- Touch-friendly interactions
- Mobile navigation
- Performance optimization

### Phase 5: Optional Google Reviews Integration
- Set up Google Places API
- Implement review fetching
- Add sentiment analysis
- Create visualization components
- Implement caching strategy

### SEO Considerations
- Maintain existing SEO structure (keywords in URLs, alt tags)
- Update meta descriptions to reflect new focus
- Ensure semantic HTML
- Optimize Core Web Vitals
- Keep internal linking structure
