# Velvet Ink Media Website

Standard Next.js App Router project containing the approved Velvet Ink Media website designs.

## Included routes

- `/` Home
- `/services` Services overview
- `/web-design` Web design
- `/local-seo` Local SEO
- `/geo-aeo` GEO and AEO
- `/paid-media` Paid media
- `/content-marketing` Content marketing
- `/social-media` Social media
- `/about-us` About
- `/work` Our work
- `/contact` Contact
- `/blog` Blog landing page
- `/blog/how-search-is-changing-for-local-businesses` Blog article

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production check

```bash
npm run build
npm run start
```

## GitHub

Create an empty GitHub repository, then run:

```bash
git init
git add .
git commit -m "Initial Next.js website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Vercel

1. Import the GitHub repository into Vercel.
2. Keep the detected framework set to Next.js.
3. Keep the default build command, `next build`.
4. Deploy.

No hosting-specific environment variables are currently required.

## Contact form

The contact form currently opens the visitor's email client through a `mailto:` submission. Replace this with a server action, API route, or form provider before launch if you want submissions handled directly on the website.
