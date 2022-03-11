import React from "react";
import "./style.scss";

import { useQuery } from "@apollo/client";
import { CURRENCIES } from "../../GraphQL/Queries";

const CurrencyList = ({ showCurrencyList }) => {
  const { loading, error, data } = useQuery(CURRENCIES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <div
        className="overlay"
        style={{ display: showCurrencyList ? "block" : "none" }}
      >
        <div className="container">
          <div className="currency-list">
            <ul>
              {data.currencies.length ? (
                data.currencies.map((currency) => {
                  return (
                    <li key={currency.symbol}>
                      {currency.symbol} {currency.label}
                    </li>
                  );
                })
              ) : (
                <li>NO CURRENCY FOUND </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyList;
