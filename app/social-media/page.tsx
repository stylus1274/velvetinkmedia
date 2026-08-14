import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

const services = [
  { number: "01", title: "Social Strategy", copy: "Define the audience, channel roles, message priorities, publishing rhythm, and business result each platform needs to support.", tags: ["Audience", "Roadmap"], accent: "purple" },
  { number: "02", title: "Platform-Specific Content", copy: "Shape the idea for the way people actually use each platform instead of publishing identical copy everywhere.", tags: ["Facebook", "Instagram"], accent: "blue" },
  { number: "03", title: "Content Creation", copy: "Create useful copy, graphics, carousels, short-form concepts, and campaign assets that sound and look like your business.", tags: ["Copy", "Creative"], accent: "lime" },
  { number: "04", title: "Scheduling & Publishing", copy: "Build and manage a practical content calendar so approved work gets published consistently and at the right time.", tags: ["Calendar", "Publishing"], accent: "peach" },
  { number: "05", title: "Community Management", copy: "Monitor comments and conversations, coordinate thoughtful responses, and surface questions your team should address.", tags: ["Engagement", "Responses"], accent: "mint" },
  { number: "06", title: "Paid Social Coordination", copy: "Connect organic insight, campaign creative, audience targeting, landing pages, and measurement when paid support makes sense.", tags: ["Campaigns", "Retargeting"], accent: "rose" },
];

const process = [
  ["01", "Research", "We review the audience, offer, current channels, competitors, past performance, internal expertise, and the questions customers actually ask."],
  ["02", "Plan", "We define channel roles, content pillars, formats, calls to action, publishing cadence, approval steps, and a realistic production calendar."],
  ["03", "Create & publish", "We write, design, adapt, schedule, and publish content that fits the platform while staying connected to the larger marketing plan."],
  ["04", "Measure & refine", "We review engagement quality, website action, lead signals, audience response, and business feedback to improve the next cycle."],
];

const audiences = [
  "Businesses posting inconsistently or without a clear purpose",
  "Teams with useful expertise but no repeatable content system",
  "Brands that need organic and paid social to work together",
  "Companies that want social activity connected to website and search goals",
];

const faqs = [
  { question: "Which social media platforms should our business use?", answer: "The right platforms depend on your audience, buying journey, available expertise, visual resources, and business goal. We would rather choose a focused set of channels with a clear job than spread weak content across every platform." },
  { question: "How often should we post?", answer: "There is no universal posting quota. The right rhythm needs to be consistent enough to build recognition while remaining realistic for the amount of useful content your business can create and support. Quality, relevance, and continuity matter more than filling every day on a calendar." },
  { question: "Do you create the graphics and write the posts?", answer: "Yes. Velvet Ink Media can develop the content plan, write the copy, create branded graphics and carousels, coordinate source material, prepare short-form concepts, and manage scheduling and publishing. The exact production mix is scoped around the channels and formats that matter most." },
  { question: "Do you respond to comments and messages?", answer: "Community management can be included. We establish response guidelines, monitor activity, handle appropriate interactions, and create a clear escalation process for questions that need someone inside your business." },
  { question: "Should we use organic social media or paid social advertising?", answer: "They solve different problems. Organic social can build familiarity, trust, audience insight, and ongoing visibility. Paid social can extend reach, support campaigns, retarget interested visitors, and test messages faster. The strongest plan may use either one or connect both around the same audience and offer." },
  { question: "How do you measure whether social media is working?", answer: "We look beyond follower count and raw reach. Useful measurement may include engagement quality, profile actions, website visits, assisted conversions, lead quality, campaign response, customer questions, content reuse, and whether social activity supports the larger business goal." },
];

