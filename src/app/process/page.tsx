import { Container } from "@/components/Container";

export const metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Process Stewardship</h1>
        <p className="mt-3 max-w-3xl text-black/70">
          This page is specifically to match the job description: ownership, attention to
          detail, and constructive input to improve agency processes.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-6">
            <h2 className="font-semibold">Quality Checklist (per page)</h2>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>• Mobile layout verified (375px / 768px / 1024px)</li>
              <li>• H1/H2 structure correct + no broken links</li>
              <li>• Forms validated + clear CTA</li>
              <li>• Basic accessibility: focus states, labels, contrast</li>
              <li>• SEO metadata present + OG preview looks good</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 p-6">
            <h2 className="font-semibold">Process Improvement Ideas</h2>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>• Standard “page sections” library for faster builds</li>
              <li>• Reusable QA checklist in Jira/Notion</li>
              <li>• Naming conventions for assets + consistent file structure</li>
              <li>• Monthly mini-audit: broken links, speed, indexing checks</li>
              <li>• Post-launch checklist: analytics + goals verified</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
