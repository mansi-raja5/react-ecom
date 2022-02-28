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
  const onRadioChangeHandler = () => {};
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
          <h3 className="pb-2">
            {cartItem.prices[0].currency.symbol}
            {cartItem.prices[0].amount}
          </h3>
        </span>
        {
          //change this to selected radio later on
        }
        {cartItem.attributes.map((attribute) => (
          <div className="mt-1 d-block" key={attribute.key}>
            <h3>{attribute.name}</h3>
            <label className="radio">
              <input
                type="radio"
                name={attribute.key}
                value={attribute.value}
                onChange={onRadioChangeHandler}
                checked
              />
              {attribute.type == "swatch" ? (
                <span style={{ backgroundColor: attribute.value }}></span>
              ) : (
                <span>{attribute.value}</span>
              )}
            </label>
          </div>
        ))}
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