export const metadata: Metadata = {
  title: "Social Media Marketing Tampa | Velvet Ink Media",
  description: "Social media strategy, content creation, publishing, community management, paid social coordination and measurement for Tampa businesses.",
  alternates: { canonical: "https://www.velvetinkmedia.com/social-media/" },
  openGraph: {
    title: "Social Media Marketing for Tampa Businesses | Velvet Ink Media",
    description: "Build a useful social media system connecting strategy, content, publishing, community, paid support and measurement.",
    url: "https://www.velvetinkmedia.com/social-media/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.velvetinkmedia.com/social-media/#service",
      name: "Social Media Marketing Services",
      serviceType: "Social media strategy, content creation, publishing, community management and paid social coordination",
      url: "https://www.velvetinkmedia.com/social-media/",
      provider: { "@type": "ProfessionalService", "@id": "https://www.velvetinkmedia.com/#organization", name: "Velvet Ink Media", telephone: "+1-813-797-5515" },
      areaServed: [{ "@type": "City", name: "Tampa" }, { "@type": "AdministrativeArea", name: "Tampa Bay" }, { "@type": "State", name: "Florida" }],
      description: "Social media marketing services connecting strategy, platform-specific content, publishing, community management, paid support and measurement.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "Social Media Marketing", item: "https://www.velvetinkmedia.com/social-media/" },
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

function SocialDashboard() {
  return (
    <div className="sm-hero-stage" aria-label="Social content planning and publishing dashboard illustration">
      <div className="sm-stage-grid" aria-hidden="true" />
      <div className="sm-dashboard">
        <header><span /><span /><span /><strong>Social content studio</strong><small>August plan</small></header>
        <div className="sm-dashboard-body">
          <aside><b>Channels</b><span className="active">All content</span><span>Facebook</span><span>Instagram</span><span>LinkedIn</span></aside>
          <section>
            <div className="sm-dashboard-title"><div><small>CONTENT PILLAR</small><strong>Local expertise</strong></div><b>12 posts</b></div>
            <div className="sm-post-grid">
              <article className="featured"><div className="sm-post-art"><i>TIP</i><strong>3 local search signals customers notice</strong></div><footer><span>CAROUSEL</span><b>READY</b></footer></article>
              <article><div className="sm-post-art quote"><i>Q&amp;A</i><strong>What should a customer know before they call?</strong></div><footer><span>EXPERT POST</span><b>DRAFT</b></footer></article>
              <article><div className="sm-post-art result"><i>PROOF</i><strong>From useful content to qualified action</strong></div><footer><span>CASE NOTE</span><b>PLAN</b></footer></article>
            </div>
          </section>
        </div>
      </div>
      <div className="sm-reach-card"><small>QUALIFIED ACTIONS</small><strong>+34%</strong><span>From social traffic</span></div>
      <div className="sm-repurpose-pill"><span>1 strong idea</span><i>→</i><strong>4 channel-ready assets</strong></div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-cta">
        <div className="footer-cta-copy">
          <p className="footer-eyebrow">Let&apos;s talk</p>
          <h2>Give social media a useful job.</h2>
          <p>Tell us where you are showing up now, what feels inconsistent, and what the business needs social media to support. We&apos;ll help you choose a practical starting point.</p>
          <div className="footer-actions"><a className="footer-button footer-button-light" href="tel:+18137975515">Call 813-797-5515</a><a className="footer-button footer-button-outline" href="/contact">Plan Your Social Strategy</a></div>
        </div>
        <aside className="footer-contact-card" aria-label="Velvet Ink Media contact details">
          <a className="footer-contact-logo" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a>
          <dl><div><dt>Studio</dt><dd><address>1101 E Cumberland Ave #201H<br />Tampa, FL 33602</address></dd></div><div><dt>Phone</dt><dd><a href="tel:+18137975515">813-797-5515</a></dd></div><div><dt>Email</dt><dd><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a></dd></div></dl>
        </aside>
      </div>
      <div className="footer-main">
        <div className="footer-brand-column"><a className="footer-brand" href="/" aria-label="Velvet Ink Media home"><img src="/velvet-ink-logo.png" alt="Velvet Ink Media" /></a><p>A Tampa marketing agency connecting social media, content, search visibility, web design, paid media, and measurement around real business growth.</p></div>
        <nav className="footer-column" aria-label="Footer services"><h3>Services</h3><a href="/services">All Services</a><a href="/web-design">Web Design</a><a href="/local-seo">Local SEO</a><a href="/geo-aeo">GEO + AEO</a><a href="/content-marketing">Content Marketing</a><a href="/social-media">Social Media</a><a href="/paid-media">Paid Media</a></nav>
        <nav className="footer-column" aria-label="Footer company links"><h3>Company</h3><a href="/about-us">About Us</a><a href="/work">Our Work</a><a href="/blog">Insights</a><a href="/contact">Contact</a></nav>
        <div className="footer-column footer-contact-column"><h3>Contact</h3><a href="tel:+18137975515">813-797-5515</a><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a><address>Tampa, FL 33602</address></div>
      </div>
      <div className="footer-bottom"><p>© 2026 Velvet Ink Media. All rights reserved.</p><div><a href="#top">Privacy</a><a href="#top">Terms</a></div></div>
    </footer>
  );
}

export default function SocialMediaPage() {
  return (
    <main className="social-media-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="social-media" />

      <section className="sm-hero">
        <div className="sm-hero-copy">
          <p className="eyebrow">Social media marketing for Tampa businesses</p>
          <h1>Show up with something <span>worth saying.</span></h1>
          <p className="sm-lead">We connect strategy, content creation, publishing, community management, paid support, and measurement so social media becomes part of the business system, not another disconnected task.</p>
          <div className="hero-actions"><a className="button button-purple" href="/contact">Build Your Social Strategy</a><a className="button button-outline" href="#social-services">See What We Manage</a></div>
          <ul className="sm-hero-points"><li>Strategy-led</li><li>Platform-aware</li><li>Business-focused</li></ul>
        </div>
        <SocialDashboard />
      </section>

      <section className="lse-context sm-context" id="approach">
        <div className="lse-context-heading"><p className="eyebrow">More than consistent posting</p><h2>Consistency is not the same as strategy.</h2></div>
        <div className="lse-context-copy"><p>A full calendar can still fail when the content has no clear audience, message, platform role, or business purpose. More posts do not automatically create more trust or better leads.</p><p>We give every channel and content type a defined job. One post may build familiarity, another may answer a sales question, and another may move an interested customer to the website. Together, they create a useful path instead of a stream of disconnected updates.</p><a className="capability-button" href="#social-services">Explore the Social System <ArrowIcon /></a></div>
      </section>

      <section className="lse-services sm-services" id="social-services">
        <div className="lse-section-heading"><div><p className="eyebrow">Social media services</p><h2>Strategy, content, publishing, and community connected.</h2></div><p>We can manage the complete system or strengthen the parts your internal team cannot consistently handle.</p></div>
        <div className="lse-service-grid">{services.map((item) => <article className={`lse-service-card ${item.accent}`} key={item.number}><div className="lse-service-top"><span>{item.number}</span><i /></div><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>

      <section className="sm-content-system">
        <div className="sm-system-copy"><p className="eyebrow">One idea, multiple useful expressions</p><h2>Build social content from real business expertise.</h2><p>The strongest social programs do not start with a blank calendar. They start with customer questions, useful opinions, service knowledge, original examples, and source material that is worth sharing.</p><p>We turn those ideas into platform-ready content while preserving the depth that supports your website, search visibility, and larger content strategy.</p><a className="button button-purple" href="/content-marketing">Explore Content Marketing</a></div>
        <div className="sm-repurpose-flow" aria-label="One expert idea repurposed into multiple formats">
          <header><span>Source idea</span><strong>Answer one important customer question</strong></header>
          <div><article><span>01</span><b>Website resource</b><small>Depth and search value</small></article><article><span>02</span><b>Social carousel</b><small>Clear, visual teaching</small></article><article><span>03</span><b>Short-form post</b><small>Focused point of view</small></article><article><span>04</span><b>Campaign creative</b><small>Targeted next step</small></article></div>
          <footer>Same expertise. Different role for each channel.</footer>
        </div>
      </section>

      <section className="sm-channel-section">
        <div className="sm-channel-heading"><p className="eyebrow">Channel roles</p><h2>Choose platforms by purpose, not pressure.</h2><p>Your business does not need to be everywhere. It needs to show up where the right audience pays attention, evaluates options, and takes action.</p></div>
        <div className="sm-channel-grid">
          <article className="purple"><span>01</span><h3>Discovery</h3><p>Earn attention with useful ideas, recognizable creative, and topics relevant to the audience.</p><b>Reach · Awareness</b></article>
          <article className="blue"><span>02</span><h3>Trust</h3><p>Show expertise, perspective, proof, and the people behind the business.</p><b>Authority · Familiarity</b></article>
          <article className="lime"><span>03</span><h3>Conversation</h3><p>Listen, respond, learn what matters, and create opportunities for meaningful interaction.</p><b>Community · Insight</b></article>
          <article className="peach"><span>04</span><h3>Conversion</h3><p>Connect the right content to a relevant page, offer, event, inquiry, or campaign.</p><b>Action · Measurement</b></article>
        </div>
      </section>

      <section className="lse-process sm-process">
        <div className="lse-section-heading"><div><p className="eyebrow">Our social process</p><h2>A repeatable system your business can actually sustain.</h2></div><p>You will know what is being created, why it matters, where it will appear, who approves it, and what we learn from the response.</p></div>
        <div className="lse-process-grid">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="cm-measurement sm-measurement">
        <div className="cm-measurement-heading"><p className="eyebrow">Social media performance</p><h2>Measure useful movement, not vanity alone.</h2><p>Reach and engagement can be early signals, but they do not tell the whole story. We connect social activity to audience quality, customer progress, and the larger marketing system.</p></div>
        <div className="cm-metric-list">
          <article><span>01</span><h3>Attention</h3><p>Qualified reach, audience growth, video completion, and content discovery.</p></article>
          <article><span>02</span><h3>Response</h3><p>Meaningful comments, shares, saves, replies, questions, and profile actions.</p></article>
          <article><span>03</span><h3>Action</h3><p>Website visits, landing-page behavior, calls, forms, campaign response, and assisted conversion.</p></article>
          <article><span>04</span><h3>Business value</h3><p>Lead quality, sales feedback, content reuse, customer insight, and contribution to larger goals.</p></article>
        </div>
      </section>

      <section className="lse-fit-section sm-fit">
        <div className="lse-fit-copy"><p className="eyebrow">Who this is for</p><h2>Built for businesses ready to make social media useful.</h2><p>You do not need to become a full-time publisher. You need a realistic strategy, a clear production system, and content that gives the right audience a reason to pay attention.</p></div>
        <ul className="lse-fit-list">{audiences.map((audience, index) => <li key={audience}><span>0{index + 1}</span>{audience}</li>)}</ul>
      </section>

      <section className="lse-faq sm-faq">
        <div className="lse-faq-heading"><p className="eyebrow">Social media FAQs</p><h2>Questions businesses ask before building a social program.</h2></div>
        <div className="lse-faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <Footer />
    </main>
  );
}
