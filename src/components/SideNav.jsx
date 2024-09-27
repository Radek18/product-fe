import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <nav className="w-52 border-r-2 p-5">
      <ul className="flex flex-col gap-2">
        <NavLink to="/">
          <li className="cursor-pointer px-2 py-3 transition-all duration-300 hover:bg-slate-100">
            <p>Domů</p>
          </li>
        </NavLink>

        <NavLink to="/products">
          <li className="cursor-pointer px-2 py-3 transition-all duration-300 hover:bg-slate-100">
            <p>Produkty</p>
          </li>
        </NavLink>

        <NavLink to="/form">
          <li className="cursor-pointer px-2 py-3 transition-all duration-300 hover:bg-slate-100">
            <p>Přidat produkt</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default SideNav;
