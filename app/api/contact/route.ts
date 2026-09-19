import { NextRequest, NextResponse } from "next/server";

const allowedServices = new Set([
  "",
  "Web Design",
  "Local SEO",
  "Paid Media",
  "GEO & AEO",
  "Connected Marketing Strategy",
  "Not sure yet",
]);

const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaximum = 5;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  website?: unknown;
  service?: unknown;
  projectDetails?: unknown;
  companyWebsite?: unknown;
  startedAt?: unknown;
};

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#039;",
        '"': "&quot;",
      })[character] || character,
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWebsite(website: string) {
  if (!website) return true;

  try {
    const url = new URL(website);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  if (!origin || !host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimits.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > rateLimitMaximum;
}

function json(message: string, status: number) {
  return NextResponse.json(
    { message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return json("This form submission could not be verified.", 403);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) {
    return json("The submitted message is too large.", 413);
  }

  const ip =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return json("Too many submissions were received. Please wait and try again.", 429);
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json("The form submission was not valid.", 400);
  }

  const honeypot = cleanString(payload.companyWebsite);
  if (honeypot) {
    return json("Thanks. Your project details were sent successfully.", 200);
  }

  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
  const completionTime = Date.now() - startedAt;
  if (completionTime < 2_000 || completionTime > 24 * 60 * 60 * 1000) {
    return json("Please reload the page and try the form again.", 400);
  }

  const name = cleanString(payload.name);
  const email = cleanString(payload.email).toLowerCase();
  const company = cleanString(payload.company);
  const website = cleanString(payload.website);
  const service = cleanString(payload.service);
  const projectDetails = cleanString(payload.projectDetails);

  if (name.length < 2 || name.length > 100) {
    return json("Please enter your name.", 400);
  }

  if (email.length > 254 || !isValidEmail(email)) {
    return json("Please enter a valid email address.", 400);
  }

  if (company.length > 120) {
    return json("The company name is too long.", 400);
  }

  if (website.length > 500 || !isValidWebsite(website)) {
    return json("Please enter a valid website address beginning with http:// or https://.", 400);
  }

  if (!allowedServices.has(service)) {
    return json("Please select a valid service.", 400);
  }

  if (projectDetails.length < 10 || projectDetails.length > 5_000) {
    return json("Please provide at least 10 characters about your goal.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form error: RESEND_API_KEY is not configured.");
    return json(
      "The form is temporarily unavailable. Please email hello@velvetinkmedia.com.",
      503,
    );
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Velvet Ink Media Website <website@velvetinkmedia.com>";
  const to = process.env.CONTACT_TO_EMAIL || "hello@velvetinkmedia.com";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeWebsite = escapeHtml(website || "Not provided");
  const safeService = escapeHtml(service || "Not selected");
  const safeDetails = escapeHtml(projectDetails).replace(/\n/g, "<br />");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Website: ${website || "Not provided"}`,
        `Service: ${service || "Not selected"}`,
        "",
        "Project details:",
        projectDetails,
      ].join("\n"),
      html: `
        <h1>New project inquiry</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Website:</strong> ${safeWebsite}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Project details:</strong><br />${safeDetails}</p>
      `,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Contact form delivery failed with status:", resendResponse.status);
    return json(
      "We could not send your project details. Please try again or email hello@velvetinkmedia.com.",
      502,
    );
  }

  return json("Thanks. Your project details were sent successfully.", 200);
}
