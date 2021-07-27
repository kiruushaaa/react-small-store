import React from 'react';
import ImageList from './ImageList/ImageList';
import CurrentImage from './CurrentImage/CurrentImage';

class ProductGallery extends React.Component {
  state = {
    current: '',
  };

  componentDidMount() {
    this.setState({ current: this.props.images[0] });
  }

  changeCurrentPhoto = event => {
    this.setState({ current: event.target.src });
  };

  render() {
    return (
      <>
        <ImageList
          images={this.props.images}
          onClick={this.changeCurrentPhoto}
        />
        <CurrentImage src={this.state.current} name={this.props.name} />
      </>
    );
  }
}

export default ProductGallery;
