import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "./../../assets/logo.png";
import MiniCart from "../MiniCart";
import CurrencyList from "../CurrencyList";

import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [showMiniCart, setShowMiniCart] = useState(0);
  const [showCurrencyList, setShowCurrencyList] = useState(0);

  useEffect(() => {
    let count = 0;
    for (var i = 0; i < cart.length; i++) {
      count += cart[i].qty;
    }

    setCartCount(count);
  }, [cart, cartCount]);

  const showMiniCartHandler = () => {
    setShowMiniCart(showMiniCart == 0 ? 1 : 0);
  };

  const showCurrencyListHandler = () => {
    console.log(showCurrencyList);
    setShowCurrencyList(showCurrencyList == 0 ? 1 : 0);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <nav className="col-md-5">
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
          <div className="col-md-2">
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="LOGO" />
              </NavLink>
            </div>
          </div>
          <div className="col-md-5">
            <div className="actions">
              <ul>
                <li>
                  <a
                    className="dropdown-toggle"
                    onClick={showCurrencyListHandler}
                  >
                    $
                  </a>
                  <CurrencyList showCurrencyList={showCurrencyList} />
                </li>
                <li>
                  <a
                    className="cart"
                    aria-label="View your shopping cart"
                    onClick={showMiniCartHandler}
                  >
                    <i className="fas fa fa-shopping-cart fa-lg"></i>
                    <span className="badge"> {cartCount} </span>
                  </a>
                  <MiniCart
                    onVeiwBagData={showMiniCartHandler}
                    showMiniCart={showMiniCart}
                  />
                </li>
              </ul>
            </div>
          </div>
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
