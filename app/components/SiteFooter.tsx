import Image from "next/image";

type FooterVariant =
  | "home"
  | "about"
  | "services"
  | "social-media"
  | "blog"
  | "search-changes-article"
  | "measurement-article"
  | "domination-article"
  | "ai-search-article"
  | "rankings-article"
  | "paid-media"
  | "local-seo"
  | "web-design"
  | "geo-aeo"
  | "contact"
  | "work"
  | "content-marketing";

type FooterAction = {
  href: string;
  label: string;
};

type FooterConfig = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryAction?: FooterAction;
  secondaryAction?: FooterAction;
  brandDescription: string;
  companyFeature: FooterAction;
  compact?: boolean;
  includeReputation?: boolean;
  abbreviatedServices?: boolean;
};

const defaultBrandDescription =
  "A Tampa marketing and web design agency creating connected digital systems that help businesses grow.";

const footerConfigs: Record<FooterVariant, FooterConfig> = {
  home: {
    eyebrow: "Let's talk",
    title: "Let's start something great together.",
    description:
      "Not sure if you need a marketing company? Get us on the phone and we'll tell you exactly how local SEO and marketing can move the needle for your Tampa Bay business.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: { href: "mailto:hello@velvetinkmedia.com", label: "Send a message" },
    brandDescription:
      "A full-service Tampa marketing and web design agency creating structured, beautiful work that helps businesses grow.",
    companyFeature: { href: "/#proof", label: "Our Approach" },
    includeReputation: true,
  },
  about: {
    eyebrow: "Let's talk",
    title: "Let's start something great together.",
    description:
      "Tell us what your business needs to improve. We'll help you identify the most useful place to begin.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: { href: "/contact", label: "Send a Message" },
    brandDescription:
      "A Tampa marketing agency connecting web design, SEO, GEO, AEO, paid media, content and measurement around real business growth.",
    companyFeature: { href: "/work", label: "Our Work" },
  },
  services: {
    eyebrow: "Let's talk",
    title: "Let's choose the right starting point.",
    description:
      "Tell us what your business needs to improve. We'll help you separate the urgent work from the nice-to-have work and build a practical path forward.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: { href: "/contact", label: "Start a Conversation" },
    brandDescription:
      "A Tampa marketing agency connecting web design, SEO, GEO, AEO, paid media, content, and measurement around real business growth.",
    companyFeature: { href: "/#proof", label: "Our Approach" },
  },
  "social-media": {
    eyebrow: "Let's talk",
    title: "Give social media a useful job.",
    description:
      "Tell us where you are showing up now, what feels inconsistent, and what the business needs social media to support. We'll help you choose a practical starting point.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: { href: "/contact", label: "Plan Your Social Strategy" },
    brandDescription:
      "A Tampa marketing agency connecting social media, content, search visibility, web design, paid media, and measurement around real business growth.",
    companyFeature: { href: "/work", label: "Our Work" },
  },
  blog: {
    eyebrow: "Put the ideas to work",
    title: "Let's turn better marketing decisions into growth.",
    description:
      "Tell us what you are trying to improve. We will help you identify the right combination of website, search, content, and advertising support.",
    primaryAction: { href: "/contact", label: "Start a Project" },
    secondaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    brandDescription: defaultBrandDescription,
    companyFeature: { href: "/#proof", label: "Our Approach" },
  },
  "search-changes-article": {
    eyebrow: "Put the ideas to work",
    title: "Build visibility customers and AI systems can understand.",
    description:
      "We connect strong websites, local SEO, useful content, and measurable marketing around one business goal.",
    primaryAction: { href: "/contact", label: "Start a Project" },
    secondaryAction: { href: "/local-seo", label: "Explore Local SEO" },
    brandDescription: defaultBrandDescription,
    companyFeature: { href: "/#proof", label: "Our Approach" },
  },
  "measurement-article": {
    eyebrow: "Make the numbers useful",
    title: "Connect local visibility to real business growth.",
    description:
      "We build practical local SEO systems that make it easier to see what is working, what needs attention, and where the next opportunity lives.",
    primaryAction: { href: "/contact", label: "Build Your Measurement Plan" },
    secondaryAction: { href: "/local-seo", label: "Explore Local SEO" },
    brandDescription: defaultBrandDescription,
    companyFeature: { href: "/work", label: "Our Work" },
  },
  "domination-article": {
    eyebrow: "Put the checklist to work",
    title: "Turn local visibility into qualified opportunities.",
    description:
      "We connect Google Business Profile optimization, strong local pages, useful content, and practical measurement around your most valuable markets.",
    primaryAction: { href: "/contact", label: "Build Your Local SEO Plan" },
    secondaryAction: { href: "/local-seo", label: "Explore Local SEO" },
    brandDescription: defaultBrandDescription,
    companyFeature: { href: "/work", label: "Our Work" },
  },
  "ai-search-article": {
    eyebrow: "Make the business easier to recommend",
    title: "Build visibility for search today and AI discovery tomorrow.",
    description:
      "We connect technical SEO, local authority, useful content, and measurable lead generation around one practical strategy.",
    primaryAction: { href: "/contact", label: "Build Your Strategy" },
    secondaryAction: { href: "/geo-aeo", label: "Explore GEO + AEO" },
    brandDescription: defaultBrandDescription,
    companyFeature: { href: "/work", label: "Our Work" },
  },
  "rankings-article": {
    eyebrow: "Diagnose before reacting",
    title: "Find the cause before changing the strategy.",
    description:
      "We connect local rankings, technical SEO, content, Business Profile activity, and conversion data to identify what changed and what should happen next.",
    primaryAction: { href: "/contact", label: "Review Your Ranking Drop" },
    secondaryAction: { href: "/local-seo", label: "Explore Local SEO" },
    brandDescription: defaultBrandDescription,
    companyFeature: { href: "/work", label: "Our Work" },
  },
  "paid-media": {
    eyebrow: "Let's talk",
    title: "Let's make every click more accountable.",
    description:
      "Tell us what you are promoting, who you need to reach, and where the current campaign is falling short. We'll help you identify the strongest next move.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: {
      href: "mailto:hello@velvetinkmedia.com?subject=Paid%20Media%20Consultation",
      label: "Request a Paid Media Review",
    },
    brandDescription:
      "A Tampa marketing agency connecting paid media, local SEO, web design, and measurement around real business growth.",
    companyFeature: { href: "/#proof", label: "Our Approach" },
  },
  "local-seo": {
    eyebrow: "Let's talk",
    title: "Let's make your business easier to find.",
    description:
      "Tell us where your local visibility is falling short. We'll help you understand what is getting in the way and where to focus next.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: {
      href: "mailto:hello@velvetinkmedia.com?subject=Local%20SEO%20Audit%20Request",
      label: "Request a Local SEO Audit",
    },
    brandDescription:
      "A Tampa marketing and web design agency helping businesses improve local visibility, customer experience, and measurable growth.",
    companyFeature: { href: "/#proof", label: "Our Approach" },
  },
  "web-design": {
    eyebrow: "Let's talk",
    title: "Let's build a website that earns its keep.",
    description:
      "Tell us what your current website is failing to do. We'll help you understand what should change and whether a redesign is the right move.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: { href: "mailto:hello@velvetinkmedia.com", label: "Start a Website Project" },
    brandDescription:
      "A full-service Tampa marketing and web design agency creating structured, useful work that helps businesses grow.",
    companyFeature: { href: "/#proof", label: "Our Approach" },
    includeReputation: true,
    abbreviatedServices: true,
  },
  "geo-aeo": {
    eyebrow: "Let's talk",
    title: "Make your business easier to understand and recommend.",
    description:
      "Tell us what your customers are searching for and where your current visibility falls short. We'll help you identify the strongest next move across SEO, GEO, and AEO.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: {
      href: "mailto:hello@velvetinkmedia.com?subject=GEO%20and%20AEO%20Consultation",
      label: "Request an AI Search Review",
    },
    brandDescription:
      "A Tampa marketing agency connecting SEO, GEO, AEO, web design, paid media, and measurement around real business growth.",
    companyFeature: { href: "/#proof", label: "Our Approach" },
  },
  contact: {
    compact: true,
    brandDescription: defaultBrandDescription,
    companyFeature: { href: "/#proof", label: "Our Approach" },
    includeReputation: true,
    abbreviatedServices: true,
  },
  work: {
    eyebrow: "Your project could be next",
    title: "Let's build work worth showing.",
    description:
      "Tell us what the business needs to improve. We will help you identify the right starting point and connect the work around a measurable goal.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: { href: "/contact", label: "Start a Conversation" },
    brandDescription:
      "A Tampa marketing agency connecting web design, SEO, GEO, AEO, paid media, content, and measurement around real business growth.",
    companyFeature: { href: "/work", label: "Our Work" },
  },
  "content-marketing": {
    eyebrow: "Let's talk",
    title: "Build content that keeps earning attention.",
    description:
      "Tell us what your customers need to understand and where your current content falls short. We'll help you identify the strongest place to start.",
    primaryAction: { href: "tel:+18137975515", label: "Call 813-797-5515" },
    secondaryAction: { href: "/contact", label: "Plan Your Content Strategy" },
    brandDescription:
      "A Tampa marketing agency connecting useful content, search visibility, web design, paid media, and measurement around real business growth.",
    companyFeature: { href: "/work", label: "Our Work" },
  },
};

