import { Container } from "@/components/Container";
import { site } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-black/70">
          Simple contact UI (like you’d build in a CMS). For a real site, you’d wire this
          to Formspree, HubSpot, or a server action.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <form
            className="rounded-2xl border border-black/10 p-6"
           
          >
            <label className="block text-sm font-semibold">Name</label>
            <input
              className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2"
              placeholder="Your name"
            />

            <label className="mt-4 block text-sm font-semibold">Email</label>
            <input
              className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2"
              placeholder="you@email.com"
            />

            <label className="mt-4 block text-sm font-semibold">Message</label>
            <textarea
              className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2"
              placeholder="What would you like to build?"
              rows={5}
            />

            <a
              className="mt-4 inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
              href={`mailto:${site.email}?subject=Project%20Inquiry&body=Hi%20Sai,%0A%0AI'd%20like%20to%20discuss...`}
            >
              Send via Email
            </a>
            <p className="mt-3 text-xs text-black/60">
              Demo behavior: opens your email client. In production, wire to a form service.
            </p>
          </form>

          <div className="rounded-2xl border border-black/10 p-6">
            <h2 className="font-semibold">Details</h2>
            <p className="mt-2 text-sm text-black/70">
              Royal Oak, MI • Hybrid-ready
            </p>
            <div className="mt-6 rounded-xl bg-black/5 p-4">
              <p className="text-sm font-semibold">What you can say tomorrow</p>
              <p className="mt-1 text-sm text-black/70">
                “I shipped a responsive agency mini-site with SEO foundations and a clean
                content structure. I can translate the same thinking into WordPress/Wix/Shopify
                builds and iterate quickly.”
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
