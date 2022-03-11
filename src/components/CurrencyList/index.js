import React from "react";
import "./style.scss";

import { useQuery } from "@apollo/client";
import { CURRENCIES } from "../../GraphQL/Queries";

import { connect } from "react-redux";
import { setCurrency } from "../../redux/Shopping/shopping-actions";

const CurrencyList = ({ showCurrencyList, setCurrency, currency }) => {
  const { loading, error, data } = useQuery(CURRENCIES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const onCurrencyClickHandler = (e) => {
    const selectedCurrency = {
      symbol: e.target.dataset.symbol,
      label: e.target.dataset.label,
    };
    console.log("list");
    console.log(selectedCurrency);
    setCurrency(selectedCurrency);
  };
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
                data.currencies.map((curr) => {
                  return (
                    <li
                      key={curr.symbol}
                      className={
                        curr.symbol === currency.symbol ? "selected" : ""
                      }
                      onClick={onCurrencyClickHandler}
                      data-symbol={curr.symbol}
                      data-label={curr.label}
                    >
                      {curr.symbol} {curr.label}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (selectedCurrency) => dispatch(setCurrency(selectedCurrency)),
  };
};

const mapStateToProps = (state) => {
  return {
    currency: state.shop.currency,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);
