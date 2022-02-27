import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ALL_PRODUCTS } from "../../GraphQL/Queries";

import Products from "../../components/ProductListCard";
import "./style.scss";

import { connect } from "react-redux";
import { setAllProducts } from "../../redux/Shopping/shopping-actions";

const Men = ({ props, setAllProducts }) => {
  const { data } = useQuery(LOAD_ALL_PRODUCTS);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data) {
      setProducts(data.category.products);
      setAllProducts(data.category.products);
    }
  }, [data]);
  return (
    <section className="section-products">
      <div className="wrapper">
        <div className="container">
          <div className="page-title">
            <h1>MEN</h1>
          </div>
          <div className="row">
            {products.map((product, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <Products product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAllProducts: (products) => dispatch(setAllProducts(products)),
  };
};

export default connect(null, mapDispatchToProps)(Men);
