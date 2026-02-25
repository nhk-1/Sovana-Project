type PricingBoxProps = {
  title: string;
  items: string[];
};

export function PricingBox({ title, items }: PricingBoxProps) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
      <h3 className="mb-4 text-xl font-semibold text-blue-950">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
