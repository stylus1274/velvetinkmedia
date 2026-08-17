import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SiteLink from "../components/SiteLink";

const deliverables = [
  {
    number: "01",
    title: "Strategy & Structure",
    copy: "Plan the pages, user paths, messaging, and calls to action before design decisions start competing for attention.",
    tags: ["Sitemap", "Conversion paths"],
    accent: "peach",
  },
  {
    number: "02",
    title: "UX & Visual Design",
    copy: "Create a polished, accessible experience that makes the business easier to understand and the next step easier to take.",
    tags: ["Responsive UX", "Brand system"],
    accent: "blue",
  },
  {
    number: "03",
    title: "WordPress Development",
    copy: "Build a flexible WordPress website your team can manage without sacrificing performance, structure, or visual quality.",
    tags: ["WordPress", "Divi"],
    accent: "purple",
  },
  {
    number: "04",
    title: "SEO Foundations",
    copy: "Launch with clean architecture, strong page hierarchy, useful metadata, schema, and technical essentials already in place.",
    tags: ["Technical SEO", "Schema"],
    accent: "lime",
  },
  {
    number: "05",
    title: "Analytics & Leads",
    copy: "Track calls, forms, and meaningful actions so the website can be evaluated by business results instead of traffic alone.",
    tags: ["GA4", "Conversion tracking"],
    accent: "mint",
  },
  {
    number: "06",
    title: "Launch & Support",
    copy: "Move into launch with testing, training, and a clear plan for updates, optimization, hosting, and ongoing improvements.",
    tags: ["Quality assurance", "Support"],
    accent: "rose",
  },
];

const process = [
  ["01", "Discover", "We clarify your audience, offers, priorities, current limitations, and the actions the website needs to support."],
  ["02", "Plan", "We organize the sitemap, content hierarchy, page goals, and user journeys before visual design begins."],
  ["03", "Design & build", "We shape the interface, develop the site, and connect content, search, accessibility, and conversion requirements."],
  ["04", "Launch & improve", "We test the experience, prepare tracking, launch carefully, and use real behavior to guide future improvements."],
];

const audiences = [
  "Local businesses ready to look established",
  "Companies whose website no longer reflects the brand",
  "Service businesses losing leads to poor usability",
  "Teams that need SEO and marketing built into the site",
];

export const metadata = {
  title: "Tampa Web Design Services | Velvet Ink Media",
  description:
    "Conversion-focused WordPress web design for Tampa businesses, built with strong UX, SEO, GEO, AEO, analytics, and lead generation foundations.",
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 20">
      <path d="M1 10h39M32 2l8 8-8 8" />
    </svg>
  );
}

