import { Component } from 'react';
import { connect } from 'react-redux';
import { changeCurrency } from '../../redux/appSlice';
import CurrencySwitcher from './CurrencySwitcher';
import CurrencyList from './CurrencyList/CurrencyList';
import CurrencySwitcherButton from './CurrencySwitcherButton/CurrencySwitcherButton';

class CurrencySwitcherContainer extends Component {
  state = {
    isOpened: false,
  };

  toggleOverlay = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  closeOverlay = () => {
    this.setState({ isOpened: false });
  };

  render() {
    return (
      <CurrencySwitcher onClickOutside={this.closeOverlay}>
        <CurrencySwitcherButton
          isOpened={this.state.isOpened}
          onClick={this.toggleOverlay}
          currency={this.props.defaultCurrency}
        />
        <CurrencyList
          isOpened={this.state.isOpened}
          defaultCurrency={this.props.defaultCurrency}
        />
      </CurrencySwitcher>
    );
  }
}

const mapStateToProps = state => ({
  defaultCurrency: state.app.defaultCurrency,
});

export default connect(mapStateToProps, { changeCurrency })(
  CurrencySwitcherContainer
);
