import { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/basketSlice';
import { graphql } from '@apollo/client/react/hoc';
import { productsAPI } from '../../apollo/queries';
import AttributesList from './AttributesList';

class AttributesListContainer extends Component {
  render() {
    const { loading } = this.props.data;

    if (loading) return null;

    const { id, data, styleList, addItem, clickHandler, fromProductCard } =
      this.props;

    return (
      <AttributesList
        id={id}
        fromProductCard={fromProductCard}
        attributes={data.product.attributes}
        styleList={styleList}
        onSubmit={addItem}
        clickHandler={clickHandler}>
        {this.props.children}
      </AttributesList>
    );
  }
}

export default graphql(productsAPI.getProductAttributesById(), {
  options: props => ({
    variables: {
      id: props.id,
    },
  }),
})(connect(null, { addItem })(AttributesListContainer));
