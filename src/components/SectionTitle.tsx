type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8 space-y-3 animate-fade-up">
      <h2 className="text-3xl font-semibold text-blue-950 md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-3xl text-base text-slate-700 md:text-lg">{subtitle}</p>}
    </div>
  );
}
