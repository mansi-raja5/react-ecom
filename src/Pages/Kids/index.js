import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ALL_PRODUCTS } from "../../GraphQL/Queries";

import Products from "../../components/Products";
import "./style.scss";

const Kids = (props) => {
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
            <h1>KIDS</h1>
          </div>
          <div className="row">
            {products.map((product, pos) => {
              const configProduct = {
                ...product,
              };
              return <Products key={pos} {...configProduct} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kids;
