import React from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { productsAPI } from '../../apollo/queries';
import ProductCard from './Product/ProductCard';

import s from './ProductList.module.css';

class ProductList extends React.Component {
  render() {
    const { loading, category } = this.props.data;

    if (loading) return null;

    return (
      <ul className={s.list}>
        {category.products.map(product => (
          <li className={s.item} key={product.id}>
            <ProductCard id={product.id} />
          </li>
        ))}
      </ul>
    );
  }
}

export default graphql(productsAPI.getProductsIdsByCategory(), {
  options: props => ({
    variables: {
      category: props.category,
    },
  }),
})(ProductList);
