type PricingBoxProps = {
  title: string;
  items: string[];
};

export function PricingBox({ title, items }: PricingBoxProps) {
  return (
    <section className="rounded-2xl border border-primary/10 bg-sand/30 p-6">
      <h3 className="mb-4 text-xl font-semibold text-primary">{title}</h3>
      <ul className="space-y-2 text-sm text-ink/90">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
