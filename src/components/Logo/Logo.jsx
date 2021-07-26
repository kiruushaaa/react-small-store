import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import s from './Logo.module.css';

class Logo extends React.PureComponent {
  render() {
    return (
      <NavLink to='/' className={s.link}>
        <img className={s.img} src={logo} alt='Small Store Logotype' />
      </NavLink>
    );
  }
}

export default Logo;
