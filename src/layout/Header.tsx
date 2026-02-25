import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../data/siteContent';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="text-xl font-bold text-primary">
          Sovana
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-primary' : 'text-ink/70 hover:text-primary'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Être rappelé
        </Link>
      </div>
    </header>
  );
}
