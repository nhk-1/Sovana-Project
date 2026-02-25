type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-primary/10 bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
      <p className="text-sm leading-6 text-ink/80">{description}</p>
    </article>
  );
}
