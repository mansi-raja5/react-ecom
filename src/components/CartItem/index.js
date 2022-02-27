import React, { useState } from "react";
import Button from "../../components/Button";
import "./style.scss";

import { connect } from "react-redux";
import { adjustItemQty } from "../../redux/Shopping/shopping-actions";

function CartItem({ cartItem, adjustQty }) {
  const [qty, setQty] = useState(cartItem.qty);
  const incrementQty = () => {
    const updatedQty = qty + 1;
    setQty(updatedQty);
    adjustQty(cartItem.id, updatedQty);
  };
  const decrementQty = () => {
    const updatedQty = qty - 1;
    setQty(updatedQty);
    adjustQty(cartItem.id, updatedQty);
  };
  return (
    <div className="row d-flex justify-content-between align-items-center cart-item pt-5 pb-5">
      <div className="col-lg-9">
        <span className="text-uppercase mt-5 d-block">
          <h2>{cartItem.name}</h2>
        </span>
        <span className="text-uppercase text-muted mt-2 d-block">
          <h3>{cartItem.brand}</h3>
        </span>
        <span className="text-uppercase mt-2 d-block">
          <h3>
            {cartItem.prices[0].currency.symbol}
            {cartItem.prices[0].amount}
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
          src={cartItem.gallery[0]}
          className="img-fluid rounded-3"
          alt={cartItem.name}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
