import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "./../../assets/logo.png";

import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    for (var i = 0; i < cart.length; i++) {
      count += cart[i].qty;
    }

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <header className="header">
      <div className="container">
        <nav className="mainMenu">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/all"
              >
                ALL
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/clothes"
              >
                CLOTHES
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/tech"
              >
                TECH
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
              <NavLink
                to="/cart"
                className="cart"
                aria-label="View your shopping cart"
              >
                <i className="fas fa fa-shopping-cart fa-lg"></i>
                <span className="badge"> {cartCount} </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
