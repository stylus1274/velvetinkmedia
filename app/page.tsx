import SiteHeader from "./components/SiteHeader";

const discoveryStages = [
  {
    number: "01",
    title: "Build the Foundation",
    description:
      "Create a fast, well-structured website that makes your services clear to customers and search systems.",
    capabilities: ["Web design", "Technical SEO", "Analytics"],
    accent: "peach",
  },
  {
    number: "02",
    title: "Get Found",
    description:
      "Increase visibility wherever Tampa customers search, compare options, and decide who to contact.",
    capabilities: ["Local SEO", "Google profile", "Paid media"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Become the Answer",
    description:
      "Build the structured content and authority signals AI systems need to understand and recommend your business.",
    capabilities: ["GEO & AEO", "Structured content", "Schema & authority"],
    accent: "purple",
  },
  {
    number: "04",
    title: "Turn Visibility Into Growth",
    description:
      "Connect attention to a clear next step, then measure what produces qualified leads and real business growth.",
    capabilities: ["Landing pages", "Lead tracking", "Optimization"],
    accent: "lime",
  },
];

const localSeoCapabilities = [
  {
    title: "AI Keyword Research",
    category: "Search demand · Customer intent",
    description:
      "Find the phrases Tampa customers use when they are ready to act, then build the right pages around them.",
    accent: "purple",
    visual: "keywords",
  },
  {
    title: "Competitor Analysis",
    category: "Local landscape · Opportunity gaps",
    description:
      "See who owns the local results, where they are strong, and where your best opportunities are hiding.",
    accent: "blue",
    visual: "competitors",
  },
  {
    title: "Search Performance",
    category: "Visibility · Traffic · Leads",
    description:
      "Connect rankings and traffic to meaningful business movement with reporting that stays easy to understand.",
    accent: "lime",
    visual: "performance",
  },
  {
    title: "Rank Tracking",
    category: "Priority searches · Service areas",
    description:
      "Track the searches that matter across Tampa and the surrounding communities you want to reach.",
    accent: "peach",
    visual: "rankings",
  },
  {
    title: "Reputation Management",
    category: "Reviews · Responses · Trust",
    description:
      "Strengthen review velocity, response quality, and the signals customers use to choose a local business.",
    accent: "mint",
    visual: "reputation",
  },
  {
    title: "Geo-Grid Rankings",
    category: "Map visibility · Neighborhood reach",
    description:
      "See how visible your business is block by block, then focus effort where local search coverage is weakest.",
    accent: "rose",
    visual: "geo",
  },
];

const fullServiceLineup = [
  {
    number: "02",
    title: "Pay-Per-Click",
    label: "PPC",
    visual: "ppc",
    description:
      "Focused Google Ads campaigns built to attract qualified leads, control spend, and make every click accountable.",
    accent: "blue",
  },
  {
    number: "03",
    title: "SEO Services",
    label: "SEO",
    visual: "seo",
    description:
      "Technical, on-page, and local search strategies that turn visibility into sustainable growth.",
    accent: "lime",
  },
  {
    number: "04",
    title: "Social Media",
    label: "SOC",
    visual: "social",
    description:
      "Consistent content and campaigns that keep your business visible, useful, and recognizable.",
    accent: "peach",
  },
  {
    number: "05",
    title: "Content Creation",
    label: "TXT",
    visual: "content",
    description:
      "Helpful, search-informed content shaped around customer questions and real business goals.",
    accent: "mint",
  },
  {
    number: "06",
    title: "Branding & Marketing",
    label: "ID",
    visual: "brand",
    description:
      "A clearer identity and practical marketing direction that keeps every customer touchpoint connected.",
    accent: "rose",
  },
];

const businessOutcomes = [
  {
    id: "visibility",
    number: "01",
    label: "Stronger Brand Visibility",
    eyebrow: "Be easier to recognize",
    title: "Build a brand customers remember.",
    description:
      "Create a consistent presence across search, your website, content, and advertising so customers recognize your business before they are ready to act.",
    bullets: [
      "Present one clear message across every channel",
      "Increase branded search demand and customer recall",
      "Look established wherever prospects compare options",
    ],
    visual: "visibility",
  },
  {
    id: "traffic",
    number: "02",
    label: "More Qualified Traffic",
    eyebrow: "Attract the right audience",
    title: "Bring in people already looking for what you offer.",
    description:
      "Earn attention from customers whose searches, location, and intent align with the services your business actually wants to grow.",
    bullets: [
      "Target high-intent searches instead of empty traffic",
      "Strengthen local and service-area visibility",
      "Turn useful pages into consistent entry points",
    ],
    visual: "traffic",
  },
  {
    id: "leads",
    number: "03",
    label: "Better Leads",
    eyebrow: "Make the next step clear",
    title: "Turn more attention into real conversations.",
    description:
      "Connect the right message, landing page, and call to action so qualified prospects have fewer reasons to hesitate.",
    bullets: [
      "Match campaigns with focused landing experiences",
      "Remove friction from forms, calls, and scheduling",
      "Prioritize lead quality, not just lead volume",
    ],
    visual: "leads",
  },
  {
    id: "growth",
    number: "04",
    label: "Measurable Growth",
    eyebrow: "Know what is working",
    title: "Make smarter decisions with clearer performance data.",
    description:
      "Connect marketing activity to meaningful business movement so your next investment is based on evidence rather than guesswork.",
    bullets: [
      "Track calls, forms, and other meaningful conversions",
      "Understand which channels contribute to growth",
      "Use results to improve priorities and budget",
    ],
    visual: "growth",
  },
];

const insights = [
  {
    tag: "Local SEO",
    date: "July 18, 2026",
    title: "Google Business Profile optimization for Tampa businesses",
    description:
      "The profile improvements that help local businesses earn more visibility, calls, and direction requests.",
    image: "/insights/google-business-profile.webp",
    imageAlt:
      "Business owner and marketing strategist reviewing a local business profile",
    accent: "purple",
  },
  {
    tag: "Local Rankings",
    date: "July 11, 2026",
    title: "How local search rankings really work",
    description:
      "A practical look at proximity, relevance, prominence, and the signals a business can actually influence.",
    image: "/insights/local-search-rankings.webp",
    imageAlt: "SEO strategist reviewing local search rankings on a desktop monitor",
    accent: "blue",
  },
  {
    tag: "Search Strategy",
    date: "July 3, 2026",
    title: "SEO vs. Google Ads: where should a local business start?",
    description:
      "Compare speed, cost, staying power, and intent before deciding how to divide your marketing budget.",
    image: "/insights/seo-vs-google-ads.webp",
    imageAlt: "Marketing strategist comparing search and advertising performance",
    accent: "lime",
  },
  {
    tag: "Content Strategy",
    date: "June 26, 2026",
    title: "What makes a service page rank in Tampa?",
    description:
      "Build service pages around customer intent, useful local context, and a clear reason to take the next step.",
    image: "/insights/service-page-strategy.webp",
    imageAlt: "Content strategist planning a local service page",
    accent: "peach",
  },
  {
    tag: "Website Design",
    date: "June 18, 2026",
    title: "Why website speed still matters for local leads",
    description:
      "Slow pages create friction before a visitor ever reaches the form, phone number, or primary offer.",
    image: "/insights/website-speed.webp",
    imageAlt: "Marketer reviewing website performance results on a laptop",
    accent: "mint",
  },
  {
    tag: "Analytics",
    date: "June 10, 2026",
    title: "How to track which marketing channels produce leads",
    description:
      "Move beyond traffic totals by connecting calls, forms, and qualified conversations to their source.",
    image: "/insights/marketing-attribution.webp",
    imageAlt: "Marketing analyst reviewing lead attribution data",
    accent: "rose",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 20">
      <path d="M1 10h39M32 2l8 8-8 8" />
    </svg>
  );
}

function ServiceMiniGraphic({ type }: { type: string }) {
  const chrome = (
    <div className="mini-chrome">
      <span />
      <span />
      <span />
    </div>
  );

  if (type === "ppc") {
    return (
      <div className="service-mini-window mini-ppc" aria-hidden="true">
        {chrome}
        <div className="mini-ppc-body">
          <div className="mini-metric">
            <span>Clicks</span>
            <strong>+28%</strong>
          </div>
          <div className="mini-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  if (type === "seo") {
    return (
      <div className="service-mini-window mini-seo" aria-hidden="true">
        {chrome}
        <div className="mini-seo-body">
          <div className="mini-score">
            <strong>92</strong>
            <span>Health</span>
          </div>
          <div className="mini-rankings">
            <div><span>01</span><i /></div>
            <div><span>03</span><i /></div>
            <div><span>05</span><i /></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "social") {
    return (
      <div className="service-mini-window mini-social" aria-hidden="true">
        {chrome}
        <div className="mini-social-body">
          <div className="mini-profile">
            <span>V</span>
            <div><i /><i /></div>
          </div>
          <div className="mini-post">
            <span />
            <div><i /><i /><i /></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "content") {
    return (
      <div className="service-mini-window mini-content" aria-hidden="true">
        {chrome}
        <div className="mini-document">
          <span>H1</span>
          <strong>Content customers can use</strong>
          <i />
          <i />
          <i className="short-line" />
          <b />
        </div>
      </div>
    );
  }

  return (
    <div className="service-mini-window mini-brand" aria-hidden="true">
      {chrome}
      <div className="mini-brand-body">
        <div className="mini-brand-mark">V</div>
        <div className="mini-brand-type">
          <strong>Aa</strong>
          <i />
          <i />
        </div>
        <div className="mini-swatches">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function CapabilityInterface({ type }: { type: string }) {
  const chrome = (
    <div className="cap-interface-chrome">
      <span />
      <span />
      <span />
    </div>
  );

  if (type === "keywords") {
    return (
      <div className="capability-interface keyword-interface">
        {chrome}
        <div className="keyword-tool">
          <div className="keyword-search">
            <span className="search-icon" />
            <strong>Tampa local SEO</strong>
            <span>Search</span>
          </div>
          <div className="keyword-list">
            <div><strong>local seo services</strong><span>1.9K</span><i>High</i></div>
            <div><strong>tampa seo company</strong><span>720</span><i>High</i></div>
            <div><strong>marketing agency near me</strong><span>480</span><i>Med</i></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "competitors") {
    return (
      <div className="capability-interface competitor-interface">
        {chrome}
        <div className="competitor-tool">
          <div className="competitor-summary">
            <span>Local visibility</span>
            <strong>14 gaps found</strong>
          </div>
          <div className="competitor-bars">
            <div><span>Top competitor</span><i><b /></i><strong>82%</strong></div>
            <div><span>Your business</span><i><b /></i><strong>58%</strong></div>
            <div><span>Market average</span><i><b /></i><strong>44%</strong></div>
          </div>
          <p><span />Best opportunity: service-area pages</p>
        </div>
      </div>
    );
  }

  if (type === "performance") {
    return (
      <div className="capability-interface performance-interface">
        {chrome}
        <div className="performance-tool">
          <div className="performance-metrics">
            <div><span>Clicks</span><strong>1.8K</strong><i>+24%</i></div>
            <div><span>Calls</span><strong>146</strong><i>+18%</i></div>
          </div>
          <div className="performance-chart">
            <span>Search growth</span>
            <svg viewBox="0 0 280 74" preserveAspectRatio="none">
              <path className="chart-fill" d="M2 66 C34 58 44 64 72 46 S118 52 144 34 S190 41 214 20 S252 25 278 7 L278 74 L2 74 Z" />
              <path d="M2 66 C34 58 44 64 72 46 S118 52 144 34 S190 41 214 20 S252 25 278 7" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  if (type === "rankings") {
    return (
      <div className="capability-interface ranking-interface">
        {chrome}
        <div className="ranking-tool">
          <div className="ranking-head">
            <span>Tracked keyword</span><span>Position</span>
          </div>
          <div className="ranking-row top-rank">
            <strong>tampa local seo</strong><span>#1</span><i>+3</i>
          </div>
          <div className="ranking-row">
            <strong>seo company tampa</strong><span>#3</span><i>+5</i>
          </div>
          <div className="ranking-row">
            <strong>local marketing agency</strong><span>#6</span><i>+2</i>
          </div>
        </div>
      </div>
    );
  }

  if (type === "reputation") {
    return (
      <div className="capability-interface reputation-interface">
        {chrome}
        <div className="reputation-tool">
          <div className="rating-summary">
            <strong>4.9</strong>
            <div><span>★★★★★</span><i>124 reviews</i></div>
          </div>
          <div className="review-list">
            <div><span>AB</span><p><strong>Excellent experience</strong><i /></p><b>Replied</b></div>
            <div><span>JM</span><p><strong>Highly recommended</strong><i /></p><b>Reply</b></div>
          </div>
        </div>
      </div>
    );
  }

  const geoRanks = ["7", "5", "3", "4", "6", "3", "1", "2", "5", "2", "1", "1", "8", "4", "2", "3"];
  return (
    <div className="capability-interface geo-interface">
      {chrome}
      <div className="geo-tool">
        <div className="geo-heading">
          <div><span>Visibility radius</span><strong>Riverview, FL</strong></div>
          <b>74%</b>
        </div>
        <div className="geo-map-grid">
          {geoRanks.map((rank, index) => (
            <span className={Number(rank) <= 3 ? "strong-rank" : ""} key={`${rank}-${index}`}>
              {rank}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutcomeGraphic({ type }: { type: string }) {
  const photos: Record<string, { src: string; alt: string; label: string }> = {
    visibility: {
      src: "/outcomes/visibility-photo.webp",
      alt: "Marketing professional reviewing brand visibility data at a desktop computer",
      label: "Brand visibility",
    },
    traffic: {
      src: "/outcomes/traffic-photo.webp",
      alt: "Marketing professional reviewing organic search traffic data at a desktop computer",
      label: "Qualified traffic",
    },
    leads: {
      src: "/outcomes/leads-photo.webp",
      alt: "Business team reviewing lead and conversion data at a desktop computer",
      label: "Lead quality",
    },
    growth: {
      src: "/outcomes/growth-photo.webp",
      alt: "Business owner reviewing marketing growth data at a desktop computer",
      label: "Measurable growth",
    },
  };
  const photo = photos[type] ?? photos.visibility;

  return (
    <figure className={`outcome-photo outcome-photo-${type}`}>
      <img src={photo.src} alt={photo.alt} />
      <figcaption>
        <span aria-hidden="true" />
        {photo.label}
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>
            Digital marketing that works as hard as <span>you do.</span>
          </h1>
          <p className="hero-intro">
            Strategy, websites, local SEO and paid media for Tampa businesses
            ready to grow.
          </p>
          <div className="hero-actions">
            <a className="button button-purple" href="/contact">
              Start a Project
            </a>
            <a className="button button-outline" href="/work">
              See Our Work
            </a>
          </div>
          <p className="trust-line">
            <span aria-hidden="true">✦</span>
            Tampa Bay · Established 2008
          </p>
        </div>

        <div className="hero-visual" id="services">
          <div className="hero-visual-grid" aria-hidden="true" />
          <div className="hero-photo">
            <img
              src="/velvet-ink-hero-laptop.webp"
              alt="Laptop displaying local SEO rankings, map visibility, and lead performance"
            />
          </div>

          <div className="hero-metric-card hero-visibility-card">
            <div className="metric-card-heading">
              <strong>+42%</strong>
              <span>More local visibility</span>
            </div>
            <div className="metric-card-chart" aria-hidden="true">
              <span className="metric-globe" />
              <div className="metric-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <div className="hero-metric-card hero-leads-card">
            <div className="leads-card-label">
              <span aria-hidden="true">✦</span>
              <strong>Qualified leads</strong>
            </div>
            <div className="leads-card-value">
              <strong>+31%</strong>
              <span>Conversion growth</span>
            </div>
            <div className="leads-trend" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="hero-growth-chip">
            <span aria-hidden="true">✦</span>
            <strong>Built for growth</strong>
          </div>
        </div>
      </section>

      <section className="proof-section" id="proof">
        <div className="proof-heading">
          <p className="eyebrow">SEO, GEO &amp; AEO marketing</p>
          <h2>Get found in search. Become the answer.</h2>
          <p className="proof-summary">
            Velvet Ink Media helps Tampa businesses build stronger websites,
            improve local search visibility, create authoritative content, run
            targeted advertising, and prepare for how customers are discovering
            businesses through AI-generated answers.
          </p>
        </div>
        <div className="discovery-system">
          {discoveryStages.map((stage) => (
            <article
              className={`discovery-stage ${stage.accent}`}
              key={stage.number}
            >
              <div className="discovery-stage-top">
                <span>{stage.number}</span>
                <span className="discovery-node" aria-hidden="true" />
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <ul>
                {stage.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="local-seo-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Local SEO, built for real markets</p>
            <h2>Local SEO &amp; marketing specialists serving Tampa.</h2>
          </div>
          <p>
            Local SEO is rarely just one thing. We connect research, content,
            reputation, and performance data so your business can earn more
            visibility where local customers are actually searching.
          </p>
        </div>
        <div className="capability-grid">
          {localSeoCapabilities.map((capability, index) => (
            <article
              className={`capability-card ${capability.accent}`}
              key={capability.title}
            >
              <div className="capability-visual" aria-hidden="true">
                <span className="project-index">0{index + 1}</span>
                <CapabilityInterface type={capability.visual} />
              </div>
              <div className="capability-copy">
                <p>{capability.category}</p>
                <h3>{capability.title}</h3>
                <span>{capability.description}</span>
                <a
                  className="capability-button"
                  href="/local-seo"
                  aria-label={`Learn more about ${capability.title}`}
                >
                  Learn More <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link" href="/local-seo">
          Talk with a local SEO specialist <ArrowIcon />
        </a>
      </section>

      <section className="services-bento-section" id="services-overview">
        <div className="services-bento-heading">
          <div>
            <p className="eyebrow">One partner, connected services</p>
            <h2>Everything you need to win your market.</h2>
          </div>
          <p>
            Strong marketing is not a collection of disconnected tactics. We
            bring the strategy, creative, and performance work together so each
            service makes the others more effective.
          </p>
        </div>

        <div className="services-bento">
          <article className="bento-feature">
            <div className="bento-card-top">
              <span>01</span>
              <span>Featured service</span>
            </div>
            <div className="bento-browser" aria-hidden="true">
              <div className="bento-browser-chrome">
                <span />
                <span />
                <span />
              </div>
              <div className="search-mockup">
                <div className="search-bar">
                  <span className="search-icon" />
                  <span className="search-query">Tampa web design agency</span>
                  <span className="search-caret" />
                  <span className="search-submit">Search</span>
                </div>
                <p className="search-meta">Top results for your search</p>
                <div className="search-results">
                  <div className="search-result featured-result">
                    <span className="result-number">01</span>
                    <div className="result-content">
                      <span>velvetinkmedia.com</span>
                      <strong>Web design for Tampa businesses</strong>
                      <i />
                      <i className="short-line" />
                    </div>
                    <span className="result-badge">Best match</span>
                  </div>
                  <div className="search-result">
                    <span className="result-number">02</span>
                    <div className="result-content">
                      <span>Local design partner</span>
                      <strong>Strategy, design &amp; development</strong>
                      <i />
                    </div>
                  </div>
                  <div className="search-result">
                    <span className="result-number">03</span>
                    <div className="result-content">
                      <span>Built to convert</span>
                      <strong>Websites that make the next step clear</strong>
                      <i />
                    </div>
                  </div>
                </div>
                <span className="search-pointer" />
              </div>
              <i className="search-orbit" />
            </div>
            <div className="bento-feature-copy">
              <div>
                <p>Strategy · UX · Development</p>
                <h3>Web Design</h3>
              </div>
              <div>
                <p>
                  Conversion-minded WordPress websites that look polished,
                  communicate clearly, and make the next step easy.
                </p>
                <a href="/web-design">
                  Build a better website <ArrowIcon />
                </a>
              </div>
            </div>
          </article>

          <div className="bento-support-grid">
            {fullServiceLineup.map((service) => (
              <article
                className={`bento-service-card ${service.accent}`}
                key={service.title}
              >
                <div className="bento-card-top">
                  <span>{service.number}</span>
                  <span>{service.label}</span>
                </div>
                <ServiceMiniGraphic type={service.visual} />
                <div className="bento-service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a
                  className="capability-button"
                  href={
                    service.title === "Pay-Per-Click"
                      ? "/paid-media"
                      : service.title === "SEO Services"
                        ? "/local-seo"
                        : service.title === "Social Media"
                          ? "/social-media"
                        : service.title === "Content Creation"
                          ? "/content-marketing"
                          : "#contact"
                  }
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Marketing with a business purpose</p>
            <h2>What marketing can do for your business.</h2>
          </div>
          <p>
            The channel is only part of the decision. Start with the outcome
            your business needs, then build the right marketing system around it.
          </p>
        </div>

        <div className="outcomes-switcher">
          {businessOutcomes.map((outcome, index) => (
            <input
              className="outcome-choice"
              defaultChecked={index === 0}
              id={`outcome-${outcome.id}`}
              key={outcome.id}
              name="business-outcome"
              type="radio"
            />
          ))}

          <div className="outcome-tabs" aria-label="Business outcomes" role="group">
            {businessOutcomes.map((outcome) => (
              <label htmlFor={`outcome-${outcome.id}`} key={outcome.id}>
                <span>{outcome.number}</span>
                <strong>{outcome.label}</strong>
                <i aria-hidden="true">+</i>
              </label>
            ))}
          </div>

          <div className="outcome-panels">
            {businessOutcomes.map((outcome) => (
              <article
                className={`outcome-panel panel-${outcome.id}`}
                key={outcome.id}
              >
                <div className="outcome-panel-copy">
                  <p>{outcome.eyebrow}</p>
                  <h3>{outcome.title}</h3>
                  <span>{outcome.description}</span>
                  <ul>
                    {outcome.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <a className="button button-purple" href="/contact">
                    Talk About Your Goals
                  </a>
                </div>
                <OutcomeGraphic type={outcome.visual} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-visual">
          <div className="about-photo-frame">
            <img
              src="/about-working-photo.webp"
              alt="Marketing professionals collaborating in a bright office"
              loading="lazy"
            />
          </div>
          <div className="about-location-card">
            <span aria-hidden="true">✦</span>
            <div>
              <strong>Tampa Bay</strong>
              <small>Serving businesses since 2008</small>
            </div>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">Your local marketing partner</p>
          <h2>Helping Tampa businesses get more from local SEO and marketing.</h2>
          <p>
            Velvet Ink Media is a Tampa-based digital marketing agency built
            for businesses that want practical strategy and dependable
            execution. We connect local SEO, web design, paid media, content,
            and brand support so every channel works toward the same goal.
          </p>
          <p>
            You get honest priorities, clear communication, and work shaped
            around what your business actually needs, without the layers and
            handoffs of a large agency.
          </p>

          <div className="about-details">
            <div>
              <span>01</span>
              <strong>18+ years of experience</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Tampa-based perspective</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Strategy and execution together</strong>
            </div>
          </div>

          <a className="button button-purple" href="/contact">
            Work With Velvet Ink Media
          </a>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-card">
          <p className="quote-mark" aria-hidden="true">“</p>
          <blockquote>
            Their work is always timely and professional, and we are never
            disappointed with the end product.
          </blockquote>
          <p className="quote-source">
            Client feedback · VIP Eye Care &amp; Optical Boutique
          </p>
        </div>
      </section>

      <section className="insights-section" id="insights">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tampa SEO tips &amp; insights</p>
            <h2>Practical marketing ideas you can actually use.</h2>
          </div>
          <p>
            Straightforward guidance for Tampa businesses making better
            decisions about search, websites, advertising, and growth.
          </p>
        </div>
        <div className="insight-grid">
          {insights.map((insight, index) => (
            <article className={`insight-card ${insight.accent}`} key={insight.title}>
              <div className="insight-meta">
                <span className="insight-tag">{insight.tag}</span>
                <span className="insight-date">{insight.date}</span>
              </div>
              <figure className="insight-image">
                <img
                  src={insight.image}
                  alt={insight.imageAlt}
                  loading="lazy"
                />
              </figure>
              <span className="insight-number">0{index + 1}</span>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
              <a
                className="capability-button"
                href="/blog"
                aria-label={`Read ${insight.title}`}
              >
                Read the Article <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-cta">
          <div className="footer-cta-copy">
            <p className="footer-eyebrow">Let&apos;s talk</p>
            <h2>Let&apos;s start something great together.</h2>
            <p>
              Not sure if you need a marketing company? Get us on the phone and
              we&apos;ll tell you exactly how local SEO and marketing can move
              the needle for your Tampa Bay business.
            </p>
            <div className="footer-actions">
              <a className="footer-button footer-button-light" href="tel:+18137975515">
                Call 813-797-5515
              </a>
              <a
                className="footer-button footer-button-outline"
                href="mailto:hello@velvetinkmedia.com"
              >
                Send a message
              </a>
            </div>
          </div>

          <aside className="footer-contact-card" aria-label="Velvet Ink Media contact details">
            <a className="footer-contact-logo" href="#top" aria-label="Back to top">
              <img src="/velvet-ink-logo.png" alt="Velvet Ink Media" />
            </a>
            <dl>
              <div>
                <dt>Studio</dt>
                <dd>
                  <address>
                    1101 E Cumberland Ave #201H
                    <br />
                    Tampa, FL 33602
                  </address>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+18137975515">813-797-5515</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hello@velvetinkmedia.com">
                    hello@velvetinkmedia.com
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="footer-brand" href="#top" aria-label="Back to top">
              <img src="/velvet-ink-logo.png" alt="Velvet Ink Media" />
            </a>
            <p>
              A full-service Tampa marketing and web design agency creating
              structured, beautiful work that helps businesses grow.
            </p>
          </div>

          <nav className="footer-column" aria-label="Footer services">
            <h3>Services</h3>
            <a href="/services">All Services</a>
            <a href="/web-design">Web Design</a>
            <a href="/local-seo">Local SEO</a>
            <a href="/geo-aeo">GEO + AEO</a>
            <a href="/content-marketing">Content Marketing</a>
            <a href="/social-media">Social Media</a>
            <a href="/paid-media">Paid Media</a>
            <a href="#services-overview">Reputation</a>
          </nav>

          <nav className="footer-column" aria-label="Footer company links">
            <h3>Company</h3>
            <a href="/about-us">About Us</a>
            <a href="/blog">Insights</a>
            <a href="#proof">Our Approach</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="footer-column footer-contact-column">
            <h3>Contact</h3>
            <a href="tel:+18137975515">813-797-5515</a>
            <a href="mailto:hello@velvetinkmedia.com">
              hello@velvetinkmedia.com
            </a>
            <address>Tampa, FL 33602</address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Velvet Ink Media. All rights reserved.</p>
          <div>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
