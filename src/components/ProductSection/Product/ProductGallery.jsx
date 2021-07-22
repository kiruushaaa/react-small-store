import React from 'react';

import s from './ProductGallery.module.css';

class ProductGallery extends React.Component {
  state = {
    current: '',
  };

  componentDidMount() {
    this.setState({ current: this.props.images[0] });
  }

  clickHandler = event => {
    this.setState({ current: event.target.src });
  };

  render() {
    return (
      <>
        <div className={s.images}>
          {this.props.images.map((src, idx) => (
            <div
              key={idx}
              role='button'
              className={s.button}
              onClick={this.clickHandler}>
              <img className={s.image} src={src} alt={this.props.name} />
            </div>
          ))}
        </div>

        <div className={s.currentImageContainer}>
          <img
            className={s.image}
            src={this.state.current}
            alt={this.props.name}
          />
        </div>
      </>
    );
  }
}

export default ProductGallery;
