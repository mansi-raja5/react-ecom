import * as actionTypes from "./shopping-types";

export const setAllProducts = (products) => {
  return {
    type: actionTypes.SET_ALL_PRODUCTS,
    payload: {
      items: products,
    },
  };
};

export const addToCart = (itemID) => {
  console.log(itemID);
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

//increment - decrement qty on the cart
export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};
