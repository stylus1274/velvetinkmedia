import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

const deliverables = [
  { number: "01", title: "Content Strategy", copy: "Turn business goals, customer questions, search demand, and competitive gaps into a focused editorial roadmap.", tags: ["Research", "Roadmap"], accent: "purple" },
  { number: "02", title: "Service & Location Pages", copy: "Create commercially useful pages that explain what you do, who you serve, where you work, and why customers should choose you.", tags: ["Local intent", "Conversion"], accent: "blue" },
  { number: "03", title: "Articles & Resources", copy: "Publish expert-led articles, comparisons, guides, and answers that build topical depth and help customers make decisions.", tags: ["Editorial", "Authority"], accent: "lime" },
  { number: "04", title: "GEO & AEO Content", copy: "Structure clear, attributable information that search engines and AI systems can understand, retrieve, and potentially cite.", tags: ["AI answers", "Schema"], accent: "peach" },
  { number: "05", title: "Publishing & Optimization", copy: "Format, publish, internally link, and maintain content so useful work does not get trapped in a document or forgotten after launch.", tags: ["WordPress", "On-page SEO"], accent: "mint" },
  { number: "06", title: "Distribution & Repurposing", copy: "Extend strong ideas across social posts, email, supporting pages, and campaign assets without copying the same message everywhere.", tags: ["Social", "Email"], accent: "rose" },
];

const process = [
  ["01", "Research", "We identify customer questions, commercial priorities, search demand, competitor gaps, existing assets, and the expertise only your business can contribute."],
  ["02", "Plan", "We organize topics, formats, page relationships, publishing priorities, calls to action, and distribution into a practical roadmap."],
  ["03", "Create & publish", "We write, edit, optimize, format, publish, and connect each asset to the larger website and customer journey."],
  ["04", "Measure & improve", "We review visibility, engagement, assisted journeys, conversions, and content decay to decide what to update, expand, or retire."],
];

const audiences = [
  "Businesses publishing without a clear strategy",
  "Teams with expertise but no time to turn it into content",
  "Companies that need stronger SEO, GEO, and AEO support",
  "Service businesses whose website does not answer enough questions",
];

const faqs = [
  { question: "Is content marketing the same as blogging?", answer: "No. Blog articles can be one part of content marketing, but the larger strategy may include service pages, location pages, comparison content, FAQs, resources, email, social distribution, and ongoing optimization. The goal is to support discovery, trust, and business action rather than maintain a publishing calendar for its own sake." },
  { question: "Can you write and publish the content for us?", answer: "Yes. Velvet Ink Media can handle research, interviews, writing, editing, optimization, formatting, internal linking, and WordPress publishing. We can also work with internal experts when technical or first-hand knowledge needs to come directly from your team." },
  { question: "How does content marketing support GEO and AEO?", answer: "AI and answer systems need clear, accessible, well-supported information from identifiable sources. We organize expert knowledge, direct answers, useful context, page relationships, structured data opportunities, and authority signals so the business is easier to understand and recommend." },
  { question: "Do you use AI to create content?", answer: "AI can assist with research, organization, analysis, and production, but it should not replace business expertise, editorial judgment, fact checking, or original insight. The finished content must be accurate, useful, specific to the business, and worth publishing." },
  { question: "How often should we publish?", answer: "There is no universal publishing quota. Frequency should reflect available expertise, business priorities, competition, content quality, and the ability to maintain what is published. One strong resource can create more value than several rushed articles." },
  { question: "How do you measure whether content is working?", answer: "Measurement can include qualified organic visibility, local discovery, AI citations, engagement, assisted conversions, calls, forms, branded search, internal journeys, and lead quality. The right scorecard depends on the purpose of each content asset." },
];

