import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

const articles = [
  {
    category: "SEO + GEO + AEO",
    date: "August 2, 2026",
    readTime: "9 min read",
    title: "How search is changing for local businesses",
    excerpt: "What changes, what stays the same, and where local businesses should focus as AI-generated answers reshape discovery.",
    image: "/outcomes/visibility-photo.webp",
    alt: "Marketing professional reviewing search visibility performance",
    accent: "purple",
    href: "/blog/how-search-is-changing-for-local-businesses",
  },
  {
    category: "Local SEO",
    date: "July 18, 2026",
    readTime: "7 min read",
    title: "Google Business Profile optimization for Tampa businesses",
    excerpt: "The profile improvements that help local businesses earn more visibility, calls, and direction requests.",
    image: "/insights/google-business-profile.webp",
    alt: "Business owner and marketing strategist reviewing a local business profile",
    accent: "purple",
    href: "#featured",
  },
  {
    category: "Local Rankings",
    date: "July 11, 2026",
    readTime: "6 min read",
    title: "How local search rankings really work",
    excerpt: "A practical look at proximity, relevance, prominence, and the signals a business can actually influence.",
    image: "/insights/local-search-rankings.webp",
    alt: "SEO strategist reviewing local search rankings on a desktop monitor",
    accent: "blue",
    href: "#featured",
  },
  {
    category: "Search Strategy",
    date: "July 3, 2026",
    readTime: "8 min read",
    title: "SEO vs. Google Ads: where should a local business start?",
    excerpt: "Compare speed, cost, staying power, and intent before deciding how to divide your marketing budget.",
    image: "/insights/seo-vs-google-ads.webp",
    alt: "Marketing strategist comparing search and advertising performance",
    accent: "lime",
    href: "#featured",
  },
  {
    category: "Content Strategy",
    date: "June 26, 2026",
    readTime: "7 min read",
    title: "What makes a service page rank in Tampa?",
    excerpt: "Build service pages around customer intent, useful local context, and a clear reason to take the next step.",
    image: "/insights/service-page-strategy.webp",
    alt: "Content strategist planning a local service page",
    accent: "peach",
    href: "#featured",
  },
  {
    category: "Web Design",
    date: "June 18, 2026",
    readTime: "5 min read",
    title: "Why website speed still matters for local leads",
    excerpt: "Slow pages create friction before a visitor ever reaches the form, phone number, or primary offer.",
    image: "/insights/website-speed.webp",
    alt: "Marketer reviewing website performance results on a laptop",
    accent: "mint",
    href: "#featured",
  },
  {
    category: "Analytics",
    date: "June 10, 2026",
    readTime: "9 min read",
    title: "How to track which marketing channels produce leads",
    excerpt: "Move beyond traffic totals by connecting calls, forms, and qualified conversations to their source.",
    image: "/insights/marketing-attribution.webp",
    alt: "Marketing analyst reviewing lead attribution data",
    accent: "rose",
    href: "#featured",
  },
];

