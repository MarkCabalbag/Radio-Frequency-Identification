import { NavLink } from "react-router-dom";

const TABS = [
  { to: "/dashboard/home", label: "Home" },
  { to: "/dashboard/registered-card", label: "Registered Cards" },
];

// NavLink adds the `active` class automatically; styling lives in custom.scss (.app-tabs).
function Tab() {
  return (
    <ul className="nav nav-tabs app-tabs">
      {TABS.map(({ to, label }) => (
        <li className="nav-item" key={to}>
          <NavLink to={to} className="nav-link">
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Tab;