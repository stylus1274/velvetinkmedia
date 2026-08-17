import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Velvet Ink Media | Tampa Marketing Agency",
  description:
    "Start a conversation with Velvet Ink Media about web design, local SEO, paid media, GEO, AEO, or a more connected digital marketing strategy.",
  alternates: {
    canonical: "https://www.velvetinkmedia.com/contact/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Velvet Ink Media",
  url: "https://www.velvetinkmedia.com/contact/",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Velvet Ink Media",
    telephone: "+1-813-797-5515",
    email: "hello@velvetinkmedia.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1101 E Cumberland Ave #201H",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33602",
      addressCountry: "US",
    },
  },
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 20">
      <path d="M1 10h39M32 2l8 8-8 8" />
    </svg>
  );
}


export default function ContactPage() {
  return (
    <main className="contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="contact" />

      <section className="contact-hero">
        <div className="contact-hero-grid" aria-hidden="true" />
        <div className="contact-intro">
          <p className="eyebrow">Let&apos;s talk</p>
          <h1>Tell us what you&apos;re trying to grow.</h1>
          <p className="contact-lead">
            Share what is working, what is not, and where you want the business
            to go. We will help you identify the right next move without forcing
            a service that does not fit.
          </p>
          <div className="contact-promise">
            <span aria-hidden="true">✦</span>
            <p><strong>Start with a real conversation.</strong> No complicated intake process and no generic sales pitch.</p>
          </div>
        </div>

        <form
          className="contact-form"
          id="project-form"
          action="mailto:hello@velvetinkmedia.com"
          method="post"
          encType="text/plain"
        >
          <div className="contact-form-heading">
            <span>Project inquiry</span>
            <strong>Start here</strong>
          </div>
          <div className="contact-form-grid">
            <label>
              Your name
              <input type="text" name="Name" autoComplete="name" placeholder="Name" required />
            </label>
            <label>
              Email address
              <input type="email" name="Email" autoComplete="email" placeholder="you@company.com" required />
            </label>
            <label>
              Company
              <input type="text" name="Company" autoComplete="organization" placeholder="Business name" />
            </label>
            <label>
              Website
              <input type="url" name="Website" autoComplete="url" placeholder="https://" />
            </label>
            <label className="contact-form-wide">
              What do you need help with?
              <select name="Service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Web Design</option>
                <option>Local SEO</option>
                <option>Paid Media</option>
                <option>GEO &amp; AEO</option>
                <option>Connected Marketing Strategy</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="contact-form-wide">
              Tell us about the goal
              <textarea name="Project details" rows={5} placeholder="What would you like your marketing to do better?" required />
            </label>
          </div>
          <button className="button button-purple contact-submit" type="submit">
            Send Project Details <ArrowIcon />
          </button>
          <p className="contact-form-note">Prefer email? Write directly to <a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a>.</p>
        </form>
      </section>

      <section className="contact-options" aria-label="Other ways to contact Velvet Ink Media">
        <a className="contact-option contact-option-purple" href="tel:+18137975515">
          <span>01</span>
          <small>Call the studio</small>
          <strong>813-797-5515</strong>
          <i><ArrowIcon /></i>
        </a>
        <a className="contact-option contact-option-blue" href="mailto:hello@velvetinkmedia.com">
          <span>02</span>
          <small>Send an email</small>
          <strong>hello@velvetinkmedia.com</strong>
          <i><ArrowIcon /></i>
        </a>
        <div className="contact-option contact-option-lime">
          <span>03</span>
          <small>Tampa studio</small>
          <strong>1101 E Cumberland Ave #201H<br />Tampa, FL 33602</strong>
          <i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="contact-next">
        <div className="contact-next-heading">
          <p className="eyebrow">What happens next</p>
          <h2>A simple start. A clear recommendation.</h2>
          <p>We will review what you send before we talk, so the first conversation can focus on the business instead of basic intake questions.</p>
        </div>
        <div className="contact-next-steps">
          <article><span>01</span><h3>We review</h3><p>We look at your goals, website, visibility, and the specific challenges you shared.</p></article>
          <article><span>02</span><h3>We talk</h3><p>We ask the right questions, explain what we see, and clarify the most useful next step.</p></article>
          <article><span>03</span><h3>You decide</h3><p>If we are a good fit, you receive a clear scope. If not, you still leave with useful direction.</p></article>
        </div>
      </section>

      <SiteFooter variant="contact" />
    </main>
  );
}
