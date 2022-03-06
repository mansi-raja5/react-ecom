import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "./../../assets/logo.png";
import Button from "../Button";

import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [showMiniCart, setShowMiniCart] = useState(0);

  useEffect(() => {
    let count = 0;
    for (var i = 0; i < cart.length; i++) {
      count += cart[i].qty;
    }

    setCartCount(count);
  }, [cart, cartCount]);

  const showMiniCartHandler = () => {
    console.log("showMiniCartHandler");
    setShowMiniCart(showMiniCart == 0 ? 1 : 0);
  };
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
              <Button
                className="cart"
                aria-label="View your shopping cart"
                onClick={showMiniCartHandler}
              >
                <i className="fas fa fa-shopping-cart fa-lg"></i>
                <span className="badge"> {cartCount} </span>
              </Button>
              <div
                className="overlay"
                style={{ display: showMiniCart ? "block" : "none" }}
              >
                <div className="container">
                  <div className="mini-cart">
                    <ul className="mini-cart-items">
                      <li className="clearfix">
                        <img
                          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                          alt="item1"
                        />
                        <span className="item-name">Sony DSC-RX100M III</span>
                        <span className="item-price">$849.99</span>
                        <span className="item-quantity">Quantity: 01</span>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <NavLink
                          to="/cart"
                          className="cart"
                          aria-label="View your shopping cart"
                          onSelect={showMiniCartHandler}
                        >
                          <Button>View Bag</Button>
                        </NavLink>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <NavLink
                          to="/cart"
                          className="cart"
                          aria-label="View your shopping cart"
                        >
                          <Button>Checkout</Button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
