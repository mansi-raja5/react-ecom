import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "./../../assets/logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <nav className="mainMenu">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/women"
              >
                WOMEN
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/men"
              >
                MEN
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/kids"
              >
                KIDS
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="LOGO" />
          </NavLink>
        </div>
        <div className="actions">
          <ul>
            <li>
              <NavLink to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;