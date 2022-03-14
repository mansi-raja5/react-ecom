import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currency: {
    symbol: "$",
    label: "USD",
  },
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload.items,
      };
    case actionTypes.ADD_TO_CART:
      // Get Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                    attributes: action.payload.selectedItemAttributes,
                  }
                : item
            )
          : [
              ...state.cart,
              {
                ...item,
                qty: 1,
                attributes: action.payload.selectedItemAttributes,
              },
            ],
      };
    case actionTypes.ADJUST_ITEM_QTY:
      if (action.payload.qty == 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
      }
    case actionTypes.ADJUST_ATTRIBUTE_VALUE:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                attributes: {
                  ...item.attributes,
                  [action.payload.attributeId]: {
                    ...item.attributes[action.payload.attributeId],
                    value: action.payload.attributeValue,
                  },
                },
              }
            : item
        ),
      };
    case actionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: {
          symbol: action.payload.selectedCurrency.symbol,
          label: action.payload.selectedCurrency.label,
        },
      };
    default:
      return state;
  }
};

export default shopReducer;
