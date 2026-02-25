import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../data/siteContent';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="text-xl font-bold text-blue-950">
          Sovana
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-blue-900' : 'text-slate-600 hover:text-blue-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Être rappelé
        </Link>
      </div>
    </header>
  );
}
