import React from 'react';
import CategorySwitcher from '../CategorySwitcher/CategorySwitcher';
import Logo from '../Logo/Logo';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import CartOverlayContainer from '../Cart/CartOverlay/CartOverlayContainer';

import s from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='container'>
          <nav className={s.nav}>
            <CategorySwitcher />
            <Logo />
            <div className={s.icons}>
              <CurrencySwitcher />
              <CartOverlayContainer />
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
