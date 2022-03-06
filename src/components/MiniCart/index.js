import React, { useState } from "react";
import Button from "../Button";
import "./style.scss";
import { NavLink } from "react-router-dom";
import CartItem from "../../components/CartItem";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const MiniCart = ({ showMiniCart, cart, onVeiwBagData }) => {
  return (
    <div>
      <div
        className="overlay"
        style={{ display: showMiniCart ? "block" : "none" }}
      >
        <div className="container">
          <div className="mini-cart">
            <div className="row mt-5">
              <div className="col-lg-12">
                <span>My Bag:</span>
                <span>2 Items</span>
              </div>
            </div>
            <ul className="mini-cart-items">
              {cart.length ? (
                cart.map((cartItem) => {
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
            <div className="row mt-5">
              <div className="col-lg-12">
                <span>Total:</span>
                <span>Total:</span>
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
  };
};

export default connect(mapStateToProps)(MiniCart);
