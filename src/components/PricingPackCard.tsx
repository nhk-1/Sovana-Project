type PricingPackCardProps = {
  name: string;
  price: string;
  summary: string;
  idealIf: string[];
  includes: string[];
  objective: string;
  highlight?: boolean;
  index?: number;
};

export function PricingPackCard({ name, price, summary, idealIf, includes, objective, highlight = false, index = 0 }: PricingPackCardProps) {
  return (
    <article
      className={`animate-fade-up rounded-3xl border p-6 shadow-soft transition duration-500 hover:-translate-y-1 ${
        highlight ? 'border-blue-800 bg-blue-900 text-blue-50' : 'border-blue-100 bg-white text-slate-800'
      }`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="mb-4 flex items-end justify-between">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className={`text-3xl font-bold ${highlight ? 'text-white' : 'text-blue-900'}`}>{price}</p>
      </div>
      <p className={`mb-4 text-sm ${highlight ? 'text-blue-100' : 'text-slate-700'}`}>{summary}</p>

      {idealIf.length > 0 && (
        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold">Idéal si :</p>
          <ul className="space-y-1 text-sm">
            {idealIf.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-4">
        <p className="mb-2 text-sm font-semibold">Ce pack comprend :</p>
        <ul className="space-y-1 text-sm">
          {includes.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <p className={`rounded-xl px-3 py-2 text-sm ${highlight ? 'bg-blue-800 text-blue-50' : 'bg-blue-50 text-blue-900'}`}>
        Objectif : {objective}
      </p>
    </article>
  );
}
