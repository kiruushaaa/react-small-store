import { Component } from 'react';
import ProductList from '../ProductList/ProductList';

import s from './ProductSection.module.css';

class ProductSection extends Component {
  render() {
    return (
      <>
        <h2 className={s.title}>{this.props.category || 'all'}</h2>
        <ProductList category={this.props.category} />
      </>
    );
  }
}

export default ProductSection;
