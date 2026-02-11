import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <p className="mt-3 max-w-2xl text-black/70">
          This page is written like a CMS “Services” section: clear, scannable, and
          easy to maintain. Great for WordPress/Wix/Shopify page builds.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {site.services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6">
              <h2 className="font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-black/70">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-black/60">
                <li>• Mobile-first layout</li>
                <li>• Consistent spacing + typography</li>
                <li>• Debug + iterate quickly</li>
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
