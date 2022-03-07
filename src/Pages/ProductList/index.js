import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { LOAD_ALL_PRODUCTS } from "../../GraphQL/Queries";

import ProductListCard from "../../components/ProductListCard";
import "./style.scss";

import { connect } from "react-redux";
import { setAllProducts } from "../../redux/Shopping/shopping-actions";

const ProductList = ({ setAllProducts }) => {
  const { catID } = useParams();

  const { loading, error, data } = useQuery(LOAD_ALL_PRODUCTS, {
    variables: {
      input: { title: "clothes" },
    },
  });

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data) {
      setProducts(data.category.products);
      setAllProducts(data.category.products);
    }
  }, [data]);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <section className="section-products">
      <div className="wrapper">
        <div className="container">
          <div className="page-title text-uppercase">
            <h1>{catID}</h1>
          </div>
          <div className="row">
            {products.map((product, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <ProductListCard product={product} />
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

export default connect(null, mapDispatchToProps)(ProductList);
