import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/web-design",
  "/local-seo",
  "/geo-aeo",
  "/paid-media",
  "/content-marketing",
  "/social-media",
  "/about-us",
  "/work",
  "/contact",
  "/blog",
  "/blog/how-search-is-changing-for-local-businesses",
  "/blog/how-to-measure-local-seo-success",
  "/blog/local-seo-domination-step-by-step-strategy",
  "/blog/why-local-search-rankings-dropped",
  "/blog/local-seo-for-ai-search",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `https://www.velvetinkmedia.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7,
  }));
}
