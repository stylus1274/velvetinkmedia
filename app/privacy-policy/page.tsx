import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import SiteLink from "../components/SiteLink";

export const metadata: Metadata = {
  title: "Privacy Policy | Velvet Ink Media",
  description:
    "Read how Velvet Ink Media collects, uses, protects, and shares information submitted through velvetinkmedia.com.",
  alternates: {
    canonical: "https://www.velvetinkmedia.com/privacy-policy",
  },
};

const sections = [
  { href: "#information-we-collect", label: "Information we collect" },
  { href: "#how-we-use-information", label: "How we use information" },
  { href: "#cookies-and-analytics", label: "Cookies and analytics" },
  { href: "#how-we-share-information", label: "How we share information" },
  { href: "#retention-and-security", label: "Retention and security" },
  { href: "#your-choices", label: "Your choices" },
  { href: "#contact-us", label: "Contact us" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <SiteHeader current="legal" />
      <main>
        <section className="legal-hero">
          <div className="legal-hero-grid" aria-hidden="true" />
          <div className="legal-hero-copy">
            <p className="eyebrow">Privacy Policy</p>
            <h1>How we handle your information.</h1>
            <p>
              This policy explains what Velvet Ink Media LLC collects through
              velvetinkmedia.com, why we collect it, and the choices available to you.
            </p>
            <p className="legal-updated">Effective and last updated: September 20, 2026</p>
          </div>
        </section>

        <div className="legal-layout">
          <aside className="legal-summary" aria-label="Privacy policy contents">
            <p>On this page</p>
            <nav>
              {sections.map((section) => (
                <SiteLink key={section.href} href={section.href}>{section.label}</SiteLink>
              ))}
            </nav>
          </aside>

          <article className="legal-content">
            <section aria-labelledby="policy-scope">
              <p className="legal-section-number">01</p>
              <h2 id="policy-scope">Scope of this policy</h2>
              <p>
                This Privacy Policy applies to information collected through this website and
                through communications you send to Velvet Ink Media LLC. It does not apply to
                third-party websites or services that may be linked from this site.
              </p>
            </section>

            <section id="information-we-collect" aria-labelledby="information-heading">
              <p className="legal-section-number">02</p>
              <h2 id="information-heading">Information we collect</h2>
              <h3>Information you provide</h3>
              <p>
                When you contact us, request information, or submit the project form, we may
                collect your name, email address, company name, website address, requested
                service, project details, and any other information you choose to provide.
              </p>
              <h3>Information collected automatically</h3>
              <p>
                Our hosting and security systems may receive technical information when you use
                the site, including your IP address, browser and device information, requested
                pages, referring page, and date and time of access. The contact form also uses
                an IP address temporarily to help limit spam and abusive submissions.
              </p>
            </section>

            <section id="how-we-use-information" aria-labelledby="use-heading">
              <p className="legal-section-number">03</p>
              <h2 id="use-heading">How we use information</h2>
              <p>We may use the information we collect to:</p>
              <ul>
                <li>Respond to questions and project inquiries.</li>
                <li>Evaluate whether our services are a good fit for your needs.</li>
                <li>Provide, maintain, secure, and improve the website.</li>
                <li>Prevent spam, fraud, misuse, and other security issues.</li>
                <li>Comply with applicable law and protect our legal rights.</li>
              </ul>
              <p>
                We do not sell or rent personal information. We do not use information submitted
                through the contact form to add you to a marketing list without your permission.
              </p>
            </section>

            <section id="cookies-and-analytics" aria-labelledby="cookies-heading">
              <p className="legal-section-number">04</p>
              <h2 id="cookies-heading">Cookies and analytics</h2>
              <p>
                At the date shown above, this site does not intentionally use advertising cookies
                or third-party analytics tags. Our hosting and security providers may use
                technologies that are necessary to deliver, protect, and diagnose the site. If we
                add analytics, advertising, or other non-essential tracking tools, we will update
                this policy and provide consent choices where required.
              </p>
            </section>

            <section id="how-we-share-information" aria-labelledby="sharing-heading">
              <p className="legal-section-number">05</p>
              <h2 id="sharing-heading">How we share information</h2>
              <p>We may disclose information in these limited circumstances:</p>
              <ul>
                <li>
                  <strong>Service providers.</strong> Vendors that support site hosting, security,
                  and email delivery may process information on our behalf. The site is hosted by
                  Vercel, and contact-form messages may be delivered using Resend.
                </li>
                <li>
                  <strong>Legal requirements.</strong> We may disclose information when required by
                  law or when reasonably necessary to protect rights, safety, and security.
                </li>
                <li>
                  <strong>Business changes.</strong> Information may be transferred as part of a
                  merger, acquisition, financing, reorganization, or sale of business assets.
                </li>
              </ul>
            </section>

            <section id="retention-and-security" aria-labelledby="retention-heading">
              <p className="legal-section-number">06</p>
              <h2 id="retention-heading">Retention and security</h2>
              <p>
                We retain personal information only as long as reasonably necessary for the
                purposes described in this policy, including responding to inquiries, maintaining
                appropriate business records, resolving disputes, and meeting legal obligations.
              </p>
              <p>
                We use reasonable administrative and technical safeguards designed to protect
                personal information. No internet transmission or storage system can be guaranteed
                to be completely secure.
              </p>
            </section>

            <section id="your-choices" aria-labelledby="choices-heading">
              <p className="legal-section-number">07</p>
              <h2 id="choices-heading">Your choices</h2>
              <p>
                You may ask us to access, correct, or delete personal information you have provided
                to us. We may need to verify your identity before completing a request, and some
                information may be retained when required by law or for legitimate business records.
                Privacy rights vary by location.
              </p>
              <p>
                To make a request, email{" "}
                <SiteLink href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</SiteLink>.
              </p>
            </section>

            <section aria-labelledby="children-heading">
              <p className="legal-section-number">08</p>
              <h2 id="children-heading">Children&apos;s privacy</h2>
              <p>
                This website is intended for business audiences and is not directed to children
                under 13. We do not knowingly collect personal information from children under 13.
                If you believe a child has provided information to us, please contact us so we can
                review and delete it as appropriate.
              </p>
            </section>

            <section aria-labelledby="changes-heading">
              <p className="legal-section-number">09</p>
              <h2 id="changes-heading">Changes to this policy</h2>
              <p>
                We may update this policy as our website, services, or legal obligations change.
                The current version will be posted on this page with a revised effective date.
              </p>
            </section>

            <section id="contact-us" aria-labelledby="contact-heading">
              <p className="legal-section-number">10</p>
              <h2 id="contact-heading">Contact us</h2>
              <p>Questions or privacy requests can be sent to:</p>
              <address>
                <strong>Velvet Ink Media LLC</strong><br />
                1101 E Cumberland Ave #201H<br />
                Tampa, FL 33602<br />
                <SiteLink href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</SiteLink><br />
                <SiteLink href="tel:+18137975515">813-797-5515</SiteLink>
              </address>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter variant="contact" />
    </div>
  );
}
