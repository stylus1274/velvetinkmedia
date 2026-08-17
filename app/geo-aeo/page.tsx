import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const services = [
  {
    number: "01",
    title: "AI Search Readiness",
    copy: "We audit crawl access, indexing, site structure, business information, content quality, and authority signals to find what may limit visibility in answer-driven search.",
    tags: ["Technical audit", "Crawl access", "Opportunity map"],
    accent: "purple",
  },
  {
    number: "02",
    title: "Expert-Led Content",
    copy: "We turn real experience, customer questions, original insight, and useful evidence into content that gives search and AI systems something worth citing.",
    tags: ["First-hand insight", "Clear answers", "Source quality"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Entity & Brand Clarity",
    copy: "We strengthen the connections between your business, people, services, locations, credentials, and third-party references so your identity is easier to understand.",
    tags: ["Organization signals", "Local entities", "Brand consistency"],
    accent: "peach",
  },
  {
    number: "04",
    title: "Structured Information",
    copy: "We organize pages, headings, internal links, business details, and appropriate schema so important information is explicit, consistent, and accessible.",
    tags: ["Schema", "Information design", "Internal links"],
    accent: "lime",
  },
  {
    number: "05",
    title: "Authority Development",
    copy: "We identify credible opportunities for relevant mentions, local citations, reviews, partnerships, and links that reinforce why your business should be trusted.",
    tags: ["Citations", "Reviews", "Digital PR"],
    accent: "mint",
  },
  {
    number: "06",
    title: "AI Visibility Measurement",
    copy: "We monitor citations, referral traffic, branded discovery, search visibility, cited pages, and conversion activity without pretending a volatile answer can be reduced to one ranking.",
    tags: ["AI citations", "Referral traffic", "Conversions"],
    accent: "rose",
  },
];

const process = [
  ["01", "Establish the baseline", "We document how your business currently appears across traditional results, AI answers, local listings, third-party sources, and analytics."],
  ["02", "Strengthen the foundation", "We fix access, structure, business data, schema, internal linking, page quality, and other issues that make the site harder to understand."],
  ["03", "Build citation-worthy resources", "We create or improve pages using first-hand expertise, useful details, clear answers, and evidence competitors cannot easily reproduce."],
  ["04", "Measure and refine", "We track visibility, citations, referral traffic, assisted journeys, leads, and source patterns to guide the next round of improvements."],
];

const faqs = [
  {
    question: "What is Generative Engine Optimization?",
    answer: "Generative Engine Optimization, or GEO, is the practice of improving a brand's ability to be discovered, understood, cited, or recommended in AI-generated search experiences. It builds on technical SEO, content quality, entity clarity, authority, and accessible business information rather than replacing them.",
  },
  {
    question: "What is Answer Engine Optimization?",
    answer: "Answer Engine Optimization, or AEO, focuses on making information clear, useful, and easy for search and answer systems to retrieve when responding to a question. That includes direct answers, logical page structure, relevant supporting details, appropriate structured data, and strong topical coverage.",
  },
  {
    question: "Are GEO and AEO different from SEO?",
    answer: "The emphasis is different, but the foundation overlaps heavily. Google describes optimization for its generative AI features as part of SEO. Strong crawling, indexing, people-first content, business information, authority, and page experience continue to matter across traditional and AI-driven results.",
  },
  {
    question: "Can you guarantee that my business will appear in ChatGPT or Google AI Overviews?",
    answer: "No. AI answers change by platform, query, location, context, available sources, and system updates. No agency controls which sources an answer engine selects. We improve the signals and content within your control, then measure where your visibility is changing.",
  },
  {
    question: "Does my website need special AI markup or an llms.txt file?",
    answer: "There is no universal markup that guarantees AI visibility. Google specifically says special AI files such as llms.txt are not required for its search experiences. Valid schema can help systems understand supported page information, but it must accurately represent visible content and does not guarantee inclusion.",
  },
  {
    question: "How can my website appear in ChatGPT search?",
    answer: "Your site must be publicly accessible and should allow OAI-SearchBot if you want its content considered for summaries and citations in ChatGPT search. Strong content, technical accessibility, clear business information, and reliable external signals can improve eligibility, but top placement cannot be guaranteed.",
  },
  {
    question: "How do you measure AI search visibility?",
    answer: "Measurement can include cited pages, citation frequency, AI referral traffic, branded search growth, assisted conversions, visibility for representative prompts, and traditional search performance. Bing Webmaster Tools now provides AI citation reporting, while ChatGPT referrals can be identified through their traffic source data.",
  },
  {
    question: "Is GEO useful for a local Tampa business?",
    answer: "Yes, especially when customers use AI tools to compare providers, research services, understand costs, or build a shortlist. Local businesses still need accurate profiles, reviews, service and location information, strong local authority, and a website that clearly explains why the business is relevant.",
  },
  {
    question: "How long does GEO and AEO take?",
    answer: "Timing depends on technical condition, existing authority, content depth, competition, indexing, and how frequently answer systems refresh their sources. Some crawl or content improvements can be implemented quickly, but meaningful visibility should be treated as an ongoing strategy rather than a short campaign.",
  },
];

export const metadata: Metadata = {
  title: "GEO & AEO Services Tampa | AI Search Optimization",
  description:
    "Prepare your business for Google AI Overviews, ChatGPT search and answer engines with Tampa GEO and AEO services built on strong SEO foundations.",
  alternates: {
    canonical: "https://www.velvetinkmedia.com/geo-aeo/",
  },
  openGraph: {
    title: "GEO & AEO Services for Tampa Businesses | Velvet Ink Media",
    description:
      "Build the content, technical foundation, authority and brand clarity needed for visibility across traditional and AI-driven search.",
    url: "https://www.velvetinkmedia.com/geo-aeo/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.velvetinkmedia.com/geo-aeo/#service",
      name: "Generative Engine Optimization and Answer Engine Optimization",
      alternateName: ["GEO Services", "AEO Services", "AI Search Optimization"],
      serviceType: "AI search visibility strategy",
      url: "https://www.velvetinkmedia.com/geo-aeo/",
      provider: {
        "@type": "ProfessionalService",
        "@id": "https://www.velvetinkmedia.com/#organization",
        name: "Velvet Ink Media",
        telephone: "+1-813-797-5515",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1101 E Cumberland Ave #201H",
          addressLocality: "Tampa",
          addressRegion: "FL",
          postalCode: "33602",
          addressCountry: "US",
        },
      },
      areaServed: [
        { "@type": "City", name: "Tampa" },
        { "@type": "AdministrativeArea", name: "Tampa Bay" },
        { "@type": "State", name: "Florida" },
      ],
      description: "GEO and AEO services that improve technical accessibility, expert content, entity clarity, structured information, authority signals, and measurement for AI-driven search.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "GEO and AEO", item: "https://www.velvetinkmedia.com/geo-aeo/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
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
        <a href="/services">Services</a><a href="/about-us">About</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo" aria-current="page">GEO + AEO</a><a href="/paid-media">Paid Media</a><a href="/work">Work</a><a href="/blog">Insights</a><a href="/contact">Contact</a>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation"><a href="/services">Services</a><a href="/about-us">About</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo" aria-current="page">GEO + AEO</a><a href="/paid-media">Paid Media</a><a href="/work">Work</a><a href="/blog">Insights</a><a href="/contact">Contact</a></nav>
      </details>
      <a className="button button-purple header-cta" href="/contact">Start a Project</a>
    </header>
  );
}

