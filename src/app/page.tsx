import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="text-sm font-semibold text-black/60">
                Fast • Responsive • SEO-ready
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                A clean agency website demo built to showcase CMS + web skills
              </h1>
              <p className="mt-4 text-lg text-black/70">
                Built in Next.js with a CMS-like content structure, case studies, and a
                contact flow. Easy to translate to WordPress/Wix/Shopify section builds.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/case-studies">View Case Studies</Button>
                <Button href="/services" variant="ghost">
                  Services
                </Button>
              </div>
              <div className="mt-6 text-sm text-black/60">
                Location-ready: {site.location} • Hybrid-friendly • Detail-oriented
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">What this demonstrates</h2>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li>• Responsive layout + clean components</li>
                <li>• SEO basics: metadata + structured data</li>
                <li>• CMS-like content file (easy editing)</li>
                <li>• Process mindset (quality + iteration)</li>
              </ul>
              <div className="mt-6 rounded-xl bg-black/5 p-4">
                <p className="text-sm font-semibold">Quick pitch for interview:</p>
                <p className="mt-1 text-sm text-black/70">
                  “I build fast, responsive sites with strong SEO foundations, and I’m
                  comfortable shipping in CMS environments while keeping quality high.”
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 py-14">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {site.services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-black/10 p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-black/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
