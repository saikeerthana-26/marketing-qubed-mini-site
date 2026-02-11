import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;

  const cs = site.caseStudies.find((c) => c.slug === slug);
  if (!cs) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: cs.headline,
    description: cs.summary,
    about: cs.client,
  };

  return (
    <section className="py-14">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="text-sm font-semibold text-black/60">{cs.client}</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{cs.headline}</h1>
        <p className="mt-4 max-w-2xl text-black/70">{cs.summary}</p>

        <h2 className="mt-10 text-lg font-semibold">Results</h2>
        <ul className="mt-3 list-inside list-disc text-black/70">
          {cs.metrics.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
