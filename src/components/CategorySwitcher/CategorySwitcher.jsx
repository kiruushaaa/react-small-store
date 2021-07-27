import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './CategorySwitcher.module.css';

class CategorySwitcher extends React.Component {
  render() {
    return (
      <ul className={s.list}>
        {this.props.categories.map((category, idx) => (
          <li key={idx}>
            <NavLink
              className={s.link}
              to={`/${category}`}
              activeClassName={s.active}>
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default CategorySwitcher;
