import { Link } from "react-router-dom";
import "./style.scss";
import Button from "../Button";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const ProductListCard = ({ product, addToCart, currency }) => {
  const { id, name, gallery, prices, attributes, inStock } = product;
  let selectedAttributes = [];

  attributes.map((attribute) => {
    let defaultKey = product.id + "-" + attribute.id;
    defaultKey = defaultKey.split(" ").join("-");
    return (selectedAttributes[defaultKey] = {
      key: attribute.id,
      name: attribute.name,
      type: attribute.type,
      value: attribute.items[0].value, //set first attribute vale as a default for now
    });
  });

  const sym = prices.find((price) => price.currency.symbol === currency.symbol);
  return (
    <div className="card m-5">
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={gallery[0]} alt={name} />
        </Link>
      </div>

      {inStock ? (
        <div className="cart">
          <Button onClick={() => addToCart(id, selectedAttributes)}>
            <i className="fa fa-shopping-cart"></i>
          </Button>
        </div>
      ) : (
        <div className="cart cart-disabled">
          <Button disabled={true}>
            <i className="fa fa-shopping-cart"></i>
          </Button>
        </div>
      )}
      <div className="product-details">
        <span>
          <Link to={`/product/${id}`}>{name}</Link>
        </span>
        <span className="fw-bolder d-block">
          {sym.currency.symbol} {sym.amount}
        </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListCard);
