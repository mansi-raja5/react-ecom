import { Link } from "react-router-dom";
import "./style.scss";
import Button from "../Button";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const ProductListCard = ({ product, addToCart }) => {
  const { id, name, gallery, prices, attributes } = product;
  let selectedAttributes = [];
  attributes.map((attribute) => {
    selectedAttributes.push({
      key: attribute.id,
      name: attribute.name,
      type: attribute.type,
      value: attribute.items[0].value, //set first attribute vale as a default for now
    });
  });
  return (
    <div className="card m-5">
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={gallery[0]} alt={name} />
        </Link>
      </div>
      <div className="cart">
        <Button onClick={() => addToCart(id, selectedAttributes)}>
          <i className="fa fa-shopping-cart"></i>
        </Button>
      </div>
      <div className="product-details">
        <span>
          <Link to={`/product/${id}`}>{name}</Link>
        </span>
        <span className="fw-bolder d-block">
          {prices[0].currency.symbol}
          {prices[0].amount}
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

export default connect(null, mapDispatchToProps)(ProductListCard);
