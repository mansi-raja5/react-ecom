import React, { useState } from "react";
import Button from "../../components/Button";
import "./style.scss";

function CartItem(props) {
  const [qty, setQty] = useState(props.cartItem.qty);
  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrementQty = () => {
    setQty(qty - 1);
  };
  return (
    <div className="row d-flex justify-content-between align-items-center cart-item pt-5 pb-5">
      <div className="col-lg-9">
        <span className="text-uppercase mt-5 d-block">
          <h2>{props.cartItem.name}</h2>
        </span>
        <span className="text-uppercase text-muted mt-2 d-block">
          <h3>{props.cartItem.name}</h3>
        </span>
        <span className="text-uppercase mt-2 d-block">
          <h3>
            {props.cartItem.prices[0].currency.symbol}
            {props.cartItem.prices[0].amount}
          </h3>
        </span>
      </div>
      <div className="col-lg-1">
        <Button onClick={incrementQty}>
          <i className="fas fa-plus"></i>
        </Button>
        <div className="qty-input d-block">{qty}</div>
        <Button className="btn" onClick={decrementQty}>
          <i className="fas fa-minus"></i>
        </Button>
      </div>
      <div className="col-lg-2">
        <img
          src={props.cartItem.gallery[0]}
          className="img-fluid rounded-3"
          alt={props.cartItem.name}
        />
      </div>
    </div>
  );
}

export default CartItem;
