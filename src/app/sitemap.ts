
import type { MetadataRoute } from "next";

const BASE_URL = "https://shrotihost.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/careers",
    "/portfolio",
    "/services",
    "/domains",
    "/blog",
    "/offers",
    "/status",
    "/hosting/shared",
    "/hosting/wordpress",
    "/hosting/unlimited",
    "/hosting/reseller",
    "/hosting/master-reseller",
    "/hosting/vps",
    "/terms",
    "/privacy",
    "/refund-policy",
    "/acceptable-use",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
