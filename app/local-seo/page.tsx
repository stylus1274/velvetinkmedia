import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const services = [
  {
    number: "01",
    title: "Local SEO Strategy",
    copy: "We map your services, locations, competitors, search demand, and current visibility to find the opportunities most likely to produce qualified local leads.",
    tags: ["Keyword research", "Competitor gaps", "Roadmap"],
    accent: "peach",
  },
  {
    number: "02",
    title: "Google Business Profile",
    copy: "We optimize the categories, services, business details, photos, posts, questions, and conversion paths that shape how customers experience your profile.",
    tags: ["Google Maps", "Local pack", "Profile health"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Local Content",
    copy: "We create service, location, and supporting content that answers real questions, demonstrates expertise, and matches the way Tampa customers search.",
    tags: ["Service pages", "Location content", "Topic authority"],
    accent: "purple",
  },
  {
    number: "04",
    title: "Reviews & Reputation",
    copy: "We help you build a consistent, policy-compliant review process and use customer feedback to strengthen trust, visibility, and conversion rates.",
    tags: ["Review growth", "Responses", "Sentiment"],
    accent: "lime",
  },
  {
    number: "05",
    title: "Local Authority",
    copy: "We improve citation accuracy and pursue relevant local, industry, and community signals that reinforce where you operate and what you are known for.",
    tags: ["Citations", "Local links", "Entity signals"],
    accent: "mint",
  },
  {
    number: "06",
    title: "Technical SEO & Reporting",
    copy: "We improve site structure, crawlability, schema, speed, and tracking, then connect rankings and visibility to calls, forms, appointments, and revenue opportunities.",
    tags: ["Schema", "Site health", "Conversions"],
    accent: "rose",
  },
];

const process = [
  ["01", "Audit the market", "We review your website, Google Business Profile, rankings, reviews, citations, competitors, service areas, and conversion tracking."],
  ["02", "Set the priorities", "You receive a focused roadmap based on search demand, competitive gaps, technical needs, and the services that matter most to the business."],
  ["03", "Build and optimize", "We improve the website, local content, Business Profile, reputation signals, citations, authority, and measurement foundation."],
  ["04", "Measure and refine", "We track meaningful movement, explain what changed, and adjust the strategy using rankings, visibility, engagement, and lead data."],
];

const industries = [
  ["Home services", "Plumbers, roofers, remodelers, electricians, HVAC companies, landscapers, and other service-area businesses."],
  ["Professional services", "Law firms, accountants, consultants, financial professionals, and businesses built around expertise and trust."],
  ["Healthcare & wellness", "Medical practices, dentists, therapists, chiropractors, senior services, and appointment-based providers."],
  ["Retail & hospitality", "Restaurants, shops, venues, and location-based businesses that depend on visits, calls, directions, and reservations."],
  ["Multi-location businesses", "Companies that need distinct local visibility, accurate profiles, and useful pages for multiple offices or service markets."],
  ["Specialty local businesses", "Mobility providers, contractors, niche retailers, and businesses with complex services or longer customer journeys."],
];

const serviceAreas = [
  "Tampa",
  "Downtown Tampa",
  "South Tampa",
  "West Tampa",
  "Seminole Heights",
  "Carrollwood",
  "Westchase",
  "New Tampa",
  "Temple Terrace",
  "Brandon",
  "Riverview",
  "Valrico",
  "Gibsonton",
  "Apollo Beach",
  "Plant City",
];

const faqs = [
  {
    question: "What is local SEO?",
    answer: "Local SEO is the process of improving a business's visibility for searches connected to a specific location or service area. It brings together Google Business Profile optimization, website content, technical SEO, reviews, citations, local authority, and conversion tracking so nearby customers can find and choose the business.",
  },
  {
    question: "How is local SEO different from traditional SEO?",
    answer: "Traditional SEO can target broad or national search demand. Local SEO focuses on searches influenced by location and includes signals such as Google Business Profiles, proximity, local relevance, reviews, citations, and location-specific content. Many Tampa businesses need both because map results and organic results often appear on the same search page.",
  },
  {
    question: "How long does local SEO take?",
    answer: "Meaningful progress usually develops over several months, but timing depends on your starting point, competition, location, website quality, review profile, and how quickly improvements are implemented. Early wins may appear sooner, while competitive services and markets typically require sustained work.",
  },
  {
    question: "Can you guarantee first-place rankings or a Google Maps 3-pack position?",
    answer: "No credible SEO company can guarantee a specific position. Google controls its ranking systems, results vary by searcher and location, and proximity cannot be optimized away. We improve the relevance, prominence, website quality, profile strength, and conversion experience your business can control.",
  },
  {
    question: "Can a service-area business rank in cities where it does not have an office?",
    answer: "A service-area business can build organic visibility in communities it genuinely serves, but Google Maps visibility is still influenced by the searcher's location and the business's verified location. Adding cities to a profile does not guarantee rankings there. We focus on accurate service areas, useful local content, authority, and realistic market priorities.",
  },
  {
    question: "Do I need a Google Business Profile?",
    answer: "If your business meets Google's eligibility requirements and serves customers locally, a complete and accurately managed Business Profile is one of the most important parts of local search visibility. It supports appearances in Google Maps, the local pack, and branded search results.",
  },
  {
    question: "Do reviews affect local SEO?",
    answer: "Reviews support prominence and customer trust, but volume alone is not a complete strategy. Recency, rating, responsiveness, authenticity, and how your review profile compares with local competitors can all influence customer decisions. We use policy-compliant review processes and never recommend fake or incentivized reviews.",
  },
  {
    question: "Do citations still matter?",
    answer: "Accurate listings still help confirm core business information and prevent customers from finding conflicting names, addresses, phone numbers, or hours. Citation work should focus on accuracy and relevant platforms rather than submitting the business to hundreds of low-quality directories.",
  },
  {
    question: "What are GEO and AEO, and how do they connect to local SEO?",
    answer: "Generative Engine Optimization and Answer Engine Optimization describe efforts to improve visibility in AI-generated answers and recommendation experiences. They do not replace SEO. Clear site structure, useful expert content, strong business information, local authority, and trustworthy third-party signals support visibility across traditional and AI-driven search.",
  },
  {
    question: "How do you measure local SEO performance?",
    answer: "We look beyond a single ranking. Reporting can include Google Maps visibility across a geographic grid, organic rankings, Business Profile actions, website traffic, calls, forms, appointments, directions, lead quality, and landing-page performance. The final measurement plan depends on how your business generates revenue.",
  },
  {
    question: "Do I need a new website before starting local SEO?",
    answer: "Not always. We first evaluate whether your current website can support the strategy. If its structure, speed, mobile usability, content, or conversion path is limiting results, we will explain what should be improved and whether targeted changes or a full redesign makes more sense.",
  },
  {
    question: "Do you work outside Tampa?",
    answer: "Yes. Velvet Ink Media is based in Tampa and works with businesses across Florida and beyond. This page focuses on Tampa because local strategy should reflect the actual market, customer behavior, competition, and service area of each business.",
  },
];

export const metadata: Metadata = {
  title: "Local SEO Services Tampa, FL | Velvet Ink Media",
  description:
    "Grow visibility in Google Maps and local search with Tampa local SEO services covering GBP, content, reviews, citations, technical SEO and reporting.",
  alternates: {
    canonical: "https://www.velvetinkmedia.com/local-seo/",
  },
  openGraph: {
    title: "Local SEO Services in Tampa, FL | Velvet Ink Media",
    description:
      "Build stronger visibility in Google Maps, local organic results, and AI-driven search with a practical Tampa local SEO strategy.",
    url: "https://www.velvetinkmedia.com/local-seo/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.velvetinkmedia.com/#organization",
      name: "Velvet Ink Media",
      url: "https://www.velvetinkmedia.com/",
      telephone: "+1-813-797-5515",
      email: "hello@velvetinkmedia.com",
      foundingDate: "2008",
      description: "Tampa digital marketing agency providing local SEO, web design, paid media, content, and reputation services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1101 E Cumberland Ave #201H",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33602",
        addressCountry: "US",
      },
      areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
      knowsAbout: [
        "Local SEO",
        "Google Business Profile optimization",
        "Google Maps SEO",
        "Local content strategy",
        "Reputation management",
        "Technical SEO",
        "Generative Engine Optimization",
        "Answer Engine Optimization",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.velvetinkmedia.com/local-seo/#service",
      name: "Local SEO Services in Tampa",
      serviceType: "Local search engine optimization",
      url: "https://www.velvetinkmedia.com/local-seo/",
      provider: { "@id": "https://www.velvetinkmedia.com/#organization" },
      areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
      description: "Local SEO services for Tampa businesses including Google Business Profile optimization, local content, technical SEO, reviews, citations, local authority, and conversion reporting.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.velvetinkmedia.com/local-seo/#breadcrumbs",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "Local SEO Services", item: "https://www.velvetinkmedia.com/local-seo/" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.velvetinkmedia.com/local-seo/#faq",
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

export default function LocalSeoPage() {
  return (
    <main className="local-seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="local-seo" />

      <section className="lse-hero">
        <div className="lse-hero-copy">
          <p className="eyebrow">Tampa local SEO company</p>
          <h1>Local SEO services for <span>Tampa businesses.</span></h1>
          <p className="lse-lead">We help Tampa businesses improve Google Maps visibility, earn stronger local organic rankings, and turn high-intent searches into calls, appointments, visits, and qualified leads.</p>
          <div className="hero-actions">
            <a className="button button-purple" href="/contact">Request a Local SEO Audit</a>
            <a className="button button-outline" href="#services">Explore Local SEO Services</a>
          </div>
          <ul className="lse-hero-points" aria-label="Local SEO benefits">
            <li>Tampa-based since 2008</li><li>Google Maps + organic search</li><li>Lead-focused reporting</li>
          </ul>
        </div>
        <div className="lse-hero-visual" aria-label="Local SEO performance dashboard">
          <div className="lse-grid" aria-hidden="true" />
          <div className="lse-laptop-frame"><Image src="/velvet-ink-hero-laptop.webp" width={1254} height={1254} alt="Local SEO dashboard showing Tampa map rankings and search performance" preload /></div>
          <div className="lse-map-card"><span className="lse-map-pin" aria-hidden="true" /><div><strong>Google Maps</strong><small>Local visibility improving</small></div><b>+38%</b></div>
          <div className="lse-rank-card"><small>Priority search</small><strong>#3</strong><span>Up 6 positions</span></div>
        </div>
      </section>

      <section className="lse-summary-section" id="approach">
        <div>
          <p className="eyebrow">Local SEO, explained clearly</p>
          <h2>Help nearby customers find and choose your business.</h2>
        </div>
        <div className="lse-summary-copy">
          <p>Local SEO improves how your business appears when people search for a product, service, or provider in a specific area. That includes results in Google Maps, the local pack, organic search, branded results, and increasingly, AI-generated recommendations.</p>
          <p>The goal is not traffic for its own sake. The goal is to become visible when the right customer has a real need, then give that person enough relevance, proof, and clarity to take the next step.</p>
          <a className="capability-button" href="#how-local-rankings-work">See How Local Rankings Work <ArrowIcon /></a>
        </div>
      </section>

      <section className="lse-ranking-section" id="how-local-rankings-work">
        <div className="lse-section-heading">
          <div><p className="eyebrow">How local rankings work</p><h2>Google evaluates relevance, distance, and prominence.</h2></div>
          <p>A strong strategy improves the signals you can control while setting realistic expectations for the factors you cannot.</p>
        </div>
        <div className="lse-factor-grid">
          <article><span>01</span><h3>Relevance</h3><p>How closely your Business Profile, website, services, content, categories, and business information match what someone is searching for.</p><strong>We improve:</strong><ul><li>Categories and services</li><li>Local keyword alignment</li><li>Service and location content</li><li>Structured business information</li></ul></article>
          <article><span>02</span><h3>Distance</h3><p>How far the business is from the location used in the search. Results can change as the searcher moves across Tampa Bay.</p><strong>Important reality:</strong><ul><li>Proximity cannot be optimized away</li><li>Service areas do not guarantee coverage</li><li>Map rankings vary by neighborhood</li><li>Grid tracking shows the real picture</li></ul></article>
          <article><span>03</span><h3>Prominence</h3><p>How established and trusted the business appears based on reviews, links, citations, brand mentions, website authority, and offline reputation.</p><strong>We strengthen:</strong><ul><li>Review quality and consistency</li><li>Relevant local citations</li><li>Local and industry authority</li><li>Useful, expert-led content</li></ul></article>
        </div>
      </section>

      <section className="lse-services" id="services">
        <div className="lse-section-heading">
          <div><p className="eyebrow">Tampa local SEO services</p><h2>Every local signal working toward the same goal.</h2></div>
          <p>No mystery checklist and no generic monthly activity report. Each recommendation should improve relevance, local authority, customer trust, or the path from search to lead.</p>
        </div>
        <div className="lse-service-grid">
          {services.map((service) => (
            <article className={`lse-service-card ${service.accent}`} key={service.number}>
              <div className="lse-service-top"><span>{service.number}</span><i aria-hidden="true" /></div>
              <h3>{service.title}</h3><p>{service.copy}</p>
              <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="lse-gbp-section">
        <div className="lse-gbp-copy">
          <p className="eyebrow">Google Business Profile optimization</p>
          <h2>Make your most visible local listing more useful.</h2>
          <p>Your Google Business Profile can appear before a customer ever reaches your website. It needs to communicate accurate information, match relevant searches, earn trust, and make calling, visiting, requesting directions, or booking as simple as possible.</p>
          <ul className="lse-check-list">
            <li>Primary and secondary category review</li><li>Services, products, attributes, and description</li><li>Name, address, phone, hours, and website accuracy</li><li>Photo, post, and question opportunities</li><li>Duplicate, suspension, and guideline risk checks</li><li>Call, website, direction, and engagement tracking</li>
          </ul>
          <a className="button button-purple" href="/contact">Improve Your Google Profile</a>
        </div>
        <div className="lse-gbp-board" aria-label="Google Business Profile optimization overview">
          <div className="lse-gbp-search"><span aria-hidden="true" />local seo company tampa<b>Search</b></div>
          <article className="lse-gbp-listing">
            <div className="lse-gbp-logo">V</div><div><strong>Velvet Ink Media</strong><p>Marketing agency · Tampa, FL</p><span>★★★★★</span> <small>Local marketing and SEO services</small></div>
          </article>
          <div className="lse-gbp-actions"><span>Website</span><span>Directions</span><span>Call</span></div>
          <div className="lse-gbp-health"><div><small>Profile completeness</small><strong>Strong</strong></div><b>92%</b></div>
          <div className="lse-gbp-health"><div><small>Local relevance</small><strong>Improving</strong></div><b>+24%</b></div>
        </div>
      </section>

      <section className="lse-site-section">
        <div className="lse-section-heading">
          <div><p className="eyebrow">Local website optimization</p><h2>Your website must support what your Google profile promises.</h2></div>
          <p>A Business Profile can earn attention, but your website often determines whether that attention becomes a lead. We connect local search strategy with useful pages and a clear customer journey.</p>
        </div>
        <div className="lse-site-grid">
          <article><span>01</span><h3>Service pages</h3><p>Dedicated pages explain each core service clearly, address customer concerns, show expertise, and target searches with meaningful commercial intent.</p></article>
          <article><span>02</span><h3>Location strategy</h3><p>Location pages are created only when the business genuinely serves the market and can provide unique, useful information beyond swapping city names.</p></article>
          <article><span>03</span><h3>Technical foundation</h3><p>Internal links, crawlability, mobile usability, page speed, metadata, schema, and site architecture help search engines understand the business.</p></article>
          <article><span>04</span><h3>Conversion experience</h3><p>Clear calls to action, trust signals, readable content, contact options, and focused landing pages help turn local visibility into measurable opportunities.</p></article>
        </div>
        <div className="lse-site-cta"><div><strong>Does the current website limit your local SEO?</strong><p>We can improve the existing foundation or connect the strategy with a complete website redesign.</p></div><a className="capability-button" href="/web-design">Explore Tampa Web Design <ArrowIcon /></a></div>
      </section>

      <section className="lse-authority-section">
        <div className="lse-authority-heading">
          <p className="eyebrow">Reviews, citations &amp; local authority</p>
          <h2>Build the proof customers and search platforms look for.</h2>
          <p>Local visibility is not created by one profile or one page. Consistent business information, authentic customer feedback, relevant mentions, and community or industry connections help confirm that a business is legitimate, established, and worth considering.</p>
        </div>
        <div className="lse-authority-grid">
          <article><span>01</span><div><h3>Review strategy</h3><p>Create a repeatable process for requesting authentic reviews, responding appropriately, monitoring feedback, and turning common themes into better customer messaging.</p></div></article>
          <article><span>02</span><div><h3>Citation accuracy</h3><p>Find and correct inconsistent business information across major platforms, maps, data providers, industry directories, and useful local listings.</p></div></article>
          <article><span>03</span><div><h3>Local links &amp; mentions</h3><p>Pursue relevant relationships, organizations, sponsorships, publications, associations, and resources that build real local or industry authority.</p></div></article>
        </div>
      </section>

      <section className="lse-ai-section">
        <div className="lse-ai-copy">
          <p className="eyebrow">SEO, GEO &amp; AEO</p>
          <h2>Get found in search. Become the answer.</h2>
          <p>Customers still use Google Search and Maps, but they also ask AI tools for recommendations, comparisons, and direct answers. GEO and AEO do not replace SEO. Clear technical structure, expert content, accurate business information, strong local authority, and trustworthy third-party signals give traditional and AI-driven systems better information to work with.</p>
          <p>We focus on durable search fundamentals and original business expertise, not unsupported AI-search shortcuts.</p>
          <a className="button button-purple" href="/contact">Build Your Visibility Strategy</a>
        </div>
        <div className="lse-answer-panel" aria-label="How local search visibility supports AI answers">
          <p>One connected foundation</p>
          <div><span>01</span><strong>Technical clarity</strong><small>Fast pages, crawlable content, schema, and clean structure</small></div>
          <div><span>02</span><strong>Useful expertise</strong><small>Specific answers, first-hand knowledge, and clear service information</small></div>
          <div><span>03</span><strong>Local authority</strong><small>Reviews, citations, relevant links, and consistent business details</small></div>
          <div className="lse-answer-result"><span aria-hidden="true">✦</span><strong>More opportunities to appear across search experiences</strong></div>
        </div>
      </section>

      <section className="lse-process">
        <div className="lse-section-heading">
          <div><p className="eyebrow">Our local SEO process</p><h2>A clear plan without the agency fog.</h2></div>
          <p>You should understand what we are doing, why it matters, what changed, and whether the work is creating better opportunities for the business.</p>
        </div>
        <div className="lse-process-grid">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="lse-reporting-section">
        <div className="lse-reporting-copy">
          <p className="eyebrow">Local SEO reporting</p>
          <h2>Measure visibility by what it produces.</h2>
          <p>Rankings matter, but a single ranking checked from one device does not represent the entire Tampa market. We combine search visibility with customer actions and conversion data so reporting reflects the way people actually find and contact the business.</p>
          <p>Every measurement plan is shaped around the business model. A law firm, a restaurant, a home service company, and a multi-location medical practice do not define a qualified lead in the same way.</p>
        </div>
        <div className="lse-metric-board">
          <div><span>01</span><strong>Map visibility</strong><small>Geographic grid coverage and local pack movement</small></div>
          <div><span>02</span><strong>Organic rankings</strong><small>Service, location, informational, and branded searches</small></div>
          <div><span>03</span><strong>Profile actions</strong><small>Calls, website visits, directions, messages, and bookings</small></div>
          <div><span>04</span><strong>Website conversions</strong><small>Forms, calls, appointments, sales, and lead quality</small></div>
          <div><span>05</span><strong>Business outcomes</strong><small>Qualified opportunities, close rate context, and revenue impact</small></div>
        </div>
      </section>

      <section className="lse-area-section">
        <div className="lse-area-map" aria-hidden="true">
          <div className="area-ring ring-one" /><div className="area-ring ring-two" />
          <span className="area-pin main-pin">Tampa</span><span className="area-pin riverview-pin">Riverview</span><span className="area-pin brandon-pin">Brandon</span>
        </div>
        <div className="lse-area-copy">
          <p className="eyebrow">Tampa Bay service area</p>
          <h2>Local strategy shaped by the market you actually serve.</h2>
          <p>Search behavior, competition, proximity, and customer expectations can change from Downtown Tampa to South Tampa, Carrollwood, Brandon, or Riverview. We prioritize the communities tied to real customers and realistic service coverage.</p>
          <div className="lse-area-list" aria-label="Tampa area communities served">{serviceAreas.map((area) => <span key={area}>{area}</span>)}</div>
          <p className="lse-area-note">Serving an area does not automatically create Google Maps visibility there. Our strategy accounts for proximity and builds organic coverage without creating thin, duplicated city pages.</p>
          <a className="capability-button" href="/contact">Talk With a Tampa Local SEO Specialist <ArrowIcon /></a>
        </div>
      </section>

      <section className="lse-industry-section">
        <div className="lse-section-heading">
          <div><p className="eyebrow">Local SEO for Tampa businesses</p><h2>Built around how your customers search and choose.</h2></div>
          <p>The same tactics do not fit every industry. Search intent, sales cycles, service areas, regulations, competition, and conversion paths should shape the strategy.</p>
        </div>
        <div className="lse-industry-grid">{industries.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="lse-resources-section">
        <div className="lse-resources-heading"><p className="eyebrow">Tampa local SEO resources</p><h2>Useful answers before you hire an SEO company.</h2><p>Strong partnerships start with informed decisions. These resources explain key parts of local visibility in plain language.</p></div>
        <div className="lse-resource-grid">
          <a href="https://www.velvetinkmedia.com/google-business-profile-optimization-tampa/"><span>Google Business Profile</span><h3>Optimization tips for Tampa businesses</h3><b>Read the article <ArrowIcon /></b></a>
          <a href="https://www.velvetinkmedia.com/top-5-local-seo-tips-for-tampa-small-businesses/"><span>Local SEO strategy</span><h3>Five practical tips for Tampa small businesses</h3><b>Read the article <ArrowIcon /></b></a>
          <a href="https://www.velvetinkmedia.com/seo-services-tampa/"><span>Search visibility</span><h3>What Tampa SEO services should include</h3><b>Read the article <ArrowIcon /></b></a>
        </div>
      </section>

      <section className="lse-faq">
        <div className="lse-faq-heading"><p className="eyebrow">Local SEO FAQs</p><h2>Questions Tampa businesses ask before getting started.</h2></div>
        <div className="lse-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <SiteFooter variant="local-seo" />
    </main>
  );
}
