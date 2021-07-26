import React from 'react';
import { connect } from 'react-redux';
import { changeCurrency } from '../../../redux/appSlice';
import { getCurrencyIcon } from '../../../utils/utils';

import s from './CurrencyButton.module.css';

class CurrencyButton extends React.Component {
  clickHandler = () => {
    this.props.changeCurrency(this.props.currency);
  };

  render() {
    return (
      <button
        className={s.button}
        type='button'
        disabled={this.props.currency === this.props.defaultCurrency}
        onClick={this.clickHandler}>
        {getCurrencyIcon(this.props.currency)} {this.props.currency}
      </button>
    );
  }
}

export default connect(null, { changeCurrency })(CurrencyButton);
