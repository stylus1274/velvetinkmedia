import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteLink from "../components/SiteLink";

const warningSigns = [
  {
    number: "01",
    title: "Visitors Cannot Tell What You Do",
    copy: "Your homepage looks polished, but the offer, audience, or next step is still unclear.",
  },
  {
    number: "02",
    title: "Mobile Visitors Leave Too Quickly",
    copy: "Important information is buried, pages feel slow, or calls to action are difficult to use on a phone.",
  },
  {
    number: "03",
    title: "The Site No Longer Fits The Business",
    copy: "Your services, positioning, or market have changed, but the website still tells the old story.",
  },
  {
    number: "04",
    title: "Marketing Has Nowhere Strong To Land",
    copy: "SEO, ads, social media, and referrals send traffic to pages that do not build enough trust or action.",
  },
];

const deliverables = [
  "Conversion-focused page structure",
  "Responsive design for desktop and mobile",
  "Clear service and audience pathways",
  "SEO-ready headings, metadata, and internal links",
  "Lead forms and calls to action",
  "Analytics and conversion-tracking foundations",
];

const process = [
  {
    number: "01",
    title: "Review",
    copy: "We identify where the current website creates confusion, friction, or missed opportunities.",
  },
  {
    number: "02",
    title: "Plan",
    copy: "We map the message, pages, user paths, and conversion points before visual design begins.",
  },
  {
    number: "03",
    title: "Design And Build",
    copy: "We create a responsive website that reflects the business and supports the way customers decide.",
  },
  {
    number: "04",
    title: "Launch And Measure",
    copy: "We test the experience, prepare tracking, and launch with a clear plan for ongoing improvement.",
  },
];

const faqs = [
  {
    question: "How Do I Know If I Need A Redesign Or A New Website?",
    answer:
      "A redesign is usually the right fit when the platform and core content are usable but the structure, message, visual design, or conversion path needs improvement. A new build makes more sense when the current site cannot support the pages, functionality, performance, or marketing strategy the business needs.",
  },
  {
    question: "Will The Website Be Built For Search Visibility?",
    answer:
      "Yes. We consider site architecture, heading hierarchy, metadata, crawlability, internal linking, mobile usability, performance, and schema opportunities during the build. Ongoing SEO strategy is available separately when you need continued growth after launch.",
  },
  {
    question: "Can You Help Rewrite The Website Copy?",
    answer:
      "Yes. Content strategy and copywriting can be included so the message, page structure, and design are developed as one system instead of treating copy as an afterthought.",
  },
  {
    question: "How Long Does A Business Website Take?",
    answer:
      "Timing depends on the number of pages, content readiness, functionality, and feedback speed. Most small-business website projects take several weeks, while larger or more complex builds require a longer schedule.",
  },
];

export const metadata = {
  title: "Website Redesign For Tampa Businesses | Velvet Ink Media",
  description:
    "Get a clearer, faster, conversion-focused website built for Tampa businesses. Strategy, design, WordPress development, SEO, and lead tracking.",
  alternates: {
    canonical: "https://www.velvetinkmedia.com/web-design-promo",
  },
  openGraph: {
    title: "Website Redesign For Tampa Businesses | Velvet Ink Media",
    description:
      "A stronger website for clearer messaging, better usability, search visibility, and qualified leads.",
    url: "https://www.velvetinkmedia.com/web-design-promo",
    images: [
      {
        url: "/web-design-promo-hero.webp",
        width: 1672,
        height: 941,
        alt: "A Tampa business owner welcoming a customer outside her storefront",
      },
    ],
  },
};

