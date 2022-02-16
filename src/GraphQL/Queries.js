import { gql } from "@apollo/client";

export const LOAD_ALL_PRODUCTS = gql`
  query {
    category(input: { title: "all" }) {
      name
      products {
        id
        name
        inStock
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;
