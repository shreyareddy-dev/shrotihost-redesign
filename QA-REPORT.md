# ShrotiHost Website Redesign — QA Report

## Project Information

- **Project:** ShrotiHost Website Redesign
- **Production URL:** https://shrotihost-redesign.vercel.app
- **Repository:** https://github.com/shreyareddy-dev/shrotihost-redesign
- **Date:** November 12, 2026

## 1. Production Build

Command: `npm run build`

| Test | Result |
|---|---|
| Next.js production compilation | PASS |
| TypeScript validation | PASS |
| Static page generation | PASS |
| 25 generated routes | PASS |
| Sitemap generation | PASS |
| Robots.txt generation | PASS |

The production build completed without reported errors.

## 2. Route Coverage

The following 20 main website routes are included in the sitemap:

- `/`
- `/about`
- `/contact`
- `/careers`
- `/portfolio`
- `/services`
- `/domains`
- `/blog`
- `/offers`
- `/status`
- `/hosting/shared`
- `/hosting/wordpress`
- `/hosting/unlimited`
- `/hosting/reseller`
- `/hosting/master-reseller`
- `/hosting/vps`
- `/terms`
- `/privacy`
- `/refund-policy`
- `/acceptable-use`

The not-found route is also generated.

## 3. Hosting Purchase Flow Tests

All six hosting purchase categories were manually tested.

| Hosting category | Result |
|---|---|
| Shared Hosting | PASS |
| WordPress Hosting | PASS |
| Unlimited Hosting | PASS |
| Reseller Hosting | PASS |
| Master Reseller Hosting | PASS |
| VPS Hosting | PASS |

The selected hosting plans were retained through the domain-selection and subsequent ordering steps in the tested flows.

## 4. Responsive Testing

| Viewport | Result |
|---|---|
| 390px mobile | PASS |
| 320px mobile | Not verified |
| 768px tablet | Not verified |
| 1024px | Not verified |
| 1280px desktop | Not verified |
| 1440px desktop | Not verified |

## 5. Browser Checks

- Browser console checked; no red errors were observed during the reported check.
- Main page navigation manually checked.
- Hosting navigation manually checked.
- Hosting purchase navigation manually checked.

## 6. SEO Verification

| Check | Result |
|---|---|
| Production sitemap accessible | PASS |
| 20 URLs listed | PASS |
| URLs use Vercel production domain | PASS |
| Robots.txt accessible | PASS |
| Crawling allowed | PASS |
| Sitemap reference present | PASS |

Verified URLs:

- https://shrotihost-redesign.vercel.app/sitemap.xml
- https://shrotihost-redesign.vercel.app/robots.txt

## 7. Deployment

- **Platform:** Vercel
- **Repository:** GitHub
- **Branch:** master
- **Production URL:** https://shrotihost-redesign.vercel.app

## 8. Known Limitations

- The contact form is a frontend demonstration and does not independently transmit or store submissions.
- The status page is informational and is not connected to live infrastructure monitoring.
- Hosting purchases and account operations are handled by the external client portal.

## 9. Conclusion

The production build completed successfully. The main website routes, sitemap, and robots.txt were verified. All six hosting purchase flows were manually tested, and the 390px mobile viewport was checked.

Additional responsive viewport testing and a comprehensive accessibility audit remain outstanding.