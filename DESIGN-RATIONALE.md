# ShrotiHost Website Redesign — Design Rationale

## 1. Project Objective

The objective of this redesign was to create a modern, professional, and responsive web experience for ShrotiHost.

The design focuses on making hosting products easier to discover, comparing plans more clearly, and providing straightforward navigation from product information to the existing purchase portal.

## 2. Visual Direction

The website uses a dark technology-inspired visual direction.

### Colour palette

- Deep navy: Primary page background
- Dark blue: Cards, navigation, and secondary surfaces
- Bright blue: Primary actions and interactive elements
- Violet: Secondary accents and gradients
- Cyan: Highlights and visual contrast
- White and muted grey: Typography and supporting information

The palette establishes a consistent identity across the website while maintaining contrast between content sections.

## 3. Typography and Layout

The layout uses clear heading hierarchies, readable body text, consistent spacing, and structured content sections.

Product information is organized into cards and comparison tables to help visitors understand differences between hosting plans.

The layout also uses reusable components to maintain consistency across pages.

## 4. Information Architecture

The website groups content into four main navigation areas:

- Hosting
- Domains
- Services
- Company

Hosting products have dedicated pages so visitors can explore each category before proceeding to the purchase portal.

Company information, contact details, blog content, and legal policies are organized into separate routes.

## 5. Hosting Product Experience

Dedicated product pages present hosting plans, pricing, and available specifications.

Plan cards provide a consistent structure for comparing products.

Purchase actions direct users to the existing ShrotiHost client portal, preserving the external ordering workflow rather than attempting to recreate payment or account-management functionality.

## 6. Responsive Design

The website uses responsive layouts intended to adapt to mobile, tablet, and desktop screens.

The responsive approach includes:

- Flexible content containers
- Responsive grid layouts
- Mobile navigation
- Adaptable hosting plan cards
- Readable spacing and typography across screen sizes

A 390px mobile viewport was manually checked during testing.

## 7. Accessibility Considerations

The implementation considers:

- Semantic page structure
- Descriptive navigation labels
- Keyboard-accessible interactive elements
- Visible focus states
- Readable text contrast
- Accessible labels for form controls
- Responsive content presentation

These are implementation considerations; a complete accessibility audit has not yet been performed.

## 8. SEO Considerations

The project includes:

- Route-specific page structure
- Sitemap generation
- Robots.txt generation
- Search-engine crawling rules
- Production deployment URLs in the sitemap and robots configuration

## 9. Trust and Content Accuracy

The redesign avoids presenting unverified customer testimonials, customer logos, certifications, or performance guarantees as established facts.

The portfolio and status pages are presented according to their actual functionality and content.

The contact form is a frontend demonstration and is not represented as a fully integrated submission system.

## 10. Technology Choices

- **Next.js:** Routing, page rendering, and production optimization.
- **React:** Component-based interface development.
- **TypeScript:** Type checking and maintainable code.
- **Tailwind CSS:** Consistent styling and responsive layouts.
- **Lucide React:** Interface icons.
- **Vercel:** Production deployment and hosting.

## 11. Conclusion

The redesign brings the ShrotiHost website into a consistent visual system, improves product discoverability, organizes the hosting catalogue, and provides a responsive foundation for future enhancements.

The implementation retains the existing external purchase workflow while improving the experience leading up to it.