# ShrotiHost — Information Architecture Note

## Objective

The redesign organizes the ShrotiHost public website around the main visitor journeys: discovering hosting products, comparing plans, exploring domains and software services, learning about the company, and reaching support or legal information.

## Proposed navigation structure

- **Home** — overview of the business and primary journeys.
- **Hosting**
  - Shared Hosting
  - WordPress Hosting
  - Unlimited Hosting
  - Reseller Hosting
  - Master Reseller Hosting
  - VPS Hosting
- **Domains** — domain discovery and registration journey.
- **Services** — software and development service information.
- **Company**
  - About
  - Careers
  - Portfolio
- **Resources**
  - Blog
  - Offers
- **Support and trust**
  - Contact
  - Status
  - Terms
  - Privacy Policy
  - Refund Policy
  - Acceptable Use Policy

## Page-family approach

The site uses a shared header, footer, navigation system, typography and visual design language. Page layouts vary according to their purpose:

- **Homepage:** introduces the business and directs visitors to hosting and domain journeys.
- **Hosting product pages:** explain the product, present plan comparisons and direct visitors to the relevant purchase flow.
- **Domains:** provides a domain discovery experience and a route to the registration portal. Demo interactions must not imply live availability.
- **Services:** explains development capabilities and provides a project enquiry path.
- **Company pages:** communicate company information, careers and portfolio material.
- **Editorial:** provides a blog archive and article navigation.
- **Legal pages:** use readable long-form sections and clear headings.
- **System pages:** provide recovery navigation for missing pages and informational service-status content.

## Key UX decisions

1. Group hosting products together so visitors can compare related options.
2. Keep domain registration distinct from hosting plan selection.
3. Use consistent plan-card and comparison patterns while allowing each product page to explain its own features.
4. Keep support and legal information accessible from the shared footer.
5. Route purchase actions to the separate ShrotiHost client portal.
6. Label demo interactions honestly and avoid suggesting that a form, domain search or status display is connected to a live backend unless it actually is.

## Scope and verification notes

The implemented route inventory is recorded in `shrotihost-route-inventory.csv`. The current implementation covers the 20 known public content routes, plus the custom not-found page and the generated `robots.txt` and `sitemap.xml` endpoints.

The original assessment asks candidates to discover every public route on the live website, including article-detail URLs and additional linked pages. Any additional URLs discovered during final review should be added to the CSV. Route-level QA and responsive checks should be marked complete only after they have actually been performed.

## Next improvements

- Complete the route-by-route QA matrix at the required viewport widths.
- Verify policy wording and commercial claims against the current public source.
- Test keyboard navigation, focus visibility, contrast and form states.
- Capture representative desktop and mobile screenshots.
- Run additional Lighthouse audits on representative inner pages.
