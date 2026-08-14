import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

const services = [
  {
    number: "01",
    title: "Google Search Ads",
    copy: "Capture high-intent searches with focused campaigns, tightly organized ad groups, useful messaging, and clear paths to conversion.",
    tags: ["Search intent", "Ad copy", "Bidding"],
    accent: "purple",
  },
  {
    number: "02",
    title: "Local Lead Campaigns",
    copy: "Reach customers in the locations you actually serve with geographic targeting, local messaging, call-focused ads, and practical budget controls.",
    tags: ["Tampa targeting", "Calls", "Service areas"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Paid Social",
    copy: "Use audience, creative, and offer strategy to introduce the business, generate demand, and reconnect with people who already know the brand.",
    tags: ["Meta Ads", "Creative", "Audiences"],
    accent: "peach",
  },
  {
    number: "04",
    title: "Remarketing",
    copy: "Bring qualified visitors back with relevant follow-up messages shaped around the pages, services, or offers they previously explored.",
    tags: ["Retargeting", "Segments", "Follow-up"],
    accent: "lime",
  },
  {
    number: "05",
    title: "Landing Pages",
    copy: "Connect every campaign to a focused page that matches the ad, answers the next question, builds trust, and makes taking action easy.",
    tags: ["Message match", "CRO", "Mobile UX"],
    accent: "mint",
  },
  {
    number: "06",
    title: "Tracking & Optimization",
    copy: "Measure calls, forms, bookings, sales, and lead quality so budget decisions are based on business outcomes instead of surface-level clicks.",
    tags: ["GA4", "Conversions", "Lead quality"],
    accent: "rose",
  },
];

const process = [
  ["01", "Define the goal", "We clarify the offer, ideal customer, service area, conversion action, budget, and the business result the campaign must support."],
  ["02", "Build the system", "We structure campaigns, research demand, write ads, configure audiences, prepare landing pages, and verify conversion tracking."],
  ["03", "Launch carefully", "We confirm targeting, exclusions, budgets, devices, schedules, URLs, forms, calls, and reporting before meaningful spend begins."],
  ["04", "Improve with evidence", "We review search terms, costs, conversion rates, creative, landing pages, and lead quality to make disciplined adjustments."],
];

const faqs = [
  {
    question: "How much should a Tampa business spend on Google Ads?",
    answer: "The right budget depends on search volume, cost per click, competition, service value, close rate, and how many qualified leads the business can handle. We estimate what the market can support before recommending a starting budget. A smaller focused campaign is usually better than spreading a limited budget across too many services and locations.",
  },
  {
    question: "How quickly can paid media generate leads?",
    answer: "Paid campaigns can begin producing traffic as soon as they are approved and active, but reliable performance data takes time. Early results are used to identify search quality, conversion issues, and budget pressure. Sustainable improvement comes from ongoing optimization, not judging the account after a handful of clicks.",
  },
  {
    question: "Do you guarantee a specific number of leads?",
    answer: "No. Lead volume and cost depend on market demand, competition, budget, offer strength, landing-page quality, seasonality, and sales follow-up. We build the strongest controllable system, report honestly, and use real performance data to improve efficiency and lead quality.",
  },
  {
    question: "What is the difference between Google Ads and SEO?",
    answer: "Google Ads can place a business in sponsored results while the campaign is funded. SEO builds organic visibility over time. Paid search offers speed, control, and testing opportunities, while SEO can create more durable visibility. Many local businesses benefit from using both around the same priority services.",
  },
  {
    question: "Do I need a separate landing page?",
    answer: "Not every campaign needs a new page, but sending paid traffic to a generic homepage often creates unnecessary friction. A dedicated landing page is usually worthwhile when it can improve message match, focus the offer, answer objections, and make the conversion action clearer.",
  },
  {
    question: "Can you track phone calls from ads?",
    answer: "Yes. Call assets, website call tracking, forms, bookings, and other meaningful actions can be measured. The setup depends on the website, phone system, privacy requirements, and how the business handles leads.",
  },
  {
    question: "Will I own the advertising account?",
    answer: "Yes. The business should own its advertising accounts, billing relationships, conversion data, and historical performance. Velvet Ink Media manages the work through appropriate account access instead of holding the account hostage.",
  },
  {
    question: "Can you take over an existing Google Ads account?",
    answer: "Yes. We first audit the account structure, search terms, targeting, conversions, budgets, bidding, ads, landing pages, and change history. We preserve useful data and rebuild only where the existing setup limits performance or clarity.",
  },
  {
    question: "Do you manage paid social campaigns?",
    answer: "Yes. Paid social can support awareness, demand generation, remarketing, event promotion, offers, and lead generation. The platform and campaign type should be selected based on audience behavior and the business goal rather than used by default.",
  },
  {
    question: "How do you report paid media performance?",
    answer: "Reporting connects spend and campaign activity to useful outcomes such as qualified calls, forms, appointments, sales, cost per lead, conversion rate, and lead quality. Clicks and impressions provide context, but they are not the final measure of success.",
  },
];

export const metadata: Metadata = {
  title: "Google Ads & Paid Media Services Tampa | Velvet Ink Media",
  description:
    "Generate qualified leads with Tampa Google Ads and paid media management covering search, paid social, landing pages, tracking and optimization.",
  alternates: {
    canonical: "https://www.velvetinkmedia.com/paid-media/",
  },
  openGraph: {
    title: "Paid Media & Google Ads Management in Tampa",
    description:
      "Focused advertising campaigns built around qualified leads, clean measurement, and accountable growth.",
    url: "https://www.velvetinkmedia.com/paid-media/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.velvetinkmedia.com/paid-media/#service",
      name: "Paid Media and Google Ads Management",
      serviceType: "Paid media management",
      url: "https://www.velvetinkmedia.com/paid-media/",
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
      description: "Paid media services for Tampa businesses including Google Search Ads, paid social, remarketing, landing pages, conversion tracking, and campaign optimization.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "Paid Media", item: "https://www.velvetinkmedia.com/paid-media/" },
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
        <a href="/services">Services</a><a href="/about-us">About</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/paid-media" aria-current="page">Paid Media</a><a href="/work">Work</a><a href="/blog">Insights</a><a href="/contact">Contact</a>
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation"><a href="/services">Services</a><a href="/about-us">About</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/paid-media" aria-current="page">Paid Media</a><a href="/work">Work</a><a href="/blog">Insights</a><a href="/contact">Contact</a></nav>
      </details>
      <a className="button button-purple header-cta" href="/contact">Start a Project</a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-cta">
        <div className="footer-cta-copy">
          <p className="footer-eyebrow">Let&apos;s talk</p>
          <h2>Let&apos;s make every click more accountable.</h2>
          <p>Tell us what you are promoting, who you need to reach, and where the current campaign is falling short. We&apos;ll help you identify the strongest next move.</p>
          <div className="footer-actions">
            <a className="footer-button footer-button-light" href="tel:+18137975515">Call 813-797-5515</a>
            <a className="footer-button footer-button-outline" href="mailto:hello@velvetinkmedia.com?subject=Paid%20Media%20Consultation">Request a Paid Media Review</a>
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
        <div className="footer-brand-column"><a className="footer-brand" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a><p>A Tampa marketing agency connecting paid media, local SEO, web design, and measurement around real business growth.</p></div>
        <nav className="footer-column" aria-label="Footer services"><h3>Services</h3><a href="/services">All Services</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/content-marketing">Content Marketing</a><a href="/social-media">Social Media</a><a href="/paid-media">Paid Media</a></nav>
        <nav className="footer-column" aria-label="Footer company links"><h3>Company</h3><a href="/about-us">About Us</a><a href="/blog">Insights</a><a href="/#proof">Our Approach</a><a href="/contact">Contact</a></nav>
        <div className="footer-column footer-contact-column"><h3>Contact</h3><a href="tel:+18137975515">813-797-5515</a><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a><address>Tampa, FL 33602</address></div>
      </div>
      <div className="footer-bottom"><p>© 2026 Velvet Ink Media. All rights reserved.</p><div><a href="#top">Privacy</a><a href="#top">Terms</a></div></div>
    </footer>
  );
}

function SearchAdGraphic() {
  return (
    <div className="pms-ad-stage" aria-label="Paid search campaign interface">
      <div className="pms-grid" aria-hidden="true" />
      <div className="pms-search-window">
        <div className="pms-window-chrome"><span /><span /><span /><b>Search campaign</b></div>
        <div className="pms-search-bar"><i aria-hidden="true" /><strong>marketing agency tampa</strong><span>Search</span></div>
        <article className="pms-search-ad">
          <div className="pms-ad-brand"><b>V</b><span><strong>Velvet Ink Media</strong><small>velvetinkmedia.com</small></span></div>
          <p>Sponsored</p>
          <h3>Tampa Digital Marketing That Drives Qualified Leads</h3>
          <div>Focused local SEO, paid media, and web design built around measurable growth.</div>
          <ul><li>Local SEO Services</li><li>Google Ads Management</li><li>Web Design</li></ul>
        </article>
      </div>
      <div className="pms-roas-card"><small>Return on ad spend</small><strong>4.2x</strong><span>↑ 18% this month</span><div><i /><i /><i /><i /><i /></div></div>
      <div className="pms-lead-card"><span>Qualified leads</span><strong>+31%</strong><div><i /><i /><i /><i /></div></div>
      <div className="pms-target-card" aria-hidden="true"><span /><span /><span /><b>813</b></div>
    </div>
  );
}

export default function PaidMediaPage() {
  return (
    <main className="paid-media-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="paid-media" />

      <section className="pms-hero">
        <div className="pms-hero-copy">
          <p className="eyebrow">Paid media services for Tampa businesses</p>
          <h1>Turn ad spend into <span>qualified demand.</span></h1>
          <p className="pms-lead">We build and manage paid search and social campaigns around the customers, services, locations, and conversion actions that matter most to your business.</p>
          <div className="hero-actions"><a className="button button-purple" href="/contact">Request a Campaign Review</a><a className="button button-outline" href="#services">Explore Paid Media Services</a></div>
          <ul className="pms-hero-points" aria-label="Paid media benefits"><li>Intent-focused targeting</li><li>Clean conversion tracking</li><li>Lead-quality optimization</li></ul>
        </div>
        <SearchAdGraphic />
      </section>

      <section className="pms-context-section">
        <div><p className="eyebrow">Paid media with a business purpose</p><h2>Clicks are an expense. Qualified opportunities create value.</h2></div>
        <div className="pms-context-copy"><p>Paid media can produce fast visibility, but speed without strategy burns through budget. A useful campaign connects customer intent, targeting, ad messaging, landing-page experience, tracking, and sales feedback.</p><p>We manage the entire path so performance is judged by what happens after the click, not by a dashboard full of impressive-looking activity.</p><a className="capability-button" href="#campaign-system">See the Campaign System <ArrowIcon /></a></div>
      </section>

      <section className="pms-services-section" id="services">
        <div className="pms-section-heading"><div><p className="eyebrow">Paid media management services</p><h2>Strategy, campaigns, creative, and measurement connected.</h2></div><p>The strongest channel depends on how customers discover the offer, how quickly they need it, and what must happen before they are ready to convert.</p></div>
        <div className="pms-service-grid">{services.map((service) => <article className={`pms-service-card ${service.accent}`} key={service.number}><div className="pms-service-top"><span>{service.number}</span><i /></div><h3>{service.title}</h3><p>{service.copy}</p><ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section className="pms-system-section" id="campaign-system">
        <div className="pms-system-copy"><p className="eyebrow">The paid media system</p><h2>Make every step support the next one.</h2><p>A campaign is only as strong as the connection between the search, ad, page, conversion, and follow-up. If one stage creates friction, the cost shows up somewhere else.</p></div>
        <div className="pms-flow" aria-label="Paid advertising customer journey">
          <article><span>01</span><div className="pms-flow-icon pms-flow-search"><i /></div><h3>Intent</h3><p>A customer searches, scrolls, compares, or signals interest.</p></article>
          <i className="pms-flow-arrow" />
          <article><span>02</span><div className="pms-flow-icon pms-flow-ad"><b>Ad</b></div><h3>Message</h3><p>The ad matches the need and earns the right click.</p></article>
          <i className="pms-flow-arrow" />
          <article><span>03</span><div className="pms-flow-icon pms-flow-page"><i /><i /><i /></div><h3>Experience</h3><p>The landing page builds trust and removes hesitation.</p></article>
          <i className="pms-flow-arrow" />
          <article><span>04</span><div className="pms-flow-icon pms-flow-lead">✓</div><h3>Conversion</h3><p>The right person calls, submits, books, visits, or buys.</p></article>
        </div>
      </section>

      <section className="pms-search-section">
        <div className="pms-search-visual" aria-label="Google Ads campaign structure">
          <div className="pms-campaign-header"><span>Google Ads</span><strong>Campaign overview</strong><b>Last 30 days</b></div>
          <div className="pms-campaign-metrics"><article><small>Conversions</small><strong>48</strong><span>+23%</span></article><article><small>Cost / lead</small><strong>$62</strong><span>−14%</span></article><article><small>Conversion rate</small><strong>8.7%</strong><span>+1.6%</span></article></div>
          <div className="pms-campaign-chart"><span>Qualified lead trend</span><div>{[30,42,37,54,49,67,62,76,83,91].map((height, index) => <i style={{ height: `${height}%` }} key={index} />)}</div></div>
          <div className="pms-search-terms"><strong>Search terms</strong><span>Qualified</span><p><b>tampa marketing agency</b><i>12 leads</i></p><p><b>google ads management tampa</b><i>9 leads</i></p><p><b>local ppc company</b><i>7 leads</i></p></div>
        </div>
        <div className="pms-search-copy"><p className="eyebrow">Google Ads management</p><h2>Capture demand when customers are ready to act.</h2><p>Paid search works best when campaigns are organized around real services and meaningful intent. We separate high-value searches, control irrelevant traffic, improve message match, and give each priority a budget that can produce useful data.</p><ul><li>Keyword and search-term analysis</li><li>Campaign and ad-group structure</li><li>Negative keyword management</li><li>Geographic and schedule targeting</li><li>Ad copy and asset testing</li><li>Budget and bidding adjustments</li></ul><a className="button button-purple" href="/contact">Talk About Google Ads</a></div>
      </section>

      <section className="pms-creative-section">
        <div className="pms-creative-copy"><p className="eyebrow">Paid social &amp; remarketing</p><h2>Use creative to earn attention, then give it somewhere useful to go.</h2><p>Search campaigns capture existing demand. Paid social can introduce an offer, build recognition, promote timely opportunities, and reconnect with previous visitors. Strong campaigns require more than targeting. The image, message, offer, format, frequency, and landing experience must work together.</p><div className="pms-creative-pills"><span>Audience strategy</span><span>Creative testing</span><span>Lead campaigns</span><span>Remarketing</span><span>Offer messaging</span></div></div>
        <div className="pms-social-stack" aria-label="Paid social advertisement examples">
          <article className="pms-social-ad pms-social-ad-one"><div><span>V</span><p><strong>Velvet Ink Media</strong><small>Sponsored</small></p><b>•••</b></div><section><i>LOCAL</i><strong>Be seen when Tampa customers are ready.</strong><span>Start with a focused visibility plan.</span></section><footer><p><small>VELVETINKMEDIA.COM</small><strong>Local marketing that connects.</strong></p><b>Learn More</b></footer></article>
          <article className="pms-social-ad pms-social-ad-two"><div><span>V</span><p><strong>Velvet Ink Media</strong><small>Sponsored</small></p><b>•••</b></div><section><small>CAMPAIGN RESULT</small><strong>+31%</strong><p>more qualified leads</p><div><i /><i /><i /><i /></div></section><footer><p><small>PAID MEDIA</small><strong>Turn attention into action.</strong></p><b>Learn More</b></footer></article>
        </div>
      </section>

      <section className="pms-landing-section">
        <div className="pms-section-heading"><div><p className="eyebrow">Landing pages &amp; conversion rate optimization</p><h2>Do not pay for a click, then send it into confusion.</h2></div><p>The landing page should continue the exact conversation the ad started. Clear message match reduces friction and helps both the visitor and the campaign make better decisions.</p></div>
        <div className="pms-landing-board">
          <div className="pms-landing-browser"><div><span /><span /><span /></div><section><small>Tampa local marketing</small><h3>Reach more ready-to-act customers.</h3><p>Focused campaigns. Clear measurement. Better next steps.</p><b>Request a Strategy Call</b></section><aside><strong>Why businesses choose us</strong><i /><i /><i /></aside></div>
          <ul><li><span>01</span><div><strong>Message match</strong><p>The headline, offer, and page content continue the promise made in the ad.</p></div></li><li><span>02</span><div><strong>Focused action</strong><p>The visitor has one clear next step without unrelated navigation or competing offers.</p></div></li><li><span>03</span><div><strong>Trust &amp; proof</strong><p>Reviews, expertise, details, and expectations reduce uncertainty before the form or call.</p></div></li><li><span>04</span><div><strong>Mobile usability</strong><p>Fast pages, readable content, and accessible controls support customers on the move.</p></div></li></ul>
        </div>
        <div className="pms-landing-cta"><strong>Need a stronger campaign destination?</strong><p>We can improve an existing page or build a focused landing experience within a larger website strategy.</p><a className="capability-button" href="/web-design">Explore Web Design <ArrowIcon /></a></div>
      </section>

      <section className="pms-measurement-section">
        <div className="pms-measurement-copy"><p className="eyebrow">Conversion tracking &amp; lead quality</p><h2>Measure what happens after the click.</h2><p>Clicks, impressions, and click-through rate help diagnose performance, but they do not tell you whether the campaign created a good customer. We connect advertising data with calls, forms, bookings, sales, and lead feedback whenever the business systems allow it.</p><p>This makes it possible to distinguish a cheap lead from a valuable one and redirect budget toward the searches, audiences, messages, and locations that create better opportunities.</p></div>
        <div className="pms-measurement-panel"><p>Campaign performance</p><div className="pms-measurement-summary"><article><small>Spend</small><strong>$6,240</strong></article><article><small>Qualified leads</small><strong>48</strong></article><article><small>Cost per qualified lead</small><strong>$130</strong></article></div><div className="pms-attribution"><span>Search ad</span><i /><span>Landing page</span><i /><span>Qualified lead</span></div><div className="pms-quality-row"><span>Lead quality</span><div><i /><i /><i /><i /><i /></div><strong>82%</strong></div></div>
      </section>

      <section className="pms-process-section">
        <div className="pms-section-heading"><div><p className="eyebrow">Our paid media process</p><h2>Launch with discipline. Improve with evidence.</h2></div><p>You should know what is being tested, what changed, where the budget went, and what the campaign produced.</p></div>
        <div className="pms-process-grid">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="pms-fit-section">
        <div className="pms-fit-copy"><p className="eyebrow">When paid media makes sense</p><h2>A strong option when speed, control, and clear demand matter.</h2><p>Paid media is not automatically the right channel. It works best when the business has a valuable offer, enough demand, a realistic budget, a reliable sales process, and a way to measure meaningful actions.</p><a className="button button-purple" href="/contact">Discuss Your Campaign</a></div>
        <div className="pms-fit-grid"><article><span>01</span><strong>You need visibility now</strong><p>Reach relevant customers while longer-term SEO and brand strategies develop.</p></article><article><span>02</span><strong>You can define a valuable lead</strong><p>Connect campaign performance with calls, forms, appointments, or purchases.</p></article><article><span>03</span><strong>You want controlled testing</strong><p>Test services, locations, offers, and messages using real market behavior.</p></article><article><span>04</span><strong>You can follow up consistently</strong><p>Give qualified leads a responsive sales or service experience after they convert.</p></article></div>
      </section>

      <section className="pms-faq-section">
        <div className="pms-faq-heading"><p className="eyebrow">Paid media FAQs</p><h2>Questions businesses ask before spending on ads.</h2></div>
        <div className="pms-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <Footer />
    </main>
  );
}
