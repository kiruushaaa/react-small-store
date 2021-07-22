import { gql } from '@apollo/client';

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Product {
    id
    name
    inStock
    gallery
    attributes {
      id
      name
      type
      items {
        id
        value
        displayValue
      }
    }
    prices {
      currency
      amount
    }
  }
`;
