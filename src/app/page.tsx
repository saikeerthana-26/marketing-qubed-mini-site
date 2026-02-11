import Link from "next/link";
import { Container } from "@/components/Container";
import { Card, CardBody } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div>
      

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Websites that convert, perform, and scale.
              </h1>

              <p className="mt-6 max-w-xl text-neutral-600 leading-relaxed">
                I build responsive marketing websites with strong UX and solid SEO foundations —
                the kind agencies can confidently ship to clients.
              </p>

              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/case-studies"
                  className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
                >
                  View Work
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold hover:bg-black/5"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl bg-black/5 px-6 py-3 text-sm font-semibold hover:bg-black/10"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-8">
              <p className="text-sm text-neutral-500">Recent Work Snapshot</p>

              <ul className="mt-6 space-y-4 text-neutral-700">
                <li className="flex justify-between">
                  <span>Mobile-first optimization</span>
                  <span>✔</span>
                </li>
                <li className="flex justify-between">
                  <span>SEO structure</span>
                  <span>✔</span>
                </li>
                <li className="flex justify-between">
                  <span>Clean page architecture</span>
                  <span>✔</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="border-t border-black/10 py-14">
        <Container>
          <SectionTitle
            eyebrow="What I do"
            title="CMS builds, responsive UI, and fast iteration"
            desc="A clean approach that matches agency workflows: build sections, validate on mobile, optimize, and ship."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.services.map((s) => (
              <Card key={s.title}>
                <CardBody>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{s.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="border-t border-black/10 py-14">
        <Container>
          <SectionTitle
            eyebrow="Work"
            title="Outcome-focused case studies"
            desc="Short, metric-first writeups that show how you think about results."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {site.caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:bg-black/5"
              >
                <div className="text-xs font-semibold text-black/50">{c.client}</div>
                <div className="mt-2 text-lg font-semibold group-hover:underline">
                  {c.headline}
                </div>
                <p className="mt-2 text-sm text-black/70">{c.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.metrics.map((m) => (
                    <Badge key={m}>{m}</Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
