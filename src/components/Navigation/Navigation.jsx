import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

// Aktif navın rengini değiştirmek için fonksiyon
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Ana Sayfa
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          {" "}
          Filmler
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
