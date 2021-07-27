import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { graphql } from '@apollo/client/react/hoc';
import intersectionBy from 'lodash-es/intersectionBy';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { productsAPI } from '../../../apollo/queries';
import CartItem from '../CartItem/CartItem';
import {
  changeAttribute,
  increaseCount,
  reduceCount,
} from '../../../redux/basketSlice';
import {
  getCurrencyIcon,
  totalPriceReducer,
  getQuantity,
} from '../../../utils/utils';

import s from './CartSection.module.css';

class CartSection extends React.Component {
  render() {
    if (this.props.data.loading) return null;

    const { basket, data, fromCart, defaultCurrency, counter } = this.props;
    const { category } = data;

    const productList = intersectionBy(category.products, basket, 'id');
    const totalPrice = basket
      .reduce(totalPriceReducer(productList, defaultCurrency), 0)
      .toFixed(2);

    return (
      <div className={classNames(s.section, { [s.fromCart]: fromCart })}>
        {fromCart ? (
          <h3 className={s.title}>
            My bag, <span className={s.subtitle}>{getQuantity(counter)}</span>
          </h3>
        ) : (
          <h2 className={s.title}>Cart</h2>
        )}

        <ul className={s.list}>
          {basket.map((basketItem, idx) => {
            return (
              <li className={s.listItem} key={idx}>
                <CartItem
                  fromCart={fromCart}
                  cartItem={basket[idx]}
                  changeAttribute={this.props.changeAttribute}
                  increaseCount={this.props.increaseCount}
                  reduceCount={this.props.reduceCount}
                  idx={idx}
                  basketItemId={basketItem.id}
                />
              </li>
            );
          })}
        </ul>

        {Number(totalPrice) !== 0 && (
          <div className={s.priceBlock}>
            <p>Total</p>
            <p>
              {getCurrencyIcon(defaultCurrency)}
              {totalPrice}
            </p>
          </div>
        )}

        <div className={s.buttonGroup}>
          {this.props.children}

          {Number(totalPrice) !== 0 ? (
            <button
              className={s.button}
              type='submit'
              onClick={() => {
                alert(JSON.stringify(basket, null, 2));
              }}>
              Check out
            </button>
          ) : (
            <p>
              Cart is empty!{' '}
              <NavLink to='/all' onClick={this.props.onLeaveFromClick}>
                View products
              </NavLink>
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  defaultCurrency: state.app.defaultCurrency,
  basket: state.basket,
});

export default compose(
  connect(mapStateToProps, { changeAttribute, increaseCount, reduceCount }),
  graphql(productsAPI.getAllProducts())
)(CartSection);