function AnswerGraphic() {
  return (
    <div className="geo-answer-stage" aria-label="AI search answer interface illustration">
      <div className="geo-stage-grid" aria-hidden="true" />
      <div className="geo-answer-window">
        <div className="geo-window-chrome"><span /><span /><span /><b>AI search</b></div>
        <div className="geo-query"><i aria-hidden="true" /><strong>How can a Tampa business improve local visibility?</strong><span>Ask</span></div>
        <div className="geo-response">
          <div className="geo-response-label"><i /> Answer</div>
          <p>Build a clear technical foundation, publish useful expert content, maintain accurate local business information, and earn trusted third-party signals.</p>
          <div className="geo-response-sources"><span>1</span><span>2</span><span>3</span><b>3 sources</b></div>
        </div>
      </div>
      <div className="geo-citation-card"><small>AI citations</small><strong>+42%</strong><span>More source visibility</span></div>
      <div className="geo-entity-card"><i>V</i><div><small>ENTITY MATCH</small><strong>Velvet Ink Media</strong><span>Tampa · Marketing agency</span></div></div>
      <div className="geo-platform-pill"><i>✦</i><span>Search visibility</span></div>
    </div>
  );
}

export default function GeoAeoPage() {
  return (
    <main className="geo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="geo-aeo" />

      <section className="geo-hero">
        <div className="geo-hero-copy">
          <p className="eyebrow">GEO &amp; AEO services for Tampa businesses</p>
          <h1>Be found when search becomes <span>an answer.</span></h1>
          <p className="geo-lead">We connect SEO, expert-led content, structured information, brand clarity, and authority signals to help your business earn visibility across traditional search and AI-generated answers.</p>
          <div className="hero-actions"><a className="button button-purple" href="/contact">Request an AI Search Review</a><a className="button button-outline" href="#services">Explore GEO &amp; AEO Services</a></div>
          <ul className="geo-hero-points" aria-label="AI search platforms"><li>Google AI experiences</li><li>ChatGPT search</li><li>Microsoft Copilot</li></ul>
        </div>
        <AnswerGraphic />
      </section>

      <section className="geo-foundation">
        <div><p className="eyebrow">SEO is still the foundation</p><h2>GEO and AEO do not replace SEO. They extend it.</h2></div>
        <div className="geo-foundation-copy"><p>AI-powered search still depends on discoverable pages, useful information, identifiable sources, and signals of relevance and trust. The terminology is new. Most of the durable work is not.</p><p>We focus on the fundamentals that help your business across Google, AI answer engines, local results, and the customer journey instead of chasing unsupported shortcuts.</p><a className="capability-button" href="#framework">See How the Pieces Connect <ArrowIcon /></a></div>
      </section>

      <section className="geo-definitions" id="framework">
        <div className="geo-definitions-heading"><p className="eyebrow">SEO, GEO &amp; AEO</p><h2>Different outcomes. One connected search strategy.</h2><p>These labels describe where visibility appears and how information is delivered. They work best as one coordinated system.</p></div>
        <div className="geo-definition-grid">
          <article className="geo-definition-seo"><span>01</span><small>SEARCH ENGINE OPTIMIZATION</small><h3>Get discovered.</h3><p>Improve crawling, indexing, rankings, local visibility, page experience, and qualified organic traffic.</p><ul><li>Traditional results</li><li>Google Maps</li><li>Organic traffic</li></ul></article>
          <article className="geo-definition-aeo"><span>02</span><small>ANSWER ENGINE OPTIMIZATION</small><h3>Answer clearly.</h3><p>Structure useful information so systems can retrieve direct, complete, and contextually relevant answers.</p><ul><li>Featured answers</li><li>Voice search</li><li>Question-led discovery</li></ul></article>
          <article className="geo-definition-geo"><span>03</span><small>GENERATIVE ENGINE OPTIMIZATION</small><h3>Become a source.</h3><p>Strengthen content, entities, authority, and references that can support citations in generative answers.</p><ul><li>AI Overviews</li><li>ChatGPT search</li><li>Copilot citations</li></ul></article>
        </div>
      </section>

      <section className="geo-services" id="services">
        <div className="geo-section-heading"><div><p className="eyebrow">GEO &amp; AEO services</p><h2>Build the signals answer engines need to understand and trust.</h2></div><p>There is no single switch for AI visibility. The work spans technical access, information quality, brand clarity, authority, and measurement.</p></div>
        <div className="geo-service-grid">{services.map((service) => <article className={`geo-service-card ${service.accent}`} key={service.number}><div className="geo-service-top"><span>{service.number}</span><i /></div><h3>{service.title}</h3><p>{service.copy}</p><ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section className="geo-content-section">
        <div className="geo-content-visual" aria-label="Content source quality dashboard illustration">
          <header><span>Source quality</span><b>Content opportunity</b><small>Updated today</small></header>
          <div className="geo-quality-score"><div><small>CITATION READINESS</small><strong>82</strong><span>/100</span></div><i>Strong foundation</i></div>
          <div className="geo-quality-bars"><p><span>Original experience</span><i><b style={{ width: "88%" }} /></i><strong>88%</strong></p><p><span>Answer completeness</span><i><b style={{ width: "76%" }} /></i><strong>76%</strong></p><p><span>Entity clarity</span><i><b style={{ width: "84%" }} /></i><strong>84%</strong></p><p><span>Third-party support</span><i><b style={{ width: "69%" }} /></i><strong>69%</strong></p></div>
          <footer><span>Next opportunity</span><strong>Add first-hand examples and supporting sources</strong></footer>
        </div>
        <div className="geo-content-copy"><p className="eyebrow">Citation-worthy content</p><h2>Give AI systems a reason to use your website as a source.</h2><p>Generic content repeats what thousands of other pages already say. Stronger resources contribute something identifiable: first-hand experience, original examples, useful comparisons, clear definitions, local knowledge, documented processes, or proprietary data.</p><p>We extract that knowledge from your business and shape it into pages that help real customers make decisions. That is more durable than publishing large volumes of interchangeable AI copy.</p><a className="button button-purple" href="/contact">Plan Your Content Strategy</a></div>
      </section>

      <section className="geo-local-section">
        <div className="geo-local-copy"><p className="eyebrow">AI search for local businesses</p><h2>Local relevance still matters when the answer is generated.</h2><p>Customers are asking increasingly specific questions about who serves their area, which provider fits their situation, and what they should do next. AI systems may draw from websites, business profiles, reviews, directories, publishers, and other local sources to build that response.</p><ul><li>Accurate business and location information</li><li>Complete service and service-area coverage</li><li>Helpful local expertise and examples</li><li>Consistent profiles, citations, and reviews</li><li>Clear differentiators and conversion paths</li></ul><a className="capability-button" href="/local-seo">Explore Local SEO <ArrowIcon /></a></div>
        <div className="geo-local-panel" aria-label="Local AI search visibility illustration"><div className="geo-map-grid" /><span className="geo-map-pin geo-pin-one">1</span><span className="geo-map-pin geo-pin-two">2</span><span className="geo-map-pin geo-pin-three">3</span><article><small>LOCAL ANSWER COVERAGE</small><strong>14 cited sources</strong><p>Website · Business Profile · Reviews · Local publications</p><div><i /><i /><i /><i /><i /></div></article></div>
      </section>

      <section className="geo-expectations">
        <div className="geo-expectations-heading"><p className="eyebrow">No-hype GEO strategy</p><h2>What matters and what does not.</h2></div>
        <div className="geo-expectations-grid"><article><span>Focus here</span><ul><li>Accessible, indexable pages</li><li>Original and expert-led information</li><li>Clear entities and business details</li><li>Relevant third-party authority</li><li>Accurate schema and internal structure</li><li>Useful measurement and iteration</li></ul></article><article><span>Be skeptical of</span><ul><li>Guaranteed AI recommendations</li><li>One-time prompt-ranking reports</li><li>Special markup that promises inclusion</li><li>Mass-produced answer pages</li><li>Inauthentic mentions and citations</li><li>Tactics disconnected from customers</li></ul></article></div>
      </section>

      <section className="geo-measurement">
        <div className="geo-section-heading"><div><p className="eyebrow">AI visibility measurement</p><h2>Track evidence, not a made-up AI ranking.</h2></div><p>Generative answers change by query, context, location, platform, and time. Measurement needs multiple signals instead of one fixed position.</p></div>
        <div className="geo-metric-grid"><article><span>01</span><strong>Citations</strong><p>Where supported platforms report that your pages were used as sources.</p></article><article><span>02</span><strong>Referral traffic</strong><p>Visits and engagement from ChatGPT, Copilot, Perplexity, and other AI experiences.</p></article><article><span>03</span><strong>Search visibility</strong><p>Organic impressions, clicks, local visibility, cited queries, and branded demand.</p></article><article><span>04</span><strong>Business outcomes</strong><p>Calls, forms, qualified leads, assisted journeys, and revenue opportunities.</p></article></div>
      </section>

      <section className="geo-process">
        <div className="geo-section-heading"><div><p className="eyebrow">Our GEO &amp; AEO process</p><h2>Strengthen what search systems can find, understand, and verify.</h2></div><p>The strategy begins with your actual business, customers, expertise, and market. The technology serves that foundation.</p></div>
        <div className="geo-process-grid">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="geo-faq">
        <div className="geo-faq-heading"><p className="eyebrow">GEO &amp; AEO FAQs</p><h2>Questions businesses are asking about AI search.</h2></div>
        <div className="geo-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <SiteFooter variant="geo-aeo" />
    </main>
  );
}
