import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const primaryServices = [
  {
    number: "01",
    eyebrow: "Strategy · UX · Development",
    title: "Web Design",
    description: "Conversion-minded WordPress websites that explain the business clearly, support search visibility, and make the next step easy.",
    bestFor: "Businesses that need a stronger digital foundation",
    href: "/web-design",
    cta: "Explore Web Design",
    accent: "purple",
    visual: "web",
  },
  {
    number: "02",
    eyebrow: "Maps · Organic · Reputation",
    title: "Local SEO",
    description: "Practical local search strategies that connect your website, Google Business Profile, content, reviews, and authority signals.",
    bestFor: "Businesses that depend on customers in specific markets",
    href: "/local-seo",
    cta: "Explore Local SEO",
    accent: "blue",
    visual: "local",
  },
  {
    number: "03",
    eyebrow: "AI Search · Answers · Citations",
    title: "GEO + AEO",
    description: "Expert-led content, structured information, entity clarity, and authority work built for traditional search and AI-generated answers.",
    bestFor: "Businesses preparing for how search is changing",
    href: "/geo-aeo",
    cta: "Explore GEO + AEO",
    accent: "lime",
    visual: "answer",
  },
  {
    number: "04",
    eyebrow: "Search Ads · Social · Measurement",
    title: "Paid Media",
    description: "Focused advertising campaigns built around qualified demand, useful landing pages, clean conversion tracking, and lead quality.",
    bestFor: "Businesses that need faster, controlled visibility",
    href: "/paid-media",
    cta: "Explore Paid Media",
    accent: "peach",
    visual: "paid",
  },
  {
    number: "05",
    eyebrow: "Strategy · Creation · Distribution",
    title: "Content Marketing",
    description: "Useful, expert-informed content planned, created, published, and distributed to support search visibility, AI discovery, trust, and conversion.",
    bestFor: "Businesses with expertise that needs a stronger content system",
    href: "/content-marketing",
    cta: "Explore Content Marketing",
    accent: "mint",
    visual: "content",
  },
  {
    number: "06",
    eyebrow: "Strategy · Content · Community",
    title: "Social Media Marketing",
    description: "Platform-aware social strategy, content creation, publishing, community management, paid coordination, and measurement tied to business goals.",
    bestFor: "Businesses that need a consistent, useful social presence",
    href: "/social-media",
    cta: "Explore Social Media",
    accent: "rose",
    visual: "social",
  },
];

const supportingServices = [
  ["Reputation Management", "Build a consistent review process, improve responses, monitor sentiment, and strengthen the trust customers use to choose."],
  ["Analytics & Tracking", "Connect website, search, advertising, calls, forms, and lead activity so decisions are based on meaningful outcomes."],
  ["Conversion Optimization", "Improve messaging, page flow, forms, calls to action, and landing experiences so more qualified visitors take the next step."],
  ["Brand Messaging", "Clarify what the business does, who it serves, why it is different, and how that message should appear across every channel."],
  ["Website Hosting & Support", "Keep WordPress websites secure, updated, backed up, monitored, and ready to support ongoing marketing work."],
];

