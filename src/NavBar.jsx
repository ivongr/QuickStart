import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/List">List</NavLink>
        </li>
        <li>
          <NavLink to="/CounterS">Contador</NavLink>
        </li>
        <li>
          <NavLink to="/CounterTg">Contador Simultaneo</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
