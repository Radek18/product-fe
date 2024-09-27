import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <p>Domů</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/products">
            <p>Produkty</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/form">
            <p>Přidat produkt</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
