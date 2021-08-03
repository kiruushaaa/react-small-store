import { Component } from 'react';
import CategorySwitcherContainer from '../CategorySwitcher/CategorySwitcherСontainer';
import Logo from '../Logo/Logo';
import CurrencySwitcherContainer from '../CurrencySwitcher/CurrencySwitcherContainer';
import CartOverlayContainer from '../Cart/CartOverlay/CartOverlayContainer';

import s from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <nav className={s.nav}>
            <CategorySwitcherContainer />
            <Logo />
            <div className={s.icons}>
              <CurrencySwitcherContainer />
              <CartOverlayContainer />
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
