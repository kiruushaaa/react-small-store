import { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { productsAPI } from '../../../apollo/queries';
import classNames from 'classnames';
import Attribute from '../../Attribute/Attribute';
import ProductPrice from '../../Product/ProductPrice/ProductPrice';
import Gallery from '../Gallery/Gallery';

import s from './CartItem.module.css';

class CartItem extends Component {
  changeHandler = payload => {
    this.props.changeAttribute({
      id: this.props.cartItem.id,
      attributes: this.props.cartItem.attributes,
      ...payload,
    });
  };

  increaseClickHandler = () => {
    this.props.increaseCount({
      id: this.props.cartItem.id,
      attributes: this.props.cartItem.attributes,
    });
  };

  reduceClickHandler = () => {
    this.props.reduceCount({
      id: this.props.cartItem.id,
      attributes: this.props.cartItem.attributes,
    });
  };

  render() {
    const { loading, product } = this.props.data;

    if (loading) return null;

    const { fromCart, idx } = this.props;
    const { name, brand, attributes, prices, gallery } = product;

    return (
      <article className={classNames(s.item, { [s.fromCart]: fromCart })}>
        <div>
          <h4 className={s.title}>
            {brand}
            <span className={s.name}>{name}</span>
          </h4>

          <ProductPrice className={s.price} prices={prices} />

          {attributes.map(attribute => (
            <Attribute
              styleList={s}
              key={attribute.id}
              changeHandler={this.changeHandler}
              selected={this.props.cartItem.attributes}
              idx={idx}
              fromCart={fromCart}
              {...attribute}
            />
          ))}
        </div>

        <div className={s.buttonGroup}>
          <button
            className={s.button}
            type='button'
            onClick={this.increaseClickHandler}>
            +
          </button>

          <p className={s.count}>{this.props.cartItem.count}</p>

          <button
            className={s.button}
            type='button'
            onClick={this.reduceClickHandler}>
            -
          </button>
        </div>

        <Gallery images={gallery} name={name} fromCart={fromCart} />
      </article>
    );
  }
}

export default graphql(productsAPI.getProductById(), {
  options: props => ({
    variables: {
      id: props.basketItemId,
    },
  }),
})(CartItem);
