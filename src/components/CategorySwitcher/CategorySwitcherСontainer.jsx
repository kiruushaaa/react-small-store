import { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { categoryAPI } from '../../apollo/queries';
import CategorySwitcher from './CategorySwitcher';

class CategorySwitcherContainer extends Component {
  render() {
    if (this.props.data.loading) return null;

    const { categories } = this.props.data;
    const categoryList = ['all', ...categories.map(category => category.name)];

    return <CategorySwitcher categories={categoryList} />;
  }
}

export default graphql(categoryAPI.getAllCategories())(
  CategorySwitcherContainer
);
