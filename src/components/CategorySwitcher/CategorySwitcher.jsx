import React from 'react';
import { NavLink } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';
import { categoryAPI } from '../../apollo/queries';

import s from './CategorySwitcher.module.css';

class CategorySwitcher extends React.Component {
  render() {
    if (this.props.data.loading) return null;

    const { categories } = this.props.data;
    const categoryList = ['all', ...categories.map(category => category.name)];

    return (
      <ul className={s.list}>
        {categoryList.map((category, idx) => (
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

export default graphql(categoryAPI.getAllCategories())(CategorySwitcher);
