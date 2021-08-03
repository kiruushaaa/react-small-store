import { Component } from 'react';
import CurrencyButton from '../CurrencyButton/CurrencyButton';
import { graphql } from '@apollo/client/react/hoc';
import { currencyAPI } from '../../../apollo/queries';

import s from './CurrencyList.module.css';

class CurrencyList extends Component {
  render() {
    const {
      isOpened,
      data: { loading, currencies },
    } = this.props;

    if (loading || !isOpened) return null;

    return (
      <ul className={s.list}>
        {currencies.map((currency, idx) => (
          <li key={idx}>
            <CurrencyButton
              defaultCurrency={this.props.defaultCurrency}
              currency={currency}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default graphql(currencyAPI.getCurrencies())(CurrencyList);
