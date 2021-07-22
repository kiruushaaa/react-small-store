import React from 'react';
import CurrencyButton from './CurrencyButton';
import { graphql } from '@apollo/client/react/hoc';
import { currencyAPI } from '../../apollo/queries';

import s from './CurrencyList.module.css';

class CurrencyList extends React.Component {
  render() {
    const { currencies, loading } = this.props.data;

    if (loading) return null;

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
