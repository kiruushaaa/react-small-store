import { Component } from 'react';
import { withFormik } from 'formik';
import Attribute from './Attribute';
import { attributesReducer } from '../../utils/utils';

import originalStyles from './AttributesList.module.css';

class AttributesList extends Component {
  componentDidMount() {
    if (this.props.attributes.length === 0 && this.props.fromProductCard) {
      (async () => await this.props.submitForm())()
    }
  }

  render() {
    const { styleList, attributes } = this.props;
    const { errors, handleSubmit, setFieldValue } = this.props;

    const radioChangeHandler = ({ name, value }) => setFieldValue(name, value);

    return (
      <form className={styleList.form} onSubmit={handleSubmit}>
        {attributes.map((attribute, attributeIdx) => (
          <Attribute
            key={attributeIdx}
            styleList={styleList}
            changeHandler={radioChangeHandler}
            {...attribute}
          />
        ))}

        <div className={originalStyles.errorList}>
          {Object.keys(errors).map(key => {
            return (
              errors[key] && (
                <p className={originalStyles.error} key={key}>
                  {errors[key]}
                </p>
              )
            );
          })}
        </div>

        {this.props.children}
      </form>
    );
  }
}

export default withFormik({
  displayName: 'AttributesListForm',

  mapPropsToValues: props => props.attributes.reduce(attributesReducer, {}),

  validate: values => {
    const errors = {};

    Object.keys(values).forEach(key => {
      if (!values[key]) {
        errors[key] = `Field "${key}" is not chosen`;
      }
    });

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit({ id: props.id, attributes: values });
    typeof props.clickHandler === 'function' && props.clickHandler();
    setSubmitting(false);
  },
})(AttributesList);
