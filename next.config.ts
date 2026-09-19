import type { NextConfig } from "next";

export const legacyRedirects = [
  // SEO service pages
  ["/seo-company-tampa", "/local-seo"],
  ["/seo-company-in-tampa", "/local-seo"],
  ["/local-legal-seo", "/local-seo"],
  ["/local-business-seo-medical", "/local-seo"],
  ["/reputation-management", "/local-seo"],

  // Web design and support pages
  ["/wordpress-design-brandon-fl", "/web-design"],
  ["/wordpress-design-riverview-fl", "/web-design"],
  ["/wordpress-design-valrico-fl", "/web-design"],
  ["/wordpress-design-ruskin-fl", "/web-design"],
  ["/wordpress-design-apollo-beach-fl", "/web-design"],
  ["/wordpress-design-wimauma-fl", "/web-design"],
  ["/wordpress-design-wesley-chapel-fl", "/web-design"],
  ["/wordpress-design-plant-city-fl", "/web-design"],
  ["/wordpress-design", "/web-design"],
  ["/custom-wordpress-design-development-in-tampa-fl", "/web-design"],
  ["/tampa-website-design", "/web-design"],
  ["/web-hosting-maintenance", "/web-design"],
  ["/therapist-landing", "/web-design-promo"],

  // Contact and service pages
  ["/get-project-quote", "/contact"],
  ["/contact-us", "/contact"],
  ["/our-services", "/services"],
  ["/content-management", "/content-marketing"],
  ["/portfolio", "/work"],

  // Retired portfolio case studies
  ["/reeder-nussbaum", "/work"],
  ["/helping-couples-heal", "/work"],
  ["/novus-mindful-life", "/work"],
  ["/yacht-starship-3", "/work"],
  ["/flow-fitness-boutique", "/work"],
  ["/gcsa-capital", "/work"],
  ["/medical-information-project", "/work"],
  ["/engine-ready", "/work"],
  ["/pirate-water-taxi", "/work"],
  ["/eyesite-tampa-bay", "/work"],
  ["/providence-law-group", "/work"],

  // Legacy articles with close replacements
  [
    "/google-business-profile-optimization-tampa",
    "/blog/google-business-profile-optimization",
  ],
  ["/seo-services-tampa", "/local-seo"],
  ["/why-use-wordpress-for-your-business-website", "/web-design"],
  [
    "/top-5-local-seo-tips-for-tampa-small-businesses",
    "/blog/local-seo-domination-step-by-step-strategy",
  ],
  ["/seo-tips-google", "/blog/local-seo-domination-step-by-step-strategy"],
  ["/what-are-seo-services", "/local-seo"],
  [
    "/how-much-should-you-budget-for-on-advertising-and-digital-marketing",
    "/blog/seo-vs-google-ads",
  ],
  ["/how-to-structure-your-permalinks-for-best-seo-value", "/local-seo"],
  ["/why-seo-is-important-for-your-business", "/local-seo"],
  ["/how-does-seo-work", "/local-seo"],
  ["/tips-on-optimizing-your-landing-pages‏", "/web-design"],
  ["/diy-seo-tips", "/blog/local-seo-domination-step-by-step-strategy"],
  ["/10-quick-tips-about-marketing", "/services"],
  [
    "/basic-guide-to-understanding-the-google-3-pack",
    "/blog/google-business-profile-optimization",
  ],
  ["/website-design-explained-tampa-florida", "/web-design"],
  ["/why-you-need-seo-for-your-business", "/local-seo"],
  ["/converting-first-impressions", "/web-design"],
  ["/6-reasons-for-regular-wordpress-support-and-maintenance", "/web-design"],
  ["/mobile-friendly-website-is-must-have", "/web-design"],
  ["/update-wordpress", "/web-design"],
  ["/you-dont-really-need-a-sliding-banner", "/web-design"],
  ["/great-website-can-church", "/web-design"],
  ["/seo-boost-website", "/local-seo"],
  ["/create-beautiful-complex-forms-fast-secure-contact-form-plugin", "/web-design"],
  ["/how-to-find-your-facebook-page-id", "/social-media"],
  ["/browser-compatibility-and-client-standards", "/web-design"],
  ["/get-in-front-of-the-republican-national-convention", "/paid-media"],
  ["/5-must-have-wordpress-plugins", "/web-design"],
  ["/welcome-to-vpanel", "/web-design"],
  ["/join-us-on-google-plus", "/social-media"],

  // Legacy launches and WordPress demonstrations
  ["/gxunited-membership-wordpress-launched", "/work"],
  ["/jti-siding-custom-wordpress-website-launched", "/work"],
  ["/procare-website-launch", "/work"],
  ["/demo-wordpress-admin-reagans-journey-child-month", "/web-design"],
  ["/get-new-website-time-florida-wedding-expo", "/work"],
  ["/reagans-journey-launched-new-website", "/work"],
  ["/demo-wordpress-admin-reagans-journey-theme-options", "/web-design"],
  ["/demo-our-wordpress-admin-zahira", "/web-design"],
  ["/eventus-by-zahira", "/work"],
  ["/amavida-coffee-and-tea-site-launch", "/work"],

  // Legacy WordPress sitemap endpoints
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/page-sitemap.xml", "/sitemap.xml"],
  ["/post-sitemap.xml", "/sitemap.xml"],
  ["/local-sitemap.xml", "/sitemap.xml"],
] as const;

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*"],
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
