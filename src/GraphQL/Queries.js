import { gql } from "@apollo/client";

export const LOAD_ALL_PRODUCTS = gql`
  query Category($catId: CategoryInput) {
    category(input: $catId) {
      name
      products {
        id
        name
        inStock
        brand
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export const LOAD_PRODUCT_DETAILS = gql`
  query ($productID: String!) {
    product(id: $productID) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          symbol
        }
        amount
      }
      brand
    }
  }
`;

export const CURRENCIES = gql`
  query {
    currencies {
      symbol
      label
    }
  }
`;
