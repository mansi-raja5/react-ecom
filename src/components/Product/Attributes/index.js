import React, { useState } from "react";
import "./style.scss";

import { connect } from "react-redux";
import { adjustAttributeValue } from "../../../redux/Shopping/shopping-actions";

const Attributes = ({
  productId,
  attributes,
  cartSelectedAttributes = {},
  onChangeAttribute,
  adjustAttributeValue,
}) => {
  let defaultAttribute = {};

  if (attributes.length) {
    let defaultKey = productId + "-" + attributes[0].id;
    defaultKey = defaultKey.split(" ").join("-");
    defaultAttribute[defaultKey] = {
      key: attributes[0].id,
      name: attributes[0].id,
      type: attributes[0].type,
      value: attributes[0].items[0].value,
    };
  }
  const [selectedAttributes, setSelectedAttributes] =
    useState(defaultAttribute);

  const onRadioChangeHandler = (e) => {
    setSelectedAttributes(() => {
      selectedAttributes[e.target.name] = {
        key: e.target.name,
        name: e.target.name,
        type: e.target.dataset.attributetype,
        value: e.target.value,
      };
      return selectedAttributes;
    });
    onChangeAttribute(selectedAttributes);

    if (Object.keys(cartSelectedAttributes).length) {
      adjustAttributeValue(productId, e.target.name, e.target.value);
    }
  };

  const inCartSelectedAttributes = (attName, attValue) => {
    let radioName = productId + "-" + attName;
    radioName = radioName.split(" ").join("-");
    return Object.keys(cartSelectedAttributes).length
      ? cartSelectedAttributes[radioName].value === attValue
      : false;
  };

  return (
    <div>
      {attributes.map((attribute) => (
        <div className="mt-5 d-block" key={attribute.id}>
          <h3 className="text-uppercase">{attribute.name}</h3>
          {attribute.items.map((item, i) => {
            let radioName = productId + "-" + attribute.name;
            radioName = radioName.split(" ").join("-");
            if (
              (Object.keys(cartSelectedAttributes).length &&
                inCartSelectedAttributes(attribute.id, item.value)) ||
              (!Object.keys(cartSelectedAttributes).length && i === 0)
            ) {
              return (
                <label className="radio" key={item.id}>
                  <input
                    type="radio"
                    name={radioName}
                    value={item.value}
                    data-attributetype={attribute.type}
                    onChange={onRadioChangeHandler}
                    defaultChecked
                  />
                  {attribute.type === "swatch" ? (
                    <span style={{ backgroundColor: item.value }}></span>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </label>
              );
            } else {
              return (
                <label className="radio" key={item.id}>
                  <input
                    type="radio"
                    name={radioName}
                    value={item.value}
                    data-attributetype={attribute.type}
                    onChange={onRadioChangeHandler}
                  />
                  {attribute.type === "swatch" ? (
                    <span style={{ backgroundColor: item.value }}></span>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </label>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustAttributeValue: (itemID, attributeId, attributeValue) =>
      dispatch(adjustAttributeValue(itemID, attributeId, attributeValue)),
  };
};

export default connect(null, mapDispatchToProps)(Attributes);
