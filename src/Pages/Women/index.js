import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ALL_PRODUCTS } from "../../GraphQL/Queries";

import Products from "../../components/Products";

import "./style.scss";

const Women = (props) => {
  const { data } = useQuery(LOAD_ALL_PRODUCTS);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(data);
    if (data) {
      setProducts(data.category.products);
    }
  }, [data]);
  return (
    <section className="section-products">
      <div className="wrapper">
        <div className="container">
          <div className="page-title">
            <h1>WOMEN</h1>
          </div>
          <div className="row">
            {products.map((product, index) => {
              const configProduct = {
                ...product,
              };
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <Products {...configProduct} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Women;
