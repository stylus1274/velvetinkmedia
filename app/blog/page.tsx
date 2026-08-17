import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const articles = [
  {
    category: "SEO + GEO + AEO",
    date: "August 15, 2026",
    readTime: "15 min read",
    title: "Local SEO for AI Search: How Local Businesses Get Mentioned",
    excerpt: "Make your business easier for ChatGPT, Gemini, Google AI Overviews, and traditional search to discover, understand, verify, and cite.",
    image: "/insights/local-seo-ai-search-featured.webp",
    alt: "Tampa neighborhood storefronts marked for local discovery",
    accent: "lime",
    href: "/blog/local-seo-for-ai-search",
  },
  {
    category: "Local SEO Measurement",
    date: "August 15, 2026",
    readTime: "14 min read",
    title: "How to Measure Local SEO Success: 12 Metrics That Actually Matter",
    excerpt: "Connect map visibility, Business Profile activity, website behavior, qualified leads, and revenue in one practical scorecard.",
    image: "/insights/local-seo-metrics-featured.webp",
    alt: "Local SEO strategist reviewing map visibility and conversion performance",
    accent: "purple",
    href: "/blog/how-to-measure-local-seo-success",
  },
  {
    category: "Local SEO Strategy",
    date: "August 15, 2026",
    readTime: "16 min read",
    title: "Local SEO Domination: A Step-by-Step Strategy",
    excerpt: "Build a connected local search system around your website, Business Profile, reviews, content, authority, and measurement.",
    image: "/insights/local-seo-domination-featured.webp",
    alt: "Local SEO strategist reviewing map rankings, reviews, and search performance",
    accent: "blue",
    href: "/blog/local-seo-domination-step-by-step-strategy",
  },
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
          <a className="blog-featured-image-link" href="/blog/why-local-search-rankings-dropped" aria-label="Read Why Your Local Search Rankings Dropped">
            <img src="/insights/local-ranking-drop-featured.webp" alt="Local SEO strategist diagnosing a decline in local search visibility" />
          </a>
          <figcaption><span>Featured</span><strong>Ranking recovery</strong></figcaption>
        </figure>
        <article className="blog-featured-copy">
          <div className="blog-article-meta"><span>Local Ranking Recovery</span><span>August 15, 2026 · 15 min read</span></div>
          <h2><a href="/blog/why-local-search-rankings-dropped">Why Your Local Search Rankings Dropped: 10 Causes and How to Recover</a></h2>
          <p>Confirm the decline, diagnose the most likely cause, and choose a recovery action without making the problem worse.</p>
          <a className="blog-read-button" href="/blog/why-local-search-rankings-dropped">Read the Featured Article <ArrowIcon /></a>
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
              <figure>
                <a className="blog-card-image-link" href={article.href} aria-label={`Read ${article.title}`}>
                  <img src={article.image} alt={article.alt} loading="lazy" />
                </a>
              </figure>
              <div className="blog-card-body">
                <p className="blog-card-date">{article.date} · {article.readTime}</p>
                <h3><a href={article.href}>{article.title}</a></h3>
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

      <SiteFooter variant="blog" />
    </main>
  );
}