export const metadata: Metadata = {
  title: "Content Marketing Services Tampa | Velvet Ink Media",
  description: "Content strategy, writing, publishing, distribution, SEO, GEO and AEO support for Tampa businesses that want useful content tied to measurable growth.",
  alternates: { canonical: "https://www.velvetinkmedia.com/content-marketing/" },
  openGraph: {
    title: "Content Marketing for Search, AI and Growth | Velvet Ink Media",
    description: "Plan, create, publish and distribute expert content that improves visibility, builds trust and helps customers take action.",
    url: "https://www.velvetinkmedia.com/content-marketing/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.velvetinkmedia.com/content-marketing/#service",
      name: "Content Marketing Services",
      serviceType: "Content strategy, creation, publishing and distribution",
      url: "https://www.velvetinkmedia.com/content-marketing/",
      provider: { "@type": "ProfessionalService", "@id": "https://www.velvetinkmedia.com/#organization", name: "Velvet Ink Media", telephone: "+1-813-797-5515" },
      areaServed: [{ "@type": "City", name: "Tampa" }, { "@type": "AdministrativeArea", name: "Tampa Bay" }, { "@type": "State", name: "Florida" }],
      description: "Content marketing services connecting research, strategy, expert writing, SEO, GEO, AEO, publishing, distribution and measurement.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "Content Marketing", item: "https://www.velvetinkmedia.com/content-marketing/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ],
};

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 44 20"><path d="M1 10h39M32 2l8 8-8 8" /></svg>;
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-cta">
        <div className="footer-cta-copy">
          <p className="footer-eyebrow">Let&apos;s talk</p>
          <h2>Build content that keeps earning attention.</h2>
          <p>Tell us what your customers need to understand and where your current content falls short. We&apos;ll help you identify the strongest place to start.</p>
          <div className="footer-actions">
            <a className="footer-button footer-button-light" href="tel:+18137975515">Call 813-797-5515</a>
            <a className="footer-button footer-button-outline" href="/contact">Plan Your Content Strategy</a>
          </div>
        </div>
        <aside className="footer-contact-card" aria-label="Velvet Ink Media contact details">
          <a className="footer-contact-logo" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a>
          <dl>
            <div><dt>Studio</dt><dd><address>1101 E Cumberland Ave #201H<br />Tampa, FL 33602</address></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+18137975515">813-797-5515</a></dd></div>
            <div><dt>Email</dt><dd><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a></dd></div>
          </dl>
        </aside>
      </div>
      <div className="footer-main">
        <div className="footer-brand-column"><a className="footer-brand" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a><p>A Tampa marketing agency connecting useful content, search visibility, web design, paid media, and measurement around real business growth.</p></div>
        <nav className="footer-column" aria-label="Footer services"><h3>Services</h3><a href="/services">All Services</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/content-marketing">Content Marketing</a><a href="/social-media">Social Media</a><a href="/paid-media">Paid Media</a></nav>
        <nav className="footer-column" aria-label="Footer company links"><h3>Company</h3><a href="/about-us">About Us</a><a href="/work">Our Work</a><a href="/blog">Insights</a><a href="/contact">Contact</a></nav>
        <div className="footer-column footer-contact-column"><h3>Contact</h3><a href="tel:+18137975515">813-797-5515</a><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a><address>Tampa, FL 33602</address></div>
      </div>
      <div className="footer-bottom"><p>© 2026 Velvet Ink Media. All rights reserved.</p><div><a href="#top">Privacy</a><a href="#top">Terms</a></div></div>
    </footer>
  );
}

