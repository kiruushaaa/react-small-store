import { PureComponent } from 'react';

import s from './CurrentImage.module.css';

class CurrentImage extends PureComponent {
  render() {
    return (
      <div className={s.container}>
        <img className={s.image} src={this.props.src} alt={this.props.name} />
      </div>
    );
  }
}

export default CurrentImage;
