import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SiteLink from "../components/SiteLink";

export const metadata: Metadata = {
  title: "Our Work | Velvet Ink Media",
  description:
    "See how Velvet Ink Media connects web design, local SEO, content, conversion strategy, and measurement around real business goals.",
  alternates: { canonical: "https://www.velvetinkmedia.com/work/" },
  openGraph: {
    title: "Our Work | Velvet Ink Media",
    description:
      "Selected website, local SEO, and connected marketing work for businesses in Tampa Bay and beyond.",
    url: "https://www.velvetinkmedia.com/work/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.velvetinkmedia.com/work/#page",
      url: "https://www.velvetinkmedia.com/work/",
      name: "Our Work",
      description:
        "Selected web design, local SEO, and connected marketing work by Velvet Ink Media.",
      about: { "@id": "https://www.velvetinkmedia.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "Our Work", item: "https://www.velvetinkmedia.com/work/" },
      ],
    },
  ],
};

const projectIndex = [
  ["01", "Hacker, Johnson & Smith", "Accounting", "Website strategy · UX · SEO"],
  ["02", "Mobility Florida", "Mobility vehicles", "Web strategy · Local SEO · Conversion"],
  ["03", "Florida demolition contractor", "Construction", "Web design · Service-area SEO · Content"],
  ["04", "National Medicare publisher", "Insurance education", "Content strategy · Technical SEO · UX"],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 20">
      <path d="M1 10h39M32 2l8 8-8 8" />
    </svg>
  );
}

function HjsVisual() {
  return (
    <div className="work-browser work-browser-hjs" aria-label="Hacker, Johnson and Smith website interface concept">
      <div className="work-browser-bar"><i /><i /><i /><span>hackerjohnson.com</span></div>
      <div className="work-hjs-page">
        <header><strong>HJS</strong><nav><span>Services</span><span>Industries</span><span>About</span></nav></header>
        <div className="work-hjs-hero"><small>Tampa accounting expertise</small><h3>Clarity for complex financial decisions.</h3><p>Audit, tax, and advisory services organized around the client&apos;s next question.</p><b>Explore Services</b></div>
        <div className="work-hjs-services"><span>Audit &amp; Assurance</span><span>Tax Services</span><span>Advisory</span></div>
      </div>
    </div>
  );
}

function MobilityVisual() {
  return (
    <div className="work-browser work-browser-mobility" aria-label="Mobility Florida local search and website interface concept">
      <div className="work-browser-bar"><i /><i /><i /><span>mobilityfl.com</span></div>
      <div className="work-mobility-page">
        <header><strong>Mobility Florida</strong><span>Find the right wheelchair van</span></header>
        <div className="work-mobility-grid">
          <section><small>Choose your path</small><h3>Start with what you need to do.</h3><div><b>Shop vans</b><b>Value a trade</b><b>Get expert help</b></div></section>
          <aside><small>Local visibility</small><strong>Tampa Bay</strong><div className="work-map-lines"><i /><i /><i /></div><span>Service-area pages connected to real customer needs</span></aside>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="work-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="work" />

      <section className="work-hero">
        <div className="work-hero-grid" aria-hidden="true" />
        <div className="work-hero-copy">
          <p className="eyebrow">Selected work · Websites · Search · Growth</p>
          <h1>Work shaped around the <span>business.</span></h1>
        </div>
        <div className="work-hero-intro">
          <p>Good work is not defined by a pretty screen or a higher traffic number. It should make the business easier to understand, easier to find, and easier to choose.</p>
          <div className="work-proof-list" aria-label="How Velvet Ink Media evaluates project work">
            <span>Clearer customer paths</span><span>Stronger search visibility</span><span>Useful measurement</span>
          </div>
        </div>
      </section>

      <section className="work-project work-project-hjs" id="hacker-johnson-smith">
        <div className="work-project-heading">
          <div><span>01</span><p className="eyebrow">Hacker, Johnson &amp; Smith · Tampa accounting firm</p></div>
          <h2>A sharper digital presence for a respected Tampa accounting firm.</h2>
        </div>
        <HjsVisual />
        <div className="work-project-details">
          <div className="work-detail-intro"><p className="eyebrow">Website strategy · UX · SEO</p><p>Complex professional services needed a clearer structure, a more confident presentation, and a foundation that could support search growth.</p></div>
          <dl>
            <div><dt>The challenge</dt><dd>Make specialized accounting services easier for prospective clients to understand and navigate.</dd></div>
            <div><dt>The work</dt><dd>Restructured service paths, modernized the interface, clarified messaging, and strengthened the website&apos;s search foundation.</dd></div>
            <div><dt>The outcome</dt><dd>A more authoritative experience with clearer routes to the right service and room to expand over time.</dd></div>
          </dl>
        </div>
      </section>

      <section className="work-project work-project-mobility" id="mobility-florida">
        <div className="work-project-heading">
          <div><span>02</span><p className="eyebrow">Mobility Florida · Wheelchair-accessible vehicles</p></div>
          <h2>Turning a complex buying decision into a clearer customer journey.</h2>
        </div>
        <MobilityVisual />
        <div className="work-project-details">
          <div className="work-detail-intro"><p className="eyebrow">Web strategy · Local SEO · Conversion</p><p>Customers needed to compare vehicles, understand ramp configurations, value a trade, and get expert help without feeling overwhelmed.</p></div>
          <dl>
            <div><dt>The challenge</dt><dd>Organize a high-consideration purchase around the questions customers and families ask first.</dd></div>
            <div><dt>The work</dt><dd>Rebuilt core customer paths, connected local search content to buying needs, and clarified inventory, trade-in, and remote-purchase options.</dd></div>
            <div><dt>The outcome</dt><dd>A more useful experience that supports local shoppers, remote buyers, and ongoing search growth.</dd></div>
          </dl>
        </div>
      </section>

      <section className="work-index">
        <div className="work-index-heading">
          <p className="eyebrow">Across industries and growth stages</p>
          <h2>The format changes. The standard does not.</h2>
          <p>Every engagement starts with the same question: what does the business need customers to understand or do next?</p>
        </div>
        <div className="work-index-rows">
          {projectIndex.map(([number, name, industry, services]) => (
            <article key={number}><span>{number}</span><h3>{name}</h3><p>{industry}</p><small>{services}</small></article>
          ))}
        </div>
      </section>

      <section className="work-standards">
        <div><p className="eyebrow">How we judge the work</p><h2>Designed to create business movement.</h2></div>
        <div className="work-standard-grid">
          <article><span>01</span><h3>Clarity</h3><p>Can a customer quickly understand the offer and why it matters?</p></article>
          <article><span>02</span><h3>Findability</h3><p>Can search engines and AI systems understand, trust, and surface the business?</p></article>
          <article><span>03</span><h3>Conversion</h3><p>Does the experience make the next useful action obvious and easy?</p></article>
          <article><span>04</span><h3>Measurement</h3><p>Can the team see which work contributes to qualified leads and growth?</p></article>
        </div>
        <SiteLink className="button button-purple" href="/contact">Discuss Your Project <ArrowIcon /></SiteLink>
      </section>

      <SiteFooter variant="work" />
    </main>
  );
}
