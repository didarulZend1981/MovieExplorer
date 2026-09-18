

import { NavLink } from "react-router-dom";

function Navbar() {
  const navigationClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-white"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          <span className="text-red-500">
            Movie
          </span>
          <span className="text-white">
            Explorer
          </span>
        </NavLink>

        <nav className="flex items-center gap-5 text-sm sm:gap-7 sm:text-base">

          <NavLink
            to="/"
            className={navigationClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 font-medium transition ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`
            }
          >
            Movies
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;

