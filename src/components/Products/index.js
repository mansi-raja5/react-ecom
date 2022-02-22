import { Link } from "react-router-dom";
import "./style.scss";

const Products = (product) => {
  const { id, name, gallery, prices } = product;
  return (
    <div className="card m-5">
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={gallery[0]} alt={name} />
        </Link>
      </div>
      <div className="cart">
        <i className="fa fa-shopping-cart"></i>
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

export default Products;
