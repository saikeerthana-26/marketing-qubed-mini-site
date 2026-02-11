import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-bold tracking-tight">
            {site.name}
          </Link>
          <nav className="hidden gap-5 sm:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-black/70 hover:text-black"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-xl bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Let’s Talk
          </Link>
        </div>
      </Container>
    </header>
  );
}
