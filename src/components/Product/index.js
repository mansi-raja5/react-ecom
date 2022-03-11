import React from "react";
import Button from "../Button";
import ProductGallary from "./ProductGallary";
import Attributes from "./Attributes";
import "./style.scss";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, currency }) => {
  const renderHTML = (rawHTML) =>
    React.createElement("p", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  let selectedAttributes = [];

  const attributeHandler = (attributes) => {
    selectedAttributes = attributes;
  };

  const { id, gallery, name, prices, description, brand, attributes, inStock } =
    product;

  const sym = prices.find((price) => price.currency.symbol === currency.symbol);

  return (
    <div className="container  mb-5">
      <div className="row d-flex justify-content-center product-detail">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <ProductGallary gallery={gallery} productName={name} />
            </div>
            <div className="col-md-4">
              <div className="product">
                <div className="mb-3">
                  <span className="text-uppercase d-block">
                    <h2>{name}</h2>
                  </span>
                  <span className="text-uppercase text-muted mt-5 d-block">
                    <h3>{brand}</h3>
                  </span>
                  <Attributes
                    attributes={attributes}
                    onChangeAttribute={attributeHandler}
                  />
                  <div className="price mt-5 d-block">
                    <h3 className="text-uppercase">Prize:</h3>
                    <span>
                      {sym.currency.symbol} {sym.amount}
                    </span>
                  </div>
                </div>

                <div className="cart mt-5 align-items-center">
                  {inStock ? (
                    <Button onClick={() => addToCart(id, selectedAttributes)}>
                      Add to cart
                    </Button>
                  ) : (
                    <Button disabled={true}>Out Of Stock</Button>
                  )}
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

const mapStateToProps = (state) => {
  return {
    currency: state.shop.currency,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
