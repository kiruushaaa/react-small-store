import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';
import { productsAPI } from '../../../apollo/queries';
import ProductPage from './ProductPage';

class ProductPageContainer extends React.Component {
  render() {
    const { loading } = this.props.data;

    if (loading) return null;

    return <ProductPage {...this.props.data.product} />;
  }
}

const withGraphQLProductPage = graphql(productsAPI.getProductById(), {
  options: props => ({
    variables: {
      id: props.match.params.id,
    },
  }),
})(ProductPageContainer);

export default withRouter(withGraphQLProductPage);
