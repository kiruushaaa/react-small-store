import React from 'react';
import CartOverlayContainer from '../CartSection/CartOverlayContainer';
import CategoryList from '../CategorySwitcher/CategoryList';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import Logo from '../Logo/Logo';

import s from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='container'>
          <nav className={s.nav}>
            <CategoryList />
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
