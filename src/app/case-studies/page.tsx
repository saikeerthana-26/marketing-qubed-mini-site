import Link from "next/link";
import { Container } from "@/components/Container";
import { Card, CardBody } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { Badge } from "@/components/Badge";
import { site } from "@/content/site";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Case studies"
          title="Short, metric-driven delivery"
          desc="Clear outcomes, clean structure, and a process you can repeat for every client build."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.caseStudies.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`}>
              <Card>
                <CardBody>
                  <div className="text-xs font-semibold text-black/50">{c.client}</div>
                  <h2 className="mt-2 text-lg font-semibold">{c.headline}</h2>
                  <p className="mt-2 text-sm text-black/70">{c.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.metrics.map((m) => (
                      <Badge key={m}>{m}</Badge>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
