# ShrotiHost Website Redesign

A responsive, multi-page website redesign for ShrotiHost, focused on presenting web hosting products, domain services, and company information through a modern interface.

**Live Website:** https://shrotihost-redesign.vercel.app  
**GitHub Repository:** https://github.com/shreyareddy-dev/shrotihost-redesign

## Project Overview

This project redesigns the ShrotiHost website with a consistent visual identity, improved navigation, responsive layouts, and clearer presentation of hosting plans and services.

The website includes product pages, company information, contact details, domain services, blog and policy pages, and links to the external ShrotiHost client portal for hosting purchases.

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Vercel (deployment)

## Features

- Responsive layouts for desktop, tablet, and mobile screens
- Shared navigation and footer across website pages
- Hosting product pages with plan comparisons
- Shared, WordPress, unlimited, reseller, master reseller, and VPS hosting sections
- Domain and service information pages
- Contact page with contact options
- Blog, careers, portfolio, and company information pages
- Legal and policy pages
- External purchase links to the ShrotiHost client portal
- SEO metadata, sitemap, and robots.txt
- Custom not-found page

## Website Routes

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

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/shreyareddy-dev/shrotihost-redesign.git
```

Navigate to the project directory:

```bash
cd shrotihost-redesign
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Deployment

The website is deployed using Vercel and connected to the GitHub repository for deployment on updates to the production branch.

**Production URL:** https://shrotihost-redesign.vercel.app

## SEO

The project includes:

- Sitemap: `/sitemap.xml`
- Robots file: `/robots.txt`
- Search-engine crawling rules
- Sitemap references using the deployed Vercel URL

## Purchase Flow

Hosting plan purchase buttons link to the corresponding ShrotiHost client portal pages. The external portal handles the subsequent domain selection and ordering process.

## Notes and Limitations

- The contact form is a frontend demonstration and does not independently transmit or store submissions.
- The status page is an informational interface, not a live infrastructure monitoring integration.
- Portfolio content should be understood according to the examples and service descriptions presented on the website, not as independently verified customer case studies.
- Hosting purchases and account operations are handled by the external client portal.

## Author

**Shreya K Reddy**

GitHub: https://github.com/shreyareddy-dev

---

*Developed as a website redesign assessment project.*