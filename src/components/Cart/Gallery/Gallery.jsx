import { PureComponent } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import './slick-slider.css';
import s from './Gallery.module.css';

class Gallery extends PureComponent {
  render() {
    const { images, name, fromCart } = this.props;

    const settings = {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={classNames(s.gallery, { [s.smallGallery]: fromCart })}>
        <Slider {...settings}>
          {images.map((image, i) => (
            <img key={i} className={s.image} src={image} alt={name} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default Gallery;
