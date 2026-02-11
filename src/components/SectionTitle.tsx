export function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-wide text-black/50">
          {eyebrow.toUpperCase()}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-base text-black/70">{desc}</p> : null}
    </div>
  );
}