export default function WebDesignPromoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Website Redesign And Web Design",
        provider: {
          "@type": "Organization",
          name: "Velvet Ink Media",
          url: "https://www.velvetinkmedia.com/",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Tampa Bay, Florida",
        },
        url: "https://www.velvetinkmedia.com/web-design-promo",
        description:
          "Conversion-focused website redesign and WordPress web design for Tampa businesses.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="web-design-promo-page">
      <SiteHeader current="web-design" />

      <section className="wdp-hero">
        <div className="wdp-hero-copy">
          <p className="eyebrow">Website redesign for Tampa businesses</p>
          <h1>Your Website Should Be Bringing You Business.</h1>
          <p>
            Get a clearer, faster, conversion-focused website that helps the
            right customers understand your value and take the next step.
          </p>
          <div className="hero-actions">
            <SiteLink className="button button-purple" href="/contact">
              Request A Website Review
            </SiteLink>
            <SiteLink className="button button-outline" href="tel:+18137975515">
              Call 813-797-5515
            </SiteLink>
          </div>
          <ul className="wdp-proof-list" aria-label="Website project benefits">
            <li>Strategy Before Design</li>
            <li>SEO-Ready Structure</li>
            <li>Built To Convert</li>
          </ul>
        </div>

        <div className="wdp-hero-image">
          <Image
            src="/web-design-promo-hero.webp"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 1100px) 100vw, 50vw"
            alt="A Tampa business owner welcoming a customer outside her storefront"
          />
          <div className="wdp-image-note">
            <strong>A Better Website Supports The Real Business.</strong>
            <span>Clear message. Stronger trust. Easier next step.</span>
          </div>
        </div>
      </section>

      <section className="wdp-outcome-strip" aria-label="Website redesign outcomes">
        <div><span>01</span><strong>Make The Offer Clear</strong></div>
        <div><span>02</span><strong>Build Trust Faster</strong></div>
        <div><span>03</span><strong>Turn Visits Into Leads</strong></div>
      </section>

      <section className="wdp-warning-section" id="warning-signs">
        <div className="wdp-section-heading">
          <p className="eyebrow">Signs the website is holding you back</p>
          <h2>A Website Can Look Fine And Still Cost You Opportunities.</h2>
          <p>
            The problem is not always an outdated color palette. More often,
            the website makes customers work too hard to understand, trust, or
            contact the business.
          </p>
        </div>
        <div className="wdp-warning-grid">
          {warningSigns.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wdp-deliverables-section">
        <div className="wdp-deliverables-copy">
          <p className="eyebrow">What the redesign includes</p>
          <h2>Everything Needed To Turn The Website Into A Better Sales Tool.</h2>
          <p>
            We connect strategy, content, usability, search foundations, and
            tracking so the finished site does more than look different.
          </p>
          <p>
            Need the full service breakdown? Review our complete
            {" "}<SiteLink href="/web-design">web design services</SiteLink>.
          </p>
        </div>
        <ul className="wdp-deliverables-list">
          {deliverables.map((item, index) => (
            <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>
          ))}
        </ul>
      </section>

      <section className="wdp-conversion-section">
        <div className="wdp-conversion-card">
          <p className="eyebrow">A connected marketing foundation</p>
          <h2>Your Website Should Make Every Other Marketing Channel Stronger.</h2>
          <p>
            A focused website gives your <SiteLink href="/local-seo">local SEO</SiteLink>,
            paid campaigns, referrals, and <SiteLink href="/content-marketing">content marketing</SiteLink> a
            stronger place to send potential customers.
          </p>
          <SiteLink className="button button-purple" href="/contact">
            Talk About Your Website
          </SiteLink>
        </div>
        <div className="wdp-path" aria-label="Customer conversion path">
          <div><span>01</span><strong>Arrive</strong><small>The right visitor reaches the right page.</small></div>
          <i aria-hidden="true" />
          <div><span>02</span><strong>Understand</strong><small>The offer and value are immediately clear.</small></div>
          <i aria-hidden="true" />
          <div><span>03</span><strong>Trust</strong><small>Proof and useful details reduce hesitation.</small></div>
          <i aria-hidden="true" />
          <div><span>04</span><strong>Act</strong><small>The next step is obvious and easy to complete.</small></div>
        </div>
      </section>

      <section className="wdp-process-section">
        <div className="wdp-section-heading compact">
          <p className="eyebrow">A practical redesign process</p>
          <h2>Know What Happens From The First Review To Launch.</h2>
        </div>
        <div className="wdp-process-grid">
          {process.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wdp-fit-section">
        <div>
          <p className="eyebrow">Built for established local businesses</p>
          <h2>You Do Not Need A Flashier Website. You Need A More Useful One.</h2>
        </div>
        <div>
          <p>
            This is a strong fit when your business has outgrown its current
            website, your marketing is generating attention but not enough
            leads, or your site no longer represents the quality of your work.
          </p>
          <SiteLink href="/work">See How We Approach Client Work</SiteLink>
        </div>
      </section>

      <section className="wdp-faq-section">
        <div className="wdp-section-heading compact">
          <p className="eyebrow">Frequently asked questions</p>
          <h2>Questions To Answer Before Rebuilding Your Website.</h2>
        </div>
        <div className="wdp-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="wdp-final-cta">
        <p className="eyebrow">Start with an honest review</p>
        <h2>Find Out What Your Website Needs To Do Better.</h2>
        <p>
          Tell us what is not working. We will help you identify the problems
          worth fixing and whether a redesign is the right next step.
        </p>
        <div className="hero-actions">
          <SiteLink className="button button-purple" href="/contact">Request A Website Review</SiteLink>
          <SiteLink className="button button-outline" href="tel:+18137975515">Call 813-797-5515</SiteLink>
        </div>
      </section>

      <SiteFooter variant="web-design" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
