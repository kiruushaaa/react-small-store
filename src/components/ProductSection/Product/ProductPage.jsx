import React from 'react';
import parse from 'html-react-parser';
import ProductGallery from './ProductGallery';
import AttributesListContainer from '../../Attribute/AttributesListContainer';

import s from './ProductPage.module.css';
import ProductPrice from './ProductPrice';

class ProductPage extends React.Component {
  render() {
    const { id, name, inStock, prices, description, gallery } = this.props;

    return (
      <>
        <div className={s.page}>
          <div className={s.info}>
            <h2 className={s.title}>{name}</h2>

            <AttributesListContainer styleList={s} id={id}>
              <div>
                <p className={s.attributeName}>Price:</p>
                <ProductPrice className={s.price} prices={prices} />
              </div>

              <button className={s.button} type='submit' disabled={!inStock}>
                {inStock ? 'Add to cart' : 'Out of stock'}
              </button>
            </AttributesListContainer>

            <div className='description'>{parse(description)}</div>
          </div>

          <div className={s.gallery}>
            <ProductGallery images={gallery} name={name} />
          </div>
        </div>
      </>
    );
  }
}

export default ProductPage;
