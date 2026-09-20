import type { MetadataRoute } from "next";

// Update a route's date only after a meaningful change to its primary content,
// structured data, or links. Deployment dates are not content modification dates.
const routes = [
  { path: "", lastModified: "2026-08-27" },
  { path: "/services", lastModified: "2026-08-27" },
  { path: "/web-design", lastModified: "2026-08-17" },
  { path: "/web-design-promo", lastModified: "2026-09-18" },
  { path: "/local-seo", lastModified: "2026-09-19" },
  { path: "/geo-aeo", lastModified: "2026-08-17" },
  { path: "/paid-media", lastModified: "2026-08-17" },
  { path: "/content-marketing", lastModified: "2026-08-17" },
  { path: "/social-media", lastModified: "2026-08-17" },
  { path: "/about-us", lastModified: "2026-08-17" },
  { path: "/work", lastModified: "2026-08-17" },
  { path: "/contact", lastModified: "2026-09-19" },
  { path: "/blog", lastModified: "2026-08-27" },
  {
    path: "/blog/how-search-is-changing-for-local-businesses",
    lastModified: "2026-08-02",
  },
  {
    path: "/blog/google-business-profile-optimization",
    lastModified: "2026-08-27",
  },
  { path: "/blog/seo-vs-google-ads", lastModified: "2026-08-27" },
  {
    path: "/blog/how-to-measure-local-seo-success",
    lastModified: "2026-08-15",
  },
  {
    path: "/blog/local-seo-domination-step-by-step-strategy",
    lastModified: "2026-08-15",
  },
  {
    path: "/blog/why-local-search-rankings-dropped",
    lastModified: "2026-08-15",
  },
  {
    path: "/blog/local-seo-for-ai-search",
    lastModified: "2026-08-15",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: `https://www.velvetinkmedia.com${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));
}
