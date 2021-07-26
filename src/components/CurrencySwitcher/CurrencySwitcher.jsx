import React from 'react';
import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';
import { changeCurrency } from '../../redux/appSlice';
import CurrencyList from './CurrencyList/CurrencyList';
import CurrencySwitcherButton from './CurrencySwitcherButton/CurrencySwitcherButton';

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
    console.log('rendered');

    return (
      <div className={s.container}>
        <CurrencySwitcherButton
          isOpened={this.state.isOpened}
          onClick={this.clickHandler}
          currency={this.props.defaultCurrency}
        />
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
