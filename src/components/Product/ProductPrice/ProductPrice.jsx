import { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencyIcon } from '../../../utils/utils';

class ProductPrice extends Component {
  render() {
    const price = this.props.prices.find(
      price => price.currency === this.props.defaultCurrency
    );
    return (
      <p className={this.props.className}>
        {getCurrencyIcon(price.currency)}
        {price.amount}
      </p>
    );
  }
}

const mapStateToProps = state => ({
  defaultCurrency: state.app.defaultCurrency,
});

export default connect(mapStateToProps)(ProductPrice);