export default function SiteFooter({ variant }: { variant: FooterVariant }) {
  const config = footerConfigs[variant];
  const homeHref = variant === "home" ? "#top" : "/";

  return (
    <footer className={`site-footer${config.compact ? " contact-footer" : ""}`} id="contact">
      {!config.compact && config.eyebrow && config.title && config.description && config.primaryAction && config.secondaryAction ? (
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <p className="footer-eyebrow">{config.eyebrow}</p>
            <h2>{config.title}</h2>
            <p>{config.description}</p>
            <div className="footer-actions">
              <a className="footer-button footer-button-light" href={config.primaryAction.href}>{config.primaryAction.label}</a>
              <a className="footer-button footer-button-outline" href={config.secondaryAction.href}>{config.secondaryAction.label}</a>
            </div>
          </div>
          <aside className="footer-contact-card" aria-label="Velvet Ink Media contact details">
            <a className="footer-contact-logo" href={homeHref} aria-label={variant === "home" ? "Back to top" : "Velvet Ink Media home"}>
              <Image src="/velvet-ink-logo.png" width={305} height={56} alt="Velvet Ink Media" />
            </a>
            <dl>
              <div><dt>Studio</dt><dd><address>1101 E Cumberland Ave #201H<br />Tampa, FL 33602</address></dd></div>
              <div><dt>Phone</dt><dd><a href="tel:+18137975515">813-797-5515</a></dd></div>
              <div><dt>Email</dt><dd><a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a></dd></div>
            </dl>
          </aside>
        </div>
      ) : null}

      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="footer-brand" href={homeHref} aria-label={variant === "home" ? "Back to top" : "Velvet Ink Media home"}>
            <Image src="/velvet-ink-logo.png" width={305} height={56} alt="Velvet Ink Media" />
          </a>
          <p>{config.brandDescription}</p>
        </div>
        <nav className="footer-column" aria-label="Footer services">
          <h3>Services</h3>
          <a href="/services">All Services</a>
          <a href="/web-design">Web Design</a>
          <a href="/local-seo">Local SEO</a>
          <a href="/geo-aeo">GEO + AEO</a>
          {!config.abbreviatedServices ? <a href="/content-marketing">Content Marketing</a> : null}
          {!config.abbreviatedServices ? <a href="/social-media">Social Media</a> : null}
          <a href="/paid-media">Paid Media</a>
          {config.includeReputation ? <a href="/#services-overview">Reputation</a> : null}
        </nav>
        <nav className="footer-column" aria-label="Footer company links">
          <h3>Company</h3>
          <a href="/about-us">About Us</a>
          <a href="/blog">Insights</a>
          <a href={config.companyFeature.href}>{config.companyFeature.label}</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="footer-column footer-contact-column">
          <h3>Contact</h3>
          <a href="tel:+18137975515">813-797-5515</a>
          <a href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</a>
          <address>Tampa, FL 33602</address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Velvet Ink Media. All rights reserved.</p>
        <div><a href="#top">Privacy</a><a href="#top">Terms</a></div>
      </div>
    </footer>
  );
}
