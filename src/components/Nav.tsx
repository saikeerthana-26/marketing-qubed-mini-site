import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/content/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/process", label: "Process" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white">
              MQ
            </span>
            <span className="hidden sm:block">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-black/70 hover:text-black">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 shadow-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
