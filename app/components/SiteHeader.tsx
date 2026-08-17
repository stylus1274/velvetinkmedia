import Image from "next/image";
import SiteLink from "./SiteLink";

type CurrentPage =
  | "home"
  | "services"
  | "about"
  | "web-design"
  | "local-seo"
  | "geo-aeo"
  | "content-marketing"
  | "social-media"
  | "paid-media"
  | "work"
  | "blog"
  | "contact";

const servicePages = [
  { key: "services", href: "/services", label: "Services Overview", note: "See how every service connects" },
  { key: "web-design", href: "/web-design", label: "Web Design", note: "Strategy, UX, and WordPress" },
  { key: "local-seo", href: "/local-seo", label: "Local SEO", note: "Maps, organic visibility, and trust" },
  { key: "geo-aeo", href: "/geo-aeo", label: "GEO + AEO", note: "Search visibility in AI answers" },
  { key: "content-marketing", href: "/content-marketing", label: "Content Marketing", note: "Strategy, creation, and distribution" },
  { key: "social-media", href: "/social-media", label: "Social Media", note: "Strategy, content, and community" },
  { key: "paid-media", href: "/paid-media", label: "Paid Media", note: "Search ads, social, and measurement" },
] as const;

export default function SiteHeader({ current }: { current: CurrentPage }) {
  const serviceActive = servicePages.some((item) => item.key === current);
  const currentAttribute = (page: CurrentPage) => current === page ? "page" as const : undefined;

  return (
    <header className="site-header" id="top">
      <SiteLink className="brand" href={current === "home" ? "#top" : "/"} aria-label="Velvet Ink Media home">
        <Image src="/velvet-ink-logo.png" width={305} height={56} alt="Velvet Ink Media" />
      </SiteLink>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <div className={`nav-dropdown${serviceActive ? " is-active" : ""}`}>
          <SiteLink className="nav-dropdown-trigger" href="/services" aria-haspopup="true">
            Services <span aria-hidden="true">+</span>
          </SiteLink>
          <div className="nav-dropdown-menu">
            <div className="nav-dropdown-heading"><small>Connected services</small><strong>Choose a starting point.</strong></div>
            {servicePages.map((item) => (
              <SiteLink key={item.key} href={item.href} aria-current={currentAttribute(item.key)}>
                <span>{item.label}</span><small>{item.note}</small>
              </SiteLink>
            ))}
          </div>
        </div>
        <SiteLink href="/about-us" aria-current={currentAttribute("about")}>About</SiteLink>
        <SiteLink href="/work" aria-current={currentAttribute("work")}>Work</SiteLink>
        <SiteLink href="/blog" aria-current={currentAttribute("blog")}>Insights</SiteLink>
        <SiteLink href="/contact" aria-current={currentAttribute("contact")}>Contact</SiteLink>
      </nav>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {servicePages.map((item) => <SiteLink key={item.key} href={item.href} aria-current={currentAttribute(item.key)}>{item.label}</SiteLink>)}
          <SiteLink href="/about-us" aria-current={currentAttribute("about")}>About</SiteLink>
          <SiteLink href="/work" aria-current={currentAttribute("work")}>Work</SiteLink>
          <SiteLink href="/blog" aria-current={currentAttribute("blog")}>Insights</SiteLink>
          <SiteLink href="/contact" aria-current={currentAttribute("contact")}>Contact</SiteLink>
        </nav>
      </details>

      <SiteLink className="button button-purple header-cta" href={current === "contact" ? "#project-form" : "/contact"}>Start a Project</SiteLink>
    </header>
  );
}