export default function ContentMarketingPage() {
  return (
    <main className="content-marketing-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="content-marketing" />

      <section className="cm-hero">
        <div className="cm-hero-copy">
          <p className="eyebrow">Content marketing services for Tampa businesses</p>
          <h1>Content that earns attention and <span>keeps working.</span></h1>
          <p className="cm-lead">We plan, create, publish, and distribute useful content built to improve search visibility, support AI discovery, build trust, and move customers toward a real next step.</p>
          <div className="hero-actions"><a className="button button-purple" href="/contact">Plan Your Content Strategy</a><a className="button button-outline" href="#deliverables">See What We Create</a></div>
          <ul className="cm-hero-points"><li>Strategy-led</li><li>Expert-informed</li><li>Built to perform</li></ul>
        </div>
        <div className="cm-hero-stage" aria-label="Content strategy and editorial workflow illustration">
          <div className="cm-stage-grid" aria-hidden="true" />
          <div className="cm-editorial-board">
            <header><span /><span /><span /><strong>Content command center</strong><small>Q3 strategy</small></header>
            <div className="cm-board-body">
              <aside><b>Plan</b><span className="active">Strategy</span><span>Topics</span><span>Calendar</span><span>Results</span></aside>
              <section>
                <div className="cm-board-title"><div><small>PRIORITY CLUSTER</small><strong>Local search visibility</strong></div><b>8 assets</b></div>
                <div className="cm-content-row featured"><span>01</span><div><strong>How local search is changing</strong><small>Expert guide · Search + AI</small></div><i>READY</i></div>
                <div className="cm-content-row"><span>02</span><div><strong>Tampa service area page</strong><small>Commercial page · Local intent</small></div><i>DRAFT</i></div>
                <div className="cm-content-row"><span>03</span><div><strong>Customer question series</strong><small>Article + social distribution</small></div><i>PLAN</i></div>
              </section>
            </div>
          </div>
          <div className="cm-score-card"><small>CONTENT OPPORTUNITY</small><strong>87</strong><span>Strong topic fit</span></div>
          <div className="cm-distribution-card"><span>1 idea</span><i>→</i><strong>6 useful assets</strong></div>
        </div>
      </section>

      <section className="lse-context cm-context" id="approach">
        <div className="lse-context-heading"><p className="eyebrow">Not a publishing quota</p><h2>Content should solve a business problem.</h2></div>
        <div className="lse-context-copy"><p>Publishing more is not automatically a strategy. Strong content helps the right people discover your business, understand your expertise, compare options, overcome hesitation, and take action.</p><p>We connect every asset to a defined audience, search opportunity, customer question, service priority, or conversion goal. If a topic has no useful job to do, it should not be on the calendar.</p><a className="capability-button" href="#deliverables">Explore the Content System <ArrowIcon /></a></div>
      </section>

      <section className="lse-services cm-deliverables" id="deliverables">
        <div className="lse-section-heading"><div><p className="eyebrow">Content marketing services</p><h2>Strategy, creation, and distribution working together.</h2></div><p>We can manage the complete process or strengthen the part your team cannot consistently handle.</p></div>
        <div className="lse-service-grid">{deliverables.map((item) => <article className={`lse-service-card ${item.accent}`} key={item.number}><div className="lse-service-top"><span>{item.number}</span><i /></div><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section className="cm-search-system">
        <div className="cm-search-copy"><p className="eyebrow">Search, GEO &amp; AEO</p><h2>Create information worth finding and using.</h2><p>Traditional search and AI-generated answers both depend on useful, accessible information from sources they can understand. Generic copy gives them little reason to choose your website.</p><p>We turn first-hand knowledge, customer questions, clear explanations, local context, and supporting evidence into connected resources that strengthen the entire site.</p><a className="button button-purple" href="/geo-aeo">Explore GEO + AEO</a></div>
        <div className="cm-signal-stack" aria-label="Content visibility system">
          <article><span>01</span><div><strong>Original expertise</strong><small>Experience, examples, opinions, processes, and proof</small></div></article>
          <article><span>02</span><div><strong>Clear information</strong><small>Direct answers, useful context, strong page structure</small></div></article>
          <article><span>03</span><div><strong>Connected authority</strong><small>Internal links, entities, citations, reviews, and references</small></div></article>
          <article><span>04</span><div><strong>Measurable action</strong><small>Useful next steps tied to real customer intent</small></div></article>
          <b>Built for people, search engines, and answer systems</b>
        </div>
      </section>

      <section className="cm-formats">
        <div className="cm-formats-heading"><p className="eyebrow">Content formats</p><h2>Use the right format for the question and the customer.</h2><p>A blog is not the answer to every content need. The format should reflect intent, complexity, buying stage, and where the information will be used.</p></div>
        <div className="cm-format-grid">
          <article className="large purple"><span>01</span><h3>Service &amp; location pages</h3><p>Commercial pages that connect search intent to a clear offer, useful details, local context, and a focused next step.</p></article>
          <article className="blue"><span>02</span><h3>Expert articles</h3><p>Useful explanations and original insight that build topical depth.</p></article>
          <article className="lime"><span>03</span><h3>Comparisons</h3><p>Help customers evaluate choices without generic sales language.</p></article>
          <article className="peach"><span>04</span><h3>FAQs &amp; answers</h3><p>Address real questions with enough context to be genuinely useful.</p></article>
          <article className="large mint"><span>05</span><h3>Distribution assets</h3><p>Turn strong source material into social posts, email content, campaign support, and follow-up resources without flattening every channel into the same message.</p></article>
        </div>
      </section>

      <section className="lse-process cm-process">
        <div className="lse-section-heading"><div><p className="eyebrow">Our content process</p><h2>Build a repeatable system, not a pile of drafts.</h2></div><p>You will know what is being created, why it matters, where it will live, how it supports the larger strategy, and what happens after publication.</p></div>
        <div className="lse-process-grid">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="cm-measurement">
        <div className="cm-measurement-heading"><p className="eyebrow">Content performance</p><h2>Measure movement, not just pageviews.</h2><p>Traffic matters only when it supports discovery, trust, customer progress, or business results. We match measurement to the purpose of each asset.</p></div>
        <div className="cm-metric-list">
          <article><span>01</span><h3>Visibility</h3><p>Qualified rankings, local discovery, AI citations, impressions, and branded search.</p></article>
          <article><span>02</span><h3>Engagement</h3><p>Useful reading behavior, internal journeys, resource use, and return visits.</p></article>
          <article><span>03</span><h3>Action</h3><p>Calls, forms, assisted conversions, lead quality, and sales feedback.</p></article>
          <article><span>04</span><h3>Durability</h3><p>Content decay, refresh opportunities, expanding demand, and long-term contribution.</p></article>
        </div>
      </section>

      <section className="lse-fit-section cm-fit">
        <div className="lse-fit-copy"><p className="eyebrow">Who this is for</p><h2>Built for businesses with something useful to say.</h2><p>The strongest content comes from real expertise. Our job is to find it, shape it, connect it to customer demand, and make sure it reaches the people who need it.</p></div>
        <ul className="lse-fit-list">{audiences.map((audience, index) => <li key={audience}><span>0{index + 1}</span>{audience}</li>)}</ul>
      </section>

      <section className="lse-faq cm-faq">
        <div className="lse-faq-heading"><p className="eyebrow">Content marketing FAQs</p><h2>What businesses ask before building a content program.</h2></div>
        <div className="lse-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <Footer />
    </main>
  );
}
