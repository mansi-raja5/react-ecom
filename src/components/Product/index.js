import React, { useState } from "react";
import Button from "../Button";
import ProductGallary from "./ProductGallary";
import "./style.scss";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart }) => {
  const renderHTML = (rawHTML) =>
    React.createElement("p", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  const { id, gallery, name, prices, description, brand, attributes } = product;
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const onRadioChangeHandler = (e) => {
    setSelectedAttributes((prevSelectedAttributes) => {
      return [
        ...prevSelectedAttributes,
        {
          key: e.target.name,
          name: e.target.name,
          type: e.target.dataset.attributetype,
          value: e.target.value,
        },
      ];
    });
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <ProductGallary gallery={gallery} productName={name} />
            </div>
            <div className="col-md-4">
              <div className="product p-4">
                <div className="mt-4 mb-3">
                  <span className="text-uppercase mt-5 d-block">
                    <h2>{name}</h2>
                  </span>
                  <span className="text-uppercase text-muted mt-5 d-block">
                    <h3>{brand}</h3>
                  </span>
                  {attributes.map((attribute) => (
                    <div className="mt-5 d-block" key={attribute.id}>
                      <h3 className="text-uppercase">{attribute.name}</h3>
                      {attribute.items.map((item) => (
                        <label className="radio" key={item.id}>
                          <input
                            type="radio"
                            name={attribute.name}
                            value={item.value}
                            data-attributetype={attribute.type}
                            onChange={onRadioChangeHandler}
                          />
                          {attribute.type == "swatch" ? (
                            <span
                              style={{ backgroundColor: item.value }}
                            ></span>
                          ) : (
                            <span>{item.value}</span>
                          )}
                        </label>
                      ))}
                    </div>
                  ))}
                  <div className="price mt-5 d-block">
                    <h3 className="text-uppercase">Prize:</h3>
                    <span className="">
                      {prices[0].currency.symbol}
                      {prices[0].amount}
                    </span>
                  </div>
                </div>

                <div className="cart mt-5 align-items-center">
                  <Button onClick={() => addToCart(id, selectedAttributes)}>
                    Add to cart
                  </Button>
                </div>
                <div className="about mt-5">{renderHTML(description)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, selectedAttributes) =>
      dispatch(addToCart(id, selectedAttributes)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
