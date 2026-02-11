import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
        <p className="mt-3 max-w-2xl text-black/70">
          Short, metric-driven writeups (even as demos) show you understand outcomes
          and client value.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="rounded-2xl border border-black/10 p-6 hover:bg-black/5"
            >
              <div className="text-sm font-semibold text-black/60">{c.client}</div>
              <h2 className="mt-2 text-lg font-semibold">{c.headline}</h2>
              <p className="mt-2 text-sm text-black/70">{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