export const metadata: Metadata = {
  title: "Digital Marketing Insights | Velvet Ink Media",
  description:
    "Practical guidance on local SEO, GEO, AEO, web design, paid media, content, and analytics for Tampa businesses.",
  alternates: { canonical: "https://www.velvetinkmedia.com/blog/" },
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 20">
      <path d="M1 10h39M32 2l8 8-8 8" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/services">Services</a><a href="/about-us">About</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/paid-media">Paid Media</a><a href="/work">Work</a><a href="/blog" aria-current="page">Insights</a><a href="/contact">Contact</a>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation"><a href="/services">Services</a><a href="/about-us">About</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/paid-media">Paid Media</a><a href="/work">Work</a><a href="/blog" aria-current="page">Insights</a><a href="/contact">Contact</a></nav>
      </details>
      <a className="button button-purple header-cta" href="/contact">Start a Project</a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="footer-cta-copy">
          <p className="footer-eyebrow">Put the ideas to work</p>
          <h2>Let&apos;s turn better marketing decisions into growth.</h2>
          <p>Tell us what you are trying to improve. We will help you identify the right combination of website, search, content, and advertising support.</p>
          <div className="footer-actions"><a className="footer-button footer-button-light" href="/contact">Start a Project</a><a className="footer-button footer-button-outline" href="tel:+18137975515">Call 813-797-5515</a></div>
        </div>
        <aside className="footer-contact-card" aria-label="Velvet Ink Media contact details">
          <a className="footer-contact-logo" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a>
          <dl><div><dt>Studio</dt><dd><address>1101 E Cumberland Ave #201H<br />Tampa, FL 33602</address></dd></div><div><dt>Phone</dt><dd><a href="tel:+18137975515">813-797-5515</a></dd></div><div><dt>Email</dt><dd><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a></dd></div></dl>
        </aside>
      </div>
      <div className="footer-main">
        <div className="footer-brand-column"><a className="footer-brand" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a><p>A Tampa marketing and web design agency creating connected digital systems that help businesses grow.</p></div>
        <nav className="footer-column" aria-label="Footer services"><h3>Services</h3><a href="/services">All Services</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/content-marketing">Content Marketing</a><a href="/social-media">Social Media</a><a href="/paid-media">Paid Media</a></nav>
        <nav className="footer-column" aria-label="Footer company links"><h3>Company</h3><a href="/about-us">About Us</a><a href="/blog">Insights</a><a href="/#proof">Our Approach</a><a href="/contact">Contact</a></nav>
        <div className="footer-column footer-contact-column"><h3>Contact</h3><a href="tel:+18137975515">813-797-5515</a><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a><address>Tampa, FL 33602</address></div>
      </div>
      <div className="footer-bottom"><p>© 2026 Velvet Ink Media. All rights reserved.</p><div><a href="#top">Privacy</a><a href="#top">Terms</a></div></div>
    </footer>
  );
}

export default function BlogPage() {
  return (
    <main className="blog-page">
      <SiteHeader current="blog" />

      <section className="blog-hero">
        <div className="blog-hero-grid" aria-hidden="true" />
        <div>
          <p className="eyebrow">Marketing insights for Tampa businesses</p>
          <h1>Practical ideas.<br /><span>Clear next moves.</span></h1>
        </div>
        <div className="blog-hero-copy">
          <p>Straightforward guidance on websites, local search, AI visibility, advertising, content, and the decisions that connect them.</p>
          <div className="blog-topics" aria-label="Topics covered"><span>Local SEO</span><span>GEO &amp; AEO</span><span>Web Design</span><span>Paid Media</span><span>Analytics</span></div>
        </div>
      </section>

      <section className="blog-featured" id="featured">
        <figure className="blog-featured-image">
          <img src="/insights/local-seo-domination-featured.webp" alt="Local SEO strategist reviewing map rankings, reviews, and search performance" />
          <figcaption><span>Featured</span><strong>Local SEO guide</strong></figcaption>
        </figure>
        <article className="blog-featured-copy">
          <div className="blog-article-meta"><span>Local SEO</span><span>August 15, 2026 · 16 min read</span></div>
          <h2>Local SEO Domination: A Step-by-Step Strategy</h2>
          <p>Use this practical 12-step strategy to strengthen your Google Business Profile, website, reviews, authority, and measurement around the local customers you want to reach.</p>
          <a className="blog-read-button" href="/blog/local-seo-domination-step-by-step-strategy">Read the Featured Article <ArrowIcon /></a>
        </article>
      </section>

      <section className="blog-index" id="articles">
        <div className="blog-index-heading">
          <div><p className="eyebrow">Latest insights</p><h2>Useful marketing guidance without the noise.</h2></div>
          <p>Clear explanations and practical recommendations for business owners deciding where to focus next.</p>
        </div>
        <div className="blog-article-grid">
          {articles.map((article, index) => (
            <article className={`blog-card blog-card-${article.accent}`} key={article.title}>
              <div className="blog-card-top"><span>0{index + 1}</span><span>{article.category}</span></div>
              <figure><img src={article.image} alt={article.alt} loading="lazy" /></figure>
              <div className="blog-card-body">
                <p className="blog-card-date">{article.date} · {article.readTime}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a className="blog-read-button blog-read-button-small" href={article.href} aria-label={`Read ${article.title}`}>Read the Article <ArrowIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-guidance-cta">
        <div><p className="eyebrow">Need a more specific answer?</p><h2>Bring us the business problem, not a list of marketing services.</h2></div>
        <div><p>We will help you sort through the options, identify the real bottleneck, and choose a practical next step.</p><a className="button button-purple" href="/contact">Ask Velvet Ink Media</a></div>
      </section>

      <Footer />
    </main>
  );
}