export default function WebDesignPage() {
  return (
    <main className="web-design-page">
      <SiteHeader current="web-design" />

      <section className="wds-hero">
        <div className="wds-hero-copy">
          <p className="eyebrow">Web design services for Tampa businesses</p>
          <h1>Websites built to <span>work harder.</span></h1>
          <p className="wds-lead">
            We design structured, conversion-focused WordPress websites that
            communicate clearly, support search visibility, and give every
            marketing channel a stronger place to send people.
          </p>
          <div className="hero-actions">
            <SiteLink className="button button-purple" href="/contact">Start a Website Project</SiteLink>
            <SiteLink className="button button-outline" href="#approach">See Our Approach</SiteLink>
          </div>
          <ul className="wds-hero-points" aria-label="Web design benefits">
            <li>Strategy first</li><li>Built for search</li><li>Made to convert</li>
          </ul>
        </div>

        <div className="wds-hero-visual" aria-label="Responsive website design interface">
          <div className="wds-grid" aria-hidden="true" />
          <div className="wds-browser">
            <div className="wds-browser-chrome"><span /><span /><span /><b>velvetinkmedia.com</b></div>
            <div className="wds-browser-page">
              <div className="wds-browser-nav"><strong>V</strong><i /><i /><i /></div>
              <div className="wds-browser-content">
                <p>Clear message. Stronger next step.</p>
                <div className="wds-browser-title"><i /><i /><i /></div>
                <span>Start a Project</span>
              </div>
              <div className="wds-browser-cards"><i /><i /><i /></div>
            </div>
          </div>
          <div className="wds-mobile-frame">
            <div className="wds-mobile-speaker" />
            <div className="wds-mobile-screen"><strong>V</strong><i /><i /><span>Let&apos;s talk</span></div>
          </div>
          <div className="wds-performance-card"><small>Page performance</small><strong>96</strong><span>Fast, clear, responsive</span></div>
        </div>
      </section>

      <section className="lse-context wds-context" id="approach">
        <div className="lse-context-heading">
          <p className="eyebrow">More than a visual refresh</p>
          <h2>Your website is the center of your marketing system.</h2>
        </div>
        <div className="lse-context-copy">
          <p>
            Search campaigns, Google Ads, social content, email, referrals, and
            AI recommendations eventually send people somewhere. If the website
            is slow, confusing, generic, or difficult to trust, every other
            marketing investment has to work harder.
          </p>
          <SiteLink className="capability-button" href="#deliverables">See What&apos;s Included <ArrowIcon /></SiteLink>
        </div>
      </section>

      <section className="lse-services wds-deliverables" id="deliverables">
        <div className="lse-section-heading">
          <div><p className="eyebrow">What every website includes</p><h2>Design, structure, and performance working together.</h2></div>
          <p>Every decision should support usability, credibility, visibility, or conversion. If it does none of those things, it is probably decoration.</p>
        </div>
        <div className="lse-service-grid">
          {deliverables.map((item) => (
            <article className={`lse-service-card ${item.accent}`} key={item.number}>
              <div className="lse-service-top"><span>{item.number}</span><i aria-hidden="true" /></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <ul>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="wds-experience-section">
        <div className="wds-experience-copy">
          <p className="eyebrow">What a better website changes</p>
          <h2>Make the right information easier to find and act on.</h2>
          <p>
            A strong website reduces hesitation. Visitors can understand what
            you do, confirm that you serve them, see why they should trust you,
            and take the next step without fighting the interface.
          </p>
          <ul><li>Clear service and audience pathways</li><li>Stronger visual hierarchy</li><li>Fewer conversion dead ends</li><li>Better mobile usability</li></ul>
        </div>
        <div className="wds-flow-board" aria-label="Website customer journey">
          <p>One clear customer path</p>
          <div><span>01</span><strong>Understand</strong><small>What you do and who you help</small></div>
          <i aria-hidden="true" />
          <div><span>02</span><strong>Trust</strong><small>Why your business is the right fit</small></div>
          <i aria-hidden="true" />
          <div><span>03</span><strong>Act</strong><small>Call, request, schedule, or buy</small></div>
        </div>
      </section>

      <section className="wds-foundation-section">
        <div className="wds-foundation-copy">
          <p className="eyebrow">SEO, GEO &amp; AEO foundations</p>
          <h2>Build a website search engines and AI systems can understand.</h2>
          <p>
            Good design is not separate from visibility. Clear site architecture,
            useful content, semantic structure, schema, internal linking, and
            strong page experiences help customers and discovery platforms make
            sense of the business.
          </p>
          <SiteLink className="button button-purple" href="/local-seo">Explore Local SEO</SiteLink>
        </div>
        <div className="wds-foundation-stack" aria-label="Website visibility foundations">
          <article><span>01</span><div><strong>Technical clarity</strong><small>Performance, crawlability, schema, clean structure</small></div></article>
          <article><span>02</span><div><strong>Useful content</strong><small>Clear services, answers, proof, local relevance</small></div></article>
          <article><span>03</span><div><strong>Conversion experience</strong><small>Accessible pages, focused journeys, measurable actions</small></div></article>
          <strong className="wds-foundation-result">A stronger foundation for every channel</strong>
        </div>
      </section>

      <section className="lse-process wds-process">
        <div className="lse-section-heading">
          <div><p className="eyebrow">Our web design process</p><h2>Structure first. Design with purpose. Launch with confidence.</h2></div>
          <p>You will know what is happening, what decisions are being made, and how each stage supports the finished website.</p>
        </div>
        <div className="lse-process-grid">
          {process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="wds-choice-section">
        <div className="wds-choice-heading"><p className="eyebrow">What does your business need?</p><h2>A redesign and a new website solve different starting problems.</h2></div>
        <div className="wds-choice-grid">
          <article className="redesign"><span>01</span><h3>Website Redesign</h3><p>Best when the business, offers, or audience are established but the current site is dated, confusing, slow, or failing to support growth.</p><ul><li>Preserve what still works</li><li>Restructure weak journeys</li><li>Improve design and performance</li></ul></article>
          <article className="new-build"><span>02</span><h3>New Website</h3><p>Best when you are launching, repositioning, combining brands, or starting with a site that cannot support the strategy you need.</p><ul><li>Build the system from the ground up</li><li>Plan content and structure together</li><li>Create room for future growth</li></ul></article>
        </div>
      </section>

      <section className="lse-fit-section wds-fit-section">
        <div className="lse-fit-copy">
          <p className="eyebrow">Who we help</p>
          <h2>Built for businesses ready to make the website count.</h2>
          <p>A redesign makes sense when the website has become a bottleneck for visibility, credibility, lead generation, or day-to-day marketing.</p>
        </div>
        <ul className="lse-fit-list">{audiences.map((audience, index) => <li key={audience}><span>0{index + 1}</span>{audience}</li>)}</ul>
      </section>

      <section className="lse-faq wds-faq">
        <div className="lse-faq-heading"><p className="eyebrow">Frequently asked questions</p><h2>What businesses ask before starting a website project.</h2></div>
        <div className="lse-faq-list">
          <details><summary>How long does a website project take?<span>+</span></summary><p>Timing depends on page count, content readiness, functionality, and feedback speed. Most business websites require several weeks, while larger or more complex projects need a longer schedule.</p></details>
          <details><summary>Do you only build WordPress websites?<span>+</span></summary><p>WordPress is our primary platform because it offers flexibility, strong content management, and room to grow. We recommend the platform based on what the business needs, not simply because it is familiar.</p></details>
          <details><summary>Will the website be optimized for SEO?<span>+</span></summary><p>Yes. Site architecture, heading structure, metadata, performance, mobile usability, schema opportunities, and crawlability are considered during the build. Ongoing SEO strategy is available separately.</p></details>
          <details><summary>Can you help with website copy?<span>+</span></summary><p>Yes. Content strategy and copywriting can be included so the design and message are developed together instead of forcing weak content into finished layouts.</p></details>
          <details><summary>Can you host and maintain the website?<span>+</span></summary><p>Yes. Hosting, updates, maintenance, troubleshooting, and ongoing improvements can be included after launch.</p></details>
        </div>
      </section>

      <SiteFooter variant="web-design" />
    </main>
  );
}
