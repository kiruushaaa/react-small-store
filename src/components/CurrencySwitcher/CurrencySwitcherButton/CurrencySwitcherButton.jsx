import React from 'react';
import classNames from 'classnames';
import { getCurrencyIcon } from '../../../utils/utils';

import s from './CurrencySwitcherButton.module.css';

class CurrencySwitcherButton extends React.Component {
  render() {
    const buttonClassName = classNames(s.button, {
      [s.buttonOpened]: this.props.isOpened,
    });

    return (
      <button
        className={buttonClassName}
        type='button'
        onClick={this.props.onClick}>
        <span className='visually-hidden'>Toggle currency list</span>
        {getCurrencyIcon(this.props.currency)}
      </button>
    );
  }
}

export default CurrencySwitcherButton;
