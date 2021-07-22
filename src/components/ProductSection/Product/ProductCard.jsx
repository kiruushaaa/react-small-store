import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';
import { productsAPI } from '../../../apollo/queries';

import classNames from 'classnames';
import ProductPrice from './ProductPrice';

import s from './ProductCard.module.css';
import AttributesListContainer from '../../Attribute/AttributesListContainer';

class ProductCard extends React.Component {
  state = {
    isOverlayOpened: false,
  };

  loadOverlay = () => {
    this.setState({ isOverlayOpened: true });
  };

  removeOverlay = () => {
    this.setState({ isOverlayOpened: false });
  };

  getLink = () => {
    return `${this.props.location.pathname}/${this.props.id}`;
  };

  render() {
    const { loading, product } = this.props.data;

    if (loading) return null;

    const { id, name, inStock, gallery, prices } = product;

    return (
      <article
        className={classNames(s.card, { [s.outOfStock]: !inStock })}
        onMouseLeave={this.removeOverlay}>
        {!inStock && <p className={s.stock}>Out of stock</p>}

        <NavLink className={s.productLink} to={this.getLink()}>
          <img
            className={s.previewImage}
            src={gallery[0]}
            alt={name}
            aria-labelledby={id}
          />
        </NavLink>

        <h3 className={s.title} id={id}>
          {name}
        </h3>
        <ProductPrice className={s.price} prices={prices} />

        {inStock && !this.state.isOverlayOpened && (
          <button
            className={`${s.button} ${s.iconButton}`}
            type='button'
            onClick={this.loadOverlay}>
            <span className='visually-hidden'>Add to cart</span>
          </button>
        )}

        {this.state.isOverlayOpened && (
          <AttributesListContainer
            id={id}
            styleList={s}
            clickHandler={this.removeOverlay}>
            <button className={s.button} type='submit'>
              <span className='visually-hidden'>Add to cart</span>
            </button>
          </AttributesListContainer>
        )}
      </article>
    );
  }
}

const withGraphQLProductCard = graphql(
  productsAPI.getProductInfoForCardById(),
  {
    options: props => ({
      variables: {
        id: props.id || '',
      },
    }),
  }
)(ProductCard);

export default withRouter(withGraphQLProductCard);
