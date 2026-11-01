# ShrotiHost Website Redesign — QA Report

**Project:** ShrotiHost Full Website Redesign  
**Repository:** https://github.com/shreyareddy-dev/shrotihost-redesign  
**Live deployment:** https://shrotihost-redesign.vercel.app  
**Deployment provider:** Vercel  
**Deployment branch:** master  
**Framework:** Next.js 16.4.6  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Icons:** Lucide React  

---

## 1. Executive Summary

The ShrotiHost public website redesign has been implemented as a multi-page Next.js application and deployed to Vercel.

The implementation covers the main public-facing website sections, including the homepage, hosting products, domains, software services, company information, blog, offers, contact and legal pages.

The project includes a shared navigation system, responsive layouts, product comparison sections, purchase links to the separate client portal, documentation, a route inventory and a QA report.

The production build completed successfully, and the live deployment is publicly accessible over HTTPS.

## 2. Build and Deployment Verification

| Check | Result |
|---|---|
| Next.js production build | PASS |
| TypeScript compilation | PASS |
| Static page generation | PASS |
| Generated static pages | 25 |
| GitHub repository | Available |
| Deployment provider | Vercel |
| Production deployment | Ready |
| Public HTTPS URL | PASS |
| Sitemap endpoint | Verified |
| Robots endpoint | Verified |

The production build completed with:

- Successful compilation.
- Successful TypeScript checks.
- Successful page-data collection.
- 25 static pages generated.
- Successful final optimization.

### Deployment details

- Repository: https://github.com/shreyareddy-dev/shrotihost-redesign
- Branch: master
- Live URL: https://shrotihost-redesign.vercel.app
- Hosting: Vercel
- Automatic deployment: Configured through GitHub integration.

## 3. Route Coverage

The route inventory is maintained separately in:

`shrotihost-route-inventory.csv`

The implemented public content routes include:

| Route | Implementation |
|---|---|
| / | Implemented |
| /about | Implemented |
| /contact | Implemented |
| /hosting/shared | Implemented |
| /hosting/wordpress | Implemented |
| /hosting/unlimited | Implemented |
| /hosting/reseller | Implemented |
| /hosting/master-reseller | Implemented |
| /hosting/vps | Implemented |
| /domains | Implemented |
| /services | Implemented |
| /blog | Implemented |
| /careers | Implemented |
| /portfolio | Implemented |
| /offers | Implemented |
| /status | Implemented |
| /terms | Implemented |
| /privacy | Implemented |
| /refund-policy | Implemented |
| /acceptable-use | Implemented |

Additional generated endpoints:

- `/_not-found`
- `/robots.txt`
- `/sitemap.xml`

The build output confirms that these routes were generated successfully.

**Scope limitation:** The inventory records the known implemented routes. A complete crawl of every original public article-detail URL and any additional linked routes has not been independently confirmed.

## 4. Functional Testing

### Hosting purchase journeys

The following six hosting purchase journeys were manually tested:

| Product | Result |
|---|---|
| Shared Hosting | PASS |
| WordPress Hosting | PASS |
| Unlimited Hosting | PASS |
| Reseller Hosting | PASS |
| Master Reseller Hosting | PASS |
| VPS Hosting | PASS |

The selected plan was retained when proceeding to domain selection and subsequent ordering steps.

The purchase actions lead to the separate ShrotiHost client portal.

### Other functionality

| Area | QA status |
|---|---|
| Shared navigation and footer | Implemented |
| Hosting plan comparisons | Implemented |
| Domain discovery interface | Implemented; demo limitations documented |
| Contact form | Frontend demo; backend submission not connected |
| Blog listing | Implemented |
| Legal page navigation | Implemented |
| Custom not-found page | Implemented |
| Informational status page | Implemented |

Domain availability, payment completion, account provisioning and support-ticket creation are not represented as confirmed live transactions.

## 5. Responsive Testing and Screenshot Evidence

Representative full-page tablet screenshots were captured for the following pages:

| Page | Screenshot |
|---|---|
| Homepage | `assessment-screenshots/homepage-tablet.png` |
| Shared Hosting | `assessment-screenshots/shared-hosting-tablet.png` |
| Domains | `assessment-screenshots/domains-tablet.png` |
| Services | `assessment-screenshots/services-tablet.png` |
| Blog | `assessment-screenshots/blog-tablet.png` |
| Terms and Conditions | `assessment-screenshots/terms-tablet.png` |

The screenshots demonstrate the tablet presentation of the main page families.

### Required viewport QA matrix

| Viewport | Status |
|---|---|
| 320px | Pending |
| 390px | Mobile screenshot captured; full route-wide verification pending |
| 768px | Representative tablet screenshots captured; exact viewport width to verify |
| 1024px | Pending |
| 1280px | Pending |
| 1440px | Pending |

