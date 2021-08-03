import { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import s from './CurrencySwitcher.module.css';

class CurrencySwitcher extends Component {
  handleClickOutside = () => {
    this.props.onClickOutside();
  };

  render() {
    return <div className={s.container}>{this.props.children}</div>;
  }
}

export default onClickOutside(CurrencySwitcher);
