export const site = {
  name: "Marketing Qubed (Demo)",
  url: "https://example.com", // replace later with Vercel URL if you deploy
  description:
    "A fast, responsive agency mini-site with SEO, case studies, and a contact flow.",
  location: "Royal Oak, MI",
  email: "hello@example.com", // replace with your email
  social: {
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN/",
  },
  services: [
    {
      title: "WordPress / Shopify / Wix Builds",
      desc: "Clean, conversion-focused pages with reusable sections and content you can update quickly.",
    },
    {
      title: "Responsive UI + Performance",
      desc: "Mobile-first layouts, accessible components, and Lighthouse-friendly structure.",
    },
    {
      title: "SEO Foundations",
      desc: "Metadata, Open Graph, structured data, and indexable site structure.",
    },
    {
      title: "Fixes, Debugging, Iteration",
      desc: "Troubleshoot layout issues, plugin/theme conflicts, and UX polish.",
    },
  ],
  caseStudies: [
    {
      slug: "local-gym-leads",
      client: "Local Gym",
      headline: "Improved lead conversion with a focused landing page",
      metrics: ["+22% form submissions", "-35% bounce rate", "Mobile CLS improved"],
      summary:
        "Rebuilt hero + CTA flow, simplified navigation, and improved mobile spacing and performance.",
    },
    {
      slug: "dentist-seo-refresh",
      client: "Dental Clinic",
      headline: "SEO refresh + speed pass on a service site",
      metrics: ["LCP improved", "Indexable pages cleaned", "Better structured headings"],
      summary:
        "Standardized headings, improved metadata, and tightened layout for faster loading.",
    },
  ],
};
