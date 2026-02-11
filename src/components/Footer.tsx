import { Container } from "./Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-black/60">
            © {new Date().getFullYear()} {site.name} • {site.location}
          </p>
          <div className="flex gap-4 text-sm">
            <a className="text-black/70 hover:text-black" href={site.social.github}>
              GitHub
            </a>
            <a className="text-black/70 hover:text-black" href={site.social.linkedin}>
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
