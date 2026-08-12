export function SectionHeader({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-lg leading-8 text-muted">{description}</p>}
    </div>
  );
}
