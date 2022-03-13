import React, { useState } from "react";
import Button from "../Button";
import "./style.scss";
import { NavLink } from "react-router-dom";
import CartItem from "../../components/CartItem";

import { connect } from "react-redux";

const MiniCart = ({ showMiniCart, cart, onVeiwBagData, currency }) => {
  let bagSum = 0;
  const sym = cart.length
    ? cart[0].prices.find((price) => price.currency.symbol === currency.symbol)
    : false;
  return (
    <div>
      <div
        className="overlay"
        style={{ display: showMiniCart ? "block" : "none" }}
      >
        <div className="container">
          <div className="mini-cart">
            <div className="row mt-1 mb-1">
              <div className="col-lg-12">
                <span>
                  <b>My Bag: </b>
                </span>
                <span>{cart.length} Items</span>
              </div>
            </div>
            <ul className="mini-cart-items">
              {cart.length ? (
                cart.map((cartItem) => {
                  bagSum += sym.amount * cartItem.qty;
                  return (
                    <CartItem
                      key={cartItem.id}
                      cartItem={cartItem}
                      isMiniCart={true}
                    />
                  );
                })
              ) : (
                <div>NO ITEMS IN THE CART</div>
              )}
            </ul>
            <div className="row pt-5">
              <div className="col-lg-6">
                <span>
                  <b>Total:</b>
                </span>
              </div>
              <div className="col-lg-6">
                <span className="float-end">
                  <b>
                    {sym ? sym.currency.symbol : ""}
                    {bagSum ? parseFloat(bagSum).toFixed(2) : ""}
                  </b>
                </span>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <NavLink
                  to="/cart"
                  className="cart"
                  aria-label="View your shopping cart"
                  onSelect={onVeiwBagData}
                >
                  <Button onClick={onVeiwBagData}>View Bag</Button>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    currency: state.shop.currency,
  };
};

export default connect(mapStateToProps)(MiniCart);
