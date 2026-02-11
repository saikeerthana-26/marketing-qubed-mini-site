import { Container } from "@/components/Container";
import { Card, CardBody } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/content/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Clean builds that ship fast"
          desc="CMS-ready sections + responsive UI + practical SEO. Built with attention to detail and a QA-first workflow."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.services.map((s) => (
            <Card key={s.title}>
              <CardBody>
                <h2 className="text-base font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm text-black/70">{s.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-black/60">
                  <li>• Mobile-first layout checks</li>
                  <li>• Reusable sections + consistent spacing</li>
                  <li>• Fast debugging + iteration</li>
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
