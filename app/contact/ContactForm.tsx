"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import SiteLink from "../components/SiteLink";

type SubmissionState =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 20">
      <path d="M1 10h39M32 2l8 8-8 8" />
    </svg>
  );
}

export default function ContactForm() {
  const startedAt = useRef(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);
    setSubmission({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          website: data.get("website"),
          service: data.get("service"),
          projectDetails: data.get("projectDetails"),
          companyWebsite: data.get("companyWebsite"),
          startedAt: startedAt.current,
        }),
      });

      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(
          result.message ||
            "We could not send your project details. Please try again or email us directly.",
        );
      }

      form.reset();
      startedAt.current = Date.now();
      setSubmission({
        type: "success",
        message: "Thanks. Your project details were sent successfully. We will be in touch soon.",
      });
    } catch (error) {
      setSubmission({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your project details. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" id="project-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span>Project inquiry</span>
        <strong>Start here</strong>
      </div>
      <div className="contact-form-grid">
        <label>
          Your name
          <input type="text" name="name" autoComplete="name" placeholder="Name" minLength={2} maxLength={100} required />
        </label>
        <label>
          Email address
          <input type="email" name="email" autoComplete="email" placeholder="you@company.com" maxLength={254} required />
        </label>
        <label>
          Company
          <input type="text" name="company" autoComplete="organization" placeholder="Business name" maxLength={120} />
        </label>
        <label>
          Website
          <input type="url" name="website" autoComplete="url" placeholder="https://" maxLength={500} />
        </label>
        <label className="contact-form-wide">
          What do you need help with?
          <select name="service" defaultValue="">
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
          <textarea name="projectDetails" rows={5} placeholder="What would you like your marketing to do better?" minLength={10} maxLength={5000} required />
        </label>
        <div className="contact-honeypot" aria-hidden="true">
          <label>
            Leave this field empty
            <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>
      <button className="button button-purple contact-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Project Details"} <ArrowIcon />
      </button>
      {submission.type !== "idle" && (
        <p
          className={`contact-form-status contact-form-status-${submission.type}`}
          role={submission.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {submission.message}
        </p>
      )}
      <p className="contact-form-note">Prefer email? Write directly to <SiteLink href="mailto:hello@velvetinkmedia.com">hello@velvetinkmedia.com</SiteLink>.</p>
    </form>
  );
}
