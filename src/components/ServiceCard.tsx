import type { ServiceItem } from '../data/siteContent';

type ServiceCardProps = {
  service: ServiceItem;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <article
      className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-xl animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl shadow-md transition group-hover:scale-105">
        <span role="img" aria-label={`Illustration ${service.title}`}>
          {service.illustration}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-blue-950">{service.title}</h3>
      <p className="mb-4 text-sm leading-6 text-slate-700">{service.description}</p>
      <p className="mb-3 text-sm font-semibold text-blue-800">Services inclus :</p>
      <ul className="mb-4 space-y-2 text-sm text-slate-700">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 text-blue-700">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="rounded-xl bg-blue-950 px-3 py-2 text-sm font-medium text-blue-50">Objectif : {service.objective}</p>
    </article>
  );
}
