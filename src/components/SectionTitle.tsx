type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8 space-y-3">
      <h2 className="text-3xl font-semibold text-primary md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-3xl text-base text-ink/80 md:text-lg">{subtitle}</p>}
    </div>
  );
}
