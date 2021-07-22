import React from 'react';
import { NavLink } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';
import { categoryAPI } from '../../apollo/queries';

import s from './CategoryList.module.css';

class CategoryList extends React.Component {
  render() {
    const { categories, loading } = this.props.data;

    if (loading) return null;
    
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

export default graphql(categoryAPI.getAllCategories())(CategoryList);