A complete responsive audit across every route and all six required viewport widths has not yet been completed.

## 6. Lighthouse Audits

Lighthouse audits were performed using Chrome DevTools in mobile mode.

### Homepage

| Category | Score |
|---|---:|
| Performance | 98 |
| Accessibility | 94 |
| Best Practices | 100 |
| SEO | 100 |

Recorded metrics:

- First Contentful Paint: 1.0 seconds
- Largest Contentful Paint: 1.7 seconds
- Total Blocking Time: 140 ms
- Cumulative Layout Shift: 0
- Speed Index: 2.6 seconds

The homepage audit identified accessibility opportunities involving color contrast and a missing main landmark. A semantic main landmark was subsequently added to the homepage.

### Shared Hosting

| Category | Score |
|---|---:|
| Performance | 84 |
| Accessibility | 94 |
| Best Practices | 100 |
| SEO | 100 |

### Services

| Category | Score |
|---|---:|
| Performance | 99 |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 100 |

### Lighthouse summary

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Homepage | 98 | 94 | 100 | 100 |
| Shared Hosting | 84 | 94 | 100 | 100 |
| Services | 99 | 96 | 100 | 100 |

**Lighthouse scope:** These results apply to the three audited pages only. They should not be interpreted as scores for every route. The audit screenshots should be retained as supporting evidence.

## 7. Accessibility

Accessibility work includes:

- Semantic page structure.
- A main landmark added to the homepage.
- Responsive navigation and layout.
- Consistent visual hierarchy.
- Icon-based visual indicators.
- Accessible form and navigation patterns where implemented.

Lighthouse accessibility scores:

- Homepage: 94
- Shared Hosting: 94
- Services: 96

Further manual checks remain recommended:

- Keyboard-only navigation across all routes.
- Visible focus-state verification.
- Contrast checks across all page families.
- Form-label and validation checks.
- Reduced-motion behavior.
- Screen-reader testing.

## 8. SEO Verification

The following SEO elements were implemented and checked:

- Generated sitemap at `/sitemap.xml`.
- Generated robots rules at `/robots.txt`.
- Production deployment URL used in sitemap and robots configuration.
- Route-specific metadata implementation.
- Semantic heading structure and internal navigation.

The live robots endpoint was verified to allow crawling and reference the production sitemap.

The live sitemap was verified to contain 20 public content URLs.

Lighthouse SEO scores were 100 on the homepage, Shared Hosting and Services audits.

A complete manual metadata and canonical audit across all routes remains pending.

## 9. Content Accuracy and Commercial Integrity

Hosting plan information and purchase journeys were reviewed against the available ShrotiHost portal catalogue information.

The implementation directs users to the separate client portal for purchase and ordering.

The following limitations are documented:

- Domain availability is not represented as a confirmed live lookup.
- Contact form submission is not connected to a production backend.
- The status page is informational and does not claim live infrastructure monitoring.
- Portfolio examples should not be interpreted as verified client case studies unless independently confirmed.
- Pricing, renewal terms and legal policy wording should receive final owner verification against the current public source before production use.

## 10. Known Limitations and Outstanding QA

The following items remain outstanding or require additional verification:

1. Full route-by-route responsive checks at 320, 390, 768, 1024, 1280 and 1440px.
2. Desktop screenshots for the representative page families.
3. Keyboard-only and screen-reader accessibility walkthrough.
4. Complete internal-link and broken-asset audit across every route.
5. Full verification of original public article-detail URLs.
6. Final comparison of legal policy wording and current commercial terms against official source pages.
7. Additional Lighthouse audits beyond the three representative pages.
8. Verification of exact tablet viewport dimensions used for screenshot evidence.

These items have not been marked as passed without supporting test evidence.

## 11. AI and Development Tool Disclosure

AI assistance was used during development.

**Tool used:** ChatGPT.

AI assistance supported:

- Development planning and implementation guidance.
- Code review and debugging assistance.
- Documentation preparation.
- Accessibility and SEO review suggestions.
- QA checklist preparation.

The candidate reviewed and integrated the resulting changes and remains responsible for understanding and explaining the submitted implementation.

Chrome DevTools and Lighthouse were used for browser testing and performance, accessibility, best-practice and SEO audits.

## 12. Final Assessment

The redesigned website has been implemented, successfully built and deployed publicly.

The project includes the main public website route families, hosting purchase journeys, a documented route inventory, an information architecture note, representative tablet screenshots and Lighthouse results for three pages.

The remaining limitations and unverified checks are documented transparently above.

**Live website:** https://shrotihost-redesign.vercel.app

**GitHub repository:** https://github.com/shreyareddy-dev/shrotihost-redesign

**Deployment branch:** master

**Hosting provider:** Vercel