const combinations = [
  {
    number: "01",
    title: "Foundation + Visibility",
    description: "Build a stronger website, then create the structure and content needed to compete in local and organic search.",
    services: ["Web Design", "Local SEO", "Analytics"],
    accent: "purple",
  },
  {
    number: "02",
    title: "Search Everywhere",
    description: "Strengthen traditional rankings, local discovery, expert content, and the signals that support citations in AI-generated answers.",
    services: ["Local SEO", "GEO + AEO", "Content"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Demand + Conversion",
    description: "Capture active demand with paid campaigns and connect every click to a focused page, useful next step, and clean measurement.",
    services: ["Paid Media", "Landing Pages", "Tracking"],
    accent: "lime",
  },
];

const process = [
  ["01", "Understand the business", "We clarify the audience, market, priority services, current challenges, resources, and the business result marketing must support."],
  ["02", "Choose the right starting point", "We identify the highest-impact work instead of automatically recommending every service at once."],
  ["03", "Connect strategy and execution", "Web, search, content, advertising, and measurement follow one plan with clear priorities and fewer handoffs."],
  ["04", "Measure and improve", "We review performance, lead quality, customer behavior, and business feedback to decide what should happen next."],
];

const faqs = [
  {
    question: "Do I need every marketing service at once?",
    answer: "Usually not. The right starting point depends on what is currently limiting growth. A business with a weak website may need to fix the foundation before investing heavily in traffic. Another business may already have a strong site and need better local visibility or paid campaigns. We prioritize the work that gives the next investment the best chance to perform.",
  },
  {
    question: "How do you decide which service should come first?",
    answer: "We look at the business goal, customer journey, website, search visibility, market demand, competition, conversion path, tracking, budget, and internal capacity. The recommendation should solve a specific problem rather than add another disconnected tactic.",
  },
  {
    question: "Can Velvet Ink Media work with my existing website or marketing team?",
    answer: "Yes. We can improve an existing system, manage selected channels, or collaborate with internal staff and other specialists. Responsibilities, access, communication, and measurement should be defined clearly so work does not overlap or fall between teams.",
  },
  {
    question: "Do you offer one-time projects and ongoing marketing support?",
    answer: "Yes. Website builds, audits, tracking setups, strategy work, and focused improvements can be handled as defined projects. SEO, paid media, content, reputation, and ongoing optimization generally benefit from continuing support because performance and market conditions change over time.",
  },
  {
    question: "Do you only work with Tampa businesses?",
    answer: "No. Velvet Ink Media is based in Tampa and brings a strong local-market perspective, but we work with businesses across Florida and beyond. The strategy is shaped around the actual audience, locations, competition, and growth goals of each business.",
  },
];

export const metadata: Metadata = {
  title: "Digital Marketing Services Tampa | Velvet Ink Media",
  description:
    "Explore Tampa digital marketing services covering web design, local SEO, GEO and AEO, paid media, content, reputation, analytics and conversion.",
  alternates: {
    canonical: "https://www.velvetinkmedia.com/services/",
  },
  openGraph: {
    title: "Connected Digital Marketing Services | Velvet Ink Media",
    description:
      "Web design, local SEO, GEO, AEO, paid media, content and measurement connected around one business goal.",
    url: "https://www.velvetinkmedia.com/services/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.velvetinkmedia.com/services/#page",
      url: "https://www.velvetinkmedia.com/services/",
      name: "Digital Marketing Services",
      description: "Connected digital marketing services from Velvet Ink Media including web design, local SEO, GEO and AEO, content, social media, and paid media.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: primaryServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            url: `https://www.velvetinkmedia.com${service.href}/`,
            provider: { "@id": "https://www.velvetinkmedia.com/#organization" },
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.velvetinkmedia.com/services/" },
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

function ConnectedServicesGraphic() {
  return (
    <div className="svc-network" aria-label="Connected digital marketing services illustration">
      <div className="svc-network-grid" aria-hidden="true" />
      <div className="svc-network-center"><small>ONE GOAL</small><strong>Qualified<br />growth</strong><span>✦</span></div>
      <article className="svc-network-card svc-network-web"><i>01</i><b>WEB</b><span>Build the foundation</span></article>
      <article className="svc-network-card svc-network-seo"><i>02</i><b>SEO</b><span>Get found locally</span></article>
      <article className="svc-network-card svc-network-geo"><i>03</i><b>GEO</b><span>Become a source</span></article>
      <article className="svc-network-card svc-network-paid"><i>04</i><b>PAID</b><span>Create demand now</span></article>
      <svg className="svc-network-lines" viewBox="0 0 800 700" aria-hidden="true"><path d="M400 350L185 180M400 350L615 180M400 350L185 535M400 350L615 535" /></svg>
    </div>
  );
}

function ServiceGraphic({ type }: { type: string }) {
  if (type === "web") return <div className="svc-mini svc-mini-web"><div><span /><span /><span /></div><section><i /><strong /><p /><p /></section><aside><i /><i /><i /></aside></div>;
  if (type === "local") return <div className="svc-mini svc-mini-local"><header><i /> Tampa local services</header><section><span>1</span><span>2</span><span>3</span><b>Map visibility</b></section><footer><i /><i /><i /><i /></footer></div>;
  if (type === "answer") return <div className="svc-mini svc-mini-answer"><header>AI answer</header><section><i>✦</i><p><strong /><span /><span /><span /></p></section><footer><b>3</b> cited sources</footer></div>;
  if (type === "content") return <div className="svc-mini svc-mini-content"><header><span>Editorial plan</span><b>8 assets</b></header><section><article><i>01</i><div><strong>Expert guide</strong><small>Search + AI</small></div><b>READY</b></article><article><i>02</i><div><strong>Service page</strong><small>Commercial intent</small></div><b>DRAFT</b></article><article><i>03</i><div><strong>Social series</strong><small>Distribution</small></div><b>PLAN</b></article></section><footer><span>One strategy</span><strong>Multiple useful formats</strong></footer></div>;
  if (type === "social") return <div className="svc-mini svc-mini-social"><header><span>Social plan</span><b>12 posts</b></header><section><article><i>01</i><div><strong>Local expertise</strong><small>Carousel</small></div><b>READY</b></article><article><i>02</i><div><strong>Customer question</strong><small>Expert post</small></div><b>DRAFT</b></article><article><i>03</i><div><strong>Service proof</strong><small>Campaign support</small></div><b>PLAN</b></article></section><footer><span>One idea</span><strong>Multiple channel roles</strong></footer></div>;
  return <div className="svc-mini svc-mini-paid"><header><span>Campaign</span><b>+31%</b></header><section>{[38,55,47,72,66,89].map((height, index) => <i style={{ height: `${height}%` }} key={index} />)}</section><footer><span>Qualified leads</span><strong>48</strong></footer></div>;
}

export default function ServicesPage() {
  return (
    <main className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="services" />

      <section className="svc-hero">
        <div className="svc-hero-copy">
          <p className="eyebrow">Connected digital marketing services</p>
          <h1>Every service connected to the same <span>business goal.</span></h1>
          <p className="svc-lead">Web design, local SEO, GEO, AEO, paid media, content, and measurement work better when they follow one strategy instead of competing for attention.</p>
          <div className="hero-actions"><a className="button button-purple" href="#primary-services">Explore Our Services</a><a className="button button-outline" href="/contact">Talk About Your Goals</a></div>
        </div>
        <ConnectedServicesGraphic />
      </section>

      <section className="svc-intro">
        <div><p className="eyebrow">One partner, fewer handoffs</p><h2>Marketing should feel like one system, not six separate projects.</h2></div>
        <div><p>A beautiful website cannot compensate for weak visibility. More traffic will not help if visitors do not understand the offer. Advertising becomes expensive when the landing experience and tracking are not ready.</p><p>We identify the actual constraint, choose the services that address it, and connect the work around the same audience, message, priorities, and measurement plan.</p></div>
      </section>

      <section className="svc-primary" id="primary-services">
        <div className="svc-section-heading"><div><p className="eyebrow">Primary services</p><h2>Six ways we help businesses build visibility and growth.</h2></div><p>You may need one service, a focused combination, or a phased plan. Each path can stand alone, but every path is designed to connect with the others.</p></div>
        <div className="svc-primary-grid">{primaryServices.map((service) => <article className={`svc-primary-card ${service.accent}`} key={service.number}><div className="svc-primary-top"><span>{service.number}</span><small>{service.eyebrow}</small></div><ServiceGraphic type={service.visual} /><div className="svc-primary-copy"><h3>{service.title}</h3><p>{service.description}</p><div><small>BEST FOR</small><strong>{service.bestFor}</strong></div><a className="capability-button" href={service.href}>{service.cta} <ArrowIcon /></a></div></article>)}</div>
      </section>

      <section className="svc-selector">
        <div className="svc-selector-heading"><p className="eyebrow">Start with the business need</p><h2>What needs to improve first?</h2><p>Choose the closest match. The recommended combination is a starting point, not a one-size-fits-all package.</p></div>
        <div className="svc-selector-system">
          <input className="svc-choice" defaultChecked id="svc-visibility" name="svc-goal" type="radio" />
          <input className="svc-choice" id="svc-website" name="svc-goal" type="radio" />
          <input className="svc-choice" id="svc-leads" name="svc-goal" type="radio" />
          <input className="svc-choice" id="svc-connected" name="svc-goal" type="radio" />
          <div className="svc-tabs" role="group" aria-label="Business goals"><label htmlFor="svc-visibility"><span>01</span><strong>We need more visibility</strong><i>+</i></label><label htmlFor="svc-website"><span>02</span><strong>Our website is holding us back</strong><i>+</i></label><label htmlFor="svc-leads"><span>03</span><strong>We need qualified leads sooner</strong><i>+</i></label><label htmlFor="svc-connected"><span>04</span><strong>Our marketing feels disconnected</strong><i>+</i></label></div>
          <div className="svc-panels">
            <article className="svc-panel svc-panel-visibility"><p>Recommended starting point</p><h3>Build visibility across local, organic, and AI-driven search.</h3><span>Strengthen the website, local presence, expert content, and authority signals customers and search systems use to find and evaluate the business.</span><ul><li>Local SEO</li><li>GEO + AEO</li><li>Content Strategy</li></ul><a className="button button-purple" href="/local-seo">Explore Local SEO</a></article>
            <article className="svc-panel svc-panel-website"><p>Recommended starting point</p><h3>Fix the foundation before sending it more traffic.</h3><span>Clarify the message, improve mobile usability, organize priority services, strengthen conversion paths, and make the website easier for customers and search systems to use.</span><ul><li>Web Design</li><li>Conversion Optimization</li><li>Analytics</li></ul><a className="button button-purple" href="/web-design">Explore Web Design</a></article>
            <article className="svc-panel svc-panel-leads"><p>Recommended starting point</p><h3>Capture existing demand and measure what happens next.</h3><span>Use focused advertising, relevant landing pages, and clean tracking to reach customers who are actively looking and learn which opportunities create useful leads.</span><ul><li>Paid Media</li><li>Landing Pages</li><li>Lead Tracking</li></ul><a className="button button-purple" href="/paid-media">Explore Paid Media</a></article>
            <article className="svc-panel svc-panel-connected"><p>Recommended starting point</p><h3>Build one plan across the website, search, content, and advertising.</h3><span>Audit the current system, define shared priorities, clarify ownership, and phase the work so each channel supports the same audience and business outcome.</span><ul><li>Digital Strategy</li><li>Connected Services</li><li>Measurement Plan</li></ul><a className="button button-purple" href="/contact">Plan the Right Mix</a></article>
          </div>
        </div>
      </section>

      <section className="svc-supporting">
        <div className="svc-section-heading"><div><p className="eyebrow">Supporting capabilities</p><h2>The work that makes every primary service stronger.</h2></div><p>These capabilities are built into larger strategies or scoped as focused projects when one area is creating a clear bottleneck.</p></div>
        <div className="svc-supporting-list">{supportingServices.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="svc-combinations">
        <div className="svc-combinations-heading"><p className="eyebrow">Connected service combinations</p><h2>Common starting systems.</h2><p>These are practical examples of how services can work together. The final scope should still reflect the business, market, website, budget, and internal resources.</p></div>
        <div className="svc-combination-grid">{combinations.map((combination) => <article className={combination.accent} key={combination.number}><span>{combination.number}</span><h3>{combination.title}</h3><p>{combination.description}</p><div>{combination.services.map((service) => <b key={service}>{service}</b>)}</div></article>)}</div>
      </section>

      <section className="svc-process">
        <div className="svc-section-heading"><div><p className="eyebrow">How we work</p><h2>Start with the constraint. Build what the business actually needs.</h2></div><p>A smaller agency should create clarity, not another management layer. You should understand what is being prioritized and why.</p></div>
        <div className="svc-process-grid">{process.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="svc-cta"><div><p className="eyebrow">Not sure where to start?</p><h2>You do not need to diagnose the entire marketing system yourself.</h2></div><div><p>Tell us what feels stuck, what you have already tried, and what the business needs to accomplish. We&apos;ll help you identify the most useful next step.</p><a className="button button-purple" href="/contact">Talk With Velvet Ink Media</a></div></section>

      <section className="svc-faq">
        <div className="svc-faq-heading"><p className="eyebrow">Service FAQs</p><h2>Questions businesses ask before choosing a direction.</h2></div>
        <div className="svc-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <SiteFooter variant="services" />
    </main>
  );
}
