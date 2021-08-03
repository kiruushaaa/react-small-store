import { PureComponent, createRef } from 'react';
import classNames from 'classnames';

import s from './ImageList.module.css';

class ImageList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { className: '' };

    this.imageList = createRef();
    this.image = createRef();
  }

  componentDidMount() {
    this.setState({
      className: classNames(s.imageList, {
        [s.disableScroll]:
          this.imageList.current.clientHeight >=
          this.image.current.clientHeight * this.props.images.length,
      }),
    });
  }

  render() {
    return (
      <div className={this.state.className} ref={this.imageList}>
        {this.props.images.map((src, idx) => (
          <div
            key={idx}
            ref={this.image}
            role='button'
            className={s.button}
            onClick={this.props.onClick}>
            <img className={s.image} src={src} alt={this.props.name} />
          </div>
        ))}
      </div>
    );
  }
}

export default ImageList;
