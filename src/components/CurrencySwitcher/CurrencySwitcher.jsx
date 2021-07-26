import React from 'react';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';
import classNames from 'classnames';
import { changeCurrency } from '../../redux/appSlice';
import { getCurrencyIcon } from '../../utils/utils';
import CurrencyList from './CurrencyList';

import s from './CurrencySwitcher.module.css';

class CurrencySwitcher extends React.Component {
  state = {
    isOpened: false,
  };

  clickHandler = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  handleClickOutside = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const buttonClassName = classNames(s.button, {
      [s.buttonOpened]: this.state.isOpened,
    });

    return (
      <div className={s.container}>
        <button
          className={buttonClassName}
          type='button'
          onClick={this.clickHandler}>
          <span className='visually-hidden'>Toggle currency list</span>
          {getCurrencyIcon(this.props.defaultCurrency)}
        </button>
        <CurrencyList
          isOpened={this.state.isOpened}
          defaultCurrency={this.props.defaultCurrency}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  defaultCurrency: state.app.defaultCurrency,
});

export default connect(mapStateToProps, { changeCurrency })(
  onClickOutside(CurrencySwitcher)
);
