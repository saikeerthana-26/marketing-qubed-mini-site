import { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPages = ["", "/services", "/case-studies", "/process", "/contact"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
    })
  );

  const caseStudies = site.caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...caseStudies];
}
