import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About Velvet Ink Media | Tampa Marketing Agency",
  description:
    "Meet Velvet Ink Media, a Tampa Bay SEO, marketing and web design agency helping businesses build stronger digital foundations since 2008.",
  alternates: { canonical: "https://www.velvetinkmedia.com/about-us/" },
  openGraph: {
    title: "About Velvet Ink Media",
    description:
      "A Tampa Bay team of SEO specialists, marketers and web designers helping businesses grow since 2008.",
    url: "https://www.velvetinkmedia.com/about-us/",
    siteName: "Velvet Ink Media",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.velvetinkmedia.com/about-us/#page",
      url: "https://www.velvetinkmedia.com/about-us/",
      name: "About Velvet Ink Media",
      description:
        "Velvet Ink Media is a Tampa Bay SEO, marketing and web design agency established in 2008.",
      about: { "@id": "https://www.velvetinkmedia.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.velvetinkmedia.com/#organization",
      name: "Velvet Ink Media",
      url: "https://www.velvetinkmedia.com/",
      foundingDate: "2008",
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
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.velvetinkmedia.com/" },
        { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.velvetinkmedia.com/about-us/" },
      ],
    },
  ],
};

const roots = [
  {
    number: "01",
    title: "SEO Services",
    text: "Our goal is to improve visibility in the local Tampa Bay market. Even the most beautiful website is just a website if no one comes to visit it.",
    color: "purple",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    text: "Help your services reach those in need through Facebook and other social media platforms with a personalized digital marketing strategy.",
    color: "blue",
  },
  {
    number: "03",
    title: "Reputation Management",
    text: "Fully managed review management includes review monitoring, ratings improvement, response management and negative review cleaning.",
    color: "lime",
  },
  {
    number: "04",
    title: "Brand Design",
    text: "From color and fonts to illustrations, logo design, business cards, letterhead and brochures, good brand design is a must.",
    color: "peach",
  },
  {
    number: "05",
    title: "Content Management",
    text: "A content management system gives you the freedom to edit, add or delete website content as it becomes more or less relevant for your target customer.",
    color: "mint",
  },
  {
    number: "06",
    title: "Ecommerce Development",
    text: "We create and build ecommerce websites that help businesses sell products, books or digital downloads online using WooCommerce for WordPress.",
    color: "rose",
  },
];


export default function AboutPage() {
  return (
    <main className="about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader current="about" />

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">Tampa Bay · Established 2008</p>
          <h1>A team of creative <span>SEO specialists, marketers</span> and web designers.</h1>
          <p>We are an SEO, marketing and web design agency.</p>
        </div>
        <div className="about-hero-stage" aria-label="Velvet Ink Media team collaborating on a project">
          <div className="about-stage-grid" />
          <figure><Image src="/about-working-photo.webp" width={1440} height={960} alt="Marketing team collaborating around a laptop" preload /></figure>
          <div className="about-float-card about-float-year"><small>Established</small><strong>2008</strong><span>Tampa Bay, Florida</span></div>
          <div className="about-float-card about-float-focus"><small>Connected expertise</small><strong>SEO · MARKETING · WEB</strong></div>
        </div>
      </section>

      <section className="about-story-v2">
        <div className="about-story-v2-heading">
          <p className="eyebrow">Our story</p>
          <h2>Built in Tampa Bay. Shaped by the businesses we serve.</h2>
        </div>
        <div className="about-story-v2-copy">
          <p className="about-story-lead">Established in Tampa Bay, Florida, we have been marketing, designing and developing websites since 2008.</p>
          <p>Our list of satisfied clients includes small businesses and corporations, law firms, medical practices, event professionals, nonprofit organizations and entrepreneurs. Working with clients from different industries and backgrounds, we enjoy the diversity and challenges that come with each project.</p>
          <p>From custom WordPress websites and rebranding to content management, search engine optimization, website support and hosting, our goal is to become our clients&apos; trusted partner for all their online and marketing needs.</p>
          <a className="button button-purple" href="/contact">Work With Velvet Ink Media</a>
        </div>
        <div className="about-fact-line" aria-label="Company facts">
          <div><strong>2008</strong><span>Established in Tampa Bay</span></div>
          <div><strong>7</strong><span>Client categories served</span></div>
          <div><strong>1</strong><span>Connected marketing partner</span></div>
        </div>
      </section>

      <section className="about-standards-v2">
        <div className="about-standards-heading">
          <p className="eyebrow">What guides the work</p>
          <h2>A website should be more than something beautiful.</h2>
        </div>
        <div className="about-standard-rows">
          <article><span>01</span><h3>Be visible</h3><p>Even the most beautiful website is just a website if no one comes to visit it.</p></article>
          <article><span>02</span><h3>Work as one system</h3><p>Architecture should seamlessly combine aesthetics and functionality.</p></article>
          <article><span>03</span><h3>Stay intuitive</h3><p>A simple, intuitive user experience helps turn visitors into loyal customers.</p></article>
        </div>
      </section>

      <section className="about-ledger-v2">
        <div className="about-ledger-heading">
          <p className="eyebrow">The roots of our work</p>
          <h2>Creative and technical experience across the digital lifecycle.</h2>
          <p>The services have expanded over time, but they have always been connected by the same goal: help clients communicate clearly, get found and make the next step easier.</p>
        </div>
        <div className="about-ledger-rows">
          {roots.map((item) => (
            <article key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-wordpress-v2">
        <div className="about-wp-mark" aria-hidden="true"><small>Built with</small><strong>WP</strong><span>Open source. Flexible. Supported.</span></div>
        <div className="about-wordpress-v2-copy">
          <p className="eyebrow">WordPress specialists</p>
          <h2>Built for flexibility, functionality and usability.</h2>
          <p>Velvet Ink Media specializes in the open-source content management system WordPress. A CMS gives clients the freedom to edit, add or delete website content as it becomes more or less relevant for their target customer.</p>
          <p>Our built-from-scratch themes work within the WordPress framework to support full functionality and maximum usability.</p>
          <a className="button button-outline" href="/web-design">Explore Web Design</a>
        </div>
      </section>

      <SiteFooter variant="about" />
    </main>
  );
}
