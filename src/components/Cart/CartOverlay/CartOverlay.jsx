import React from 'react';
import onClickOutside from 'react-onclickoutside';

import cart from '../../../assets/images/cart.svg';
import s from './CartOverlay.module.css';

class CartOverlay extends React.Component {
  handleClickOutside = () => {
    this.props.onLeaveFromClick();
  };

  render() {
    const { isOpened, counter, toggleOverlay, children } = this.props;

    return (
      <div className={s.container}>
        <button className={s.button} type='button' onClick={toggleOverlay}>
          {counter > 0 && <p className={s.counter}>{counter}</p>}
          <img className={s.icon} src={cart} alt='Cart Overlay Icon' />
        </button>
        {isOpened && children}
      </div>
    );
  }
}

export default onClickOutside(CartOverlay);
