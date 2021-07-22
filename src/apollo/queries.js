import { gql } from '@apollo/client';
import { PRODUCT_FRAGMENT } from './fragments';

export const categoryAPI = {
  getAllCategories: () => gql`
    query getAllCategories {
      categories {
        name
      }
    }
  `,
};

export const currencyAPI = {
  getCurrencies: () => gql`
    query getCurrencies {
      currencies
    }
  `,
};

export const productsAPI = {
  getProductsByCategory: () => gql`
    ${PRODUCT_FRAGMENT}
    query getProductsByCategory($category: String!) {
      category(input: { title: $category }) {
        products {
          ...ProductFragment
        }
      }
    }
  `,

  getProductsIdsByCategory: () => gql`
    query getProductsIdsByCategory($category: String!) {
      category(input: { title: $category }) {
        products {
          id
        }
      }
    }
  `,

  getAllProducts: () => gql`
    ${PRODUCT_FRAGMENT}
    query getAllProducts {
      category {
        products {
          ...ProductFragment
        }
      }
    }
  `,

  getProductById: () => gql`
    ${PRODUCT_FRAGMENT}
    query getProductById($id: String!) {
      product(id: $id) {
        ...ProductFragment
        description
      }
    }
  `,

  getProductInfoForCardById: () => gql`
    query getProductInfoForCardById($id: String!) {
      product(id: $id) {
        id
        name
        inStock
        gallery
        prices {
          currency
          amount
        }
      }
    }
  `,

  getProductAttributesById: () => gql`
    query getProductAttributesById($id: String!) {
      product(id: $id) {
        id
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
      }
    }
  `,
};
