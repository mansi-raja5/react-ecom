import React, { useState } from "react";

const Attributes = (props) => {
  const attributes = props.attributes;
  const defaultKey = attributes[0].id;
  let defaultAttribute = {};
  defaultAttribute[defaultKey] = {
    key: attributes[0].id,
    name: attributes[0].id,
    type: attributes[0].type,
    value: attributes[0].items[0].value,
  };
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
    console.log(selectedAttributes);
    props.onChangeAttribute(selectedAttributes);
  };
  return (
    <div>
      {attributes.map((attribute) => (
        <div className="mt-5 d-block" key={attribute.id}>
          <h3 className="text-uppercase">{attribute.name}</h3>
          {attribute.items.map((item, i) =>
            i === 0 ? (
              <label className="radio" key={item.id}>
                <input
                  type="radio"
                  name={attribute.name}
                  value={item.value}
                  data-attributetype={attribute.type}
                  onChange={onRadioChangeHandler}
                  checked
                />
                {attribute.type === "swatch" ? (
                  <span style={{ backgroundColor: item.value }}></span>
                ) : (
                  <span>{item.value}</span>
                )}
              </label>
            ) : (
              <label className="radio" key={item.id}>
                <input
                  type="radio"
                  name={attribute.name}
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
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Attributes;
