# ShrotiHost Website Redesign — QA Report

## 1. Project Information

| Detail | Information |
|---|---|
| Project | ShrotiHost Website Redesign |
| Production URL | https://shrotihost-redesign.vercel.app |
| GitHub Repository | https://github.com/shreyareddy-dev/shrotihost-redesign |
| Deployment Platform | Vercel |
| Production Branch | master |
| Testing Date | November 12, 2026 |

## 2. Production Build Verification

**Command:** `npm run build`

| Test | Result |
|---|---|
| Next.js production compilation | PASS |
| TypeScript validation | PASS |
| Static page generation | PASS |
| Static routes generated | 25 |
| Sitemap generation | PASS |
| Robots.txt generation | PASS |

The production build completed successfully without reported compilation or TypeScript errors.

## 3. Website Route Coverage

The following 20 primary website routes are included in the sitemap:

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Contact | `/contact` |
| Careers | `/careers` |
| Portfolio | `/portfolio` |
| Services | `/services` |
| Domains | `/domains` |
| Blog | `/blog` |
| Offers | `/offers` |
| Status | `/status` |
| Shared Hosting | `/hosting/shared` |
| WordPress Hosting | `/hosting/wordpress` |
| Unlimited Hosting | `/hosting/unlimited` |
| Reseller Hosting | `/hosting/reseller` |
| Master Reseller Hosting | `/hosting/master-reseller` |
| VPS Hosting | `/hosting/vps` |
| Terms | `/terms` |
| Privacy Policy | `/privacy` |
| Refund Policy | `/refund-policy` |
| Acceptable Use Policy | `/acceptable-use` |

The Next.js production build also generated the not-found route and SEO endpoints.

## 4. Hosting Purchase Flow Testing

All six hosting purchase categories were manually tested through the external client portal.

| Hosting Category | Result |
|---|---|
| Shared Hosting | PASS |
| WordPress Hosting | PASS |
| Unlimited Hosting | PASS |
| Reseller Hosting | PASS |
| Master Reseller Hosting | PASS |
| VPS Hosting | PASS |

The tested flows reached the external client portal and retained the selected hosting plan during domain selection and subsequent ordering steps.

## 5. Responsive Testing

| Viewport | Result |
|---|---|
| 390px mobile | PASS |
| 320px mobile | Pending verification |
| 768px tablet | Pending verification |
| 1024px | Pending verification |
| 1280px desktop | Pending verification |
| 1440px desktop | Pending verification |

The website was also inspected using Chrome DevTools device emulation. Representative tablet screenshots are included in the `assessment-screenshots` directory.

## 6. Browser Checks

| Check | Result |
|---|---|
| Browser console | No red errors observed during the reported check |
| Main page navigation | Manually checked |
| Hosting navigation | Manually checked |
| Hosting purchase navigation | Manually checked |

## 7. Lighthouse Audit

**Audit configuration:**
- Tool: Chrome Lighthouse 13.5.0
- Mode: Navigation
- Device: Emulated Moto G Power
- Network: Slow 4G throttling
- Audit date shown by Lighthouse: November 1, 2026

### Lighthouse Scores

Three pages were audited independently under the recorded mobile configuration.

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Homepage | 98 | 94 | 100 | 100 |
| Shared Hosting | 84 | 94 | 100 | 100 |
| Services | 99 | 96 | 100 | 100 |

Scores are page-specific and should not be interpreted as site-wide scores.

### Homepage Performance Metrics

| Metric | Result |
|---|---:|
| First Contentful Paint (FCP) | 1.0 s |
| Largest Contentful Paint (LCP) | 1.7 s |
| Total Blocking Time (TBT) | 140 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index (SI) | 2.6 s |

### Lighthouse Findings

**Accessibility opportunities identified in the homepage audit:**
- Some foreground and background color combinations have insufficient contrast.
- The original homepage audit reported a missing main landmark. A main landmark was subsequently added to the homepage.
- Additional manual accessibility checks are recommended.

**Performance insights from the homepage audit:**
- Estimated legacy JavaScript savings: 14 KiB.
- Estimated unused JavaScript savings: 30 KiB.
- Four long main-thread tasks were identified.

These findings are recorded for future optimization.

### Audit Evidence

The following Lighthouse screenshots are included in the `assessment-screenshots` directory:
- `lighthouse-services.png`
- `lighthouse-shared-hosting.png`

The homepage Lighthouse results and performance metrics are documented above.

## 8. SEO Verification

| Check | Result |
|---|---|
| Production sitemap accessible | PASS |
| Sitemap contains 20 primary website URLs | PASS |
| Sitemap uses deployed Vercel URL | PASS |
| Robots.txt accessible | PASS |
| Crawling allowed | PASS |
| Sitemap reference in robots.txt | PASS |

Verified endpoints:

- https://shrotihost-redesign.vercel.app/sitemap.xml
- https://shrotihost-redesign.vercel.app/robots.txt

The sitemap and robots.txt were manually opened and verified in the browser.

## 9. Deployment Verification

| Detail | Information |
|---|---|
| Platform | Vercel |
| Repository | GitHub |
| Branch | master |
| Production URL | https://shrotihost-redesign.vercel.app |
| Latest documented deployment | Ready |

GitHub is connected to Vercel for production deployments following updates to the master branch.

## 10. Known Limitations

- The contact form is a frontend demonstration and does not independently transmit or store submissions.
- The status page is informational and is not connected to live infrastructure monitoring.
- Hosting purchases and account operations are handled by the external ShrotiHost client portal.
- A complete manual accessibility audit has not yet been performed.
- Responsive verification at all specified viewport sizes remains pending.

## 11. Conclusion

The ShrotiHost redesign successfully completed production compilation, TypeScript validation, and static page generation.

All six hosting purchase flows were manually tested. The production sitemap and robots.txt were verified.

Three pages were audited using Lighthouse under the recorded mobile configuration. The homepage achieved scores of 98 for Performance, 94 for Accessibility, 100 for Best Practices, and 100 for SEO. Shared Hosting achieved 84, 94, 100, and 100 respectively, while Services achieved 99, 96, 100, and 100.

Further improvements can focus on accessibility contrast, additional manual accessibility checks, and responsive verification at the remaining specified viewport sizes.