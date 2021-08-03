import { Component } from 'react';
import classNames from 'classnames';

import originalStyles from './Attribute.module.css';

class Attribute extends Component {
  render() {
    const { styleList } = this.props;
    const { idx, fromCart } = this.props;
    const { name, type, items, changeHandler, selected } = this.props;

    const cartTag = fromCart ? 'cart' : '';

    // {idx} is representing item's index from cart

    return (
      <div className={styleList.attributeChooser}>
        <p className={styleList.attributeName}>{name}:</p>
        <div className={originalStyles.container}>
          {items.map(item => {
            //  i don't know what color value is used for a basket
            //  so i am providing that solution to basket store
            //  { ...rest, 'Color': notHEXcolor }
            const isSwatch = type === 'swatch';
            const value = isSwatch ? item.displayValue : item.value;

            // boolean {isSelected} is needed when watching from cart
            // this is provided because of having validation on the page's form
            // {selected} is an object {key: values}
            const isSelected =
              selected && selected[name] && selected[name] === value;

            const labelClassName = classNames(originalStyles.label, {
              [styleList.label]: !!styleList,
              [originalStyles.swatch]: isSwatch,
            });

            const groupTag = `${name}${cartTag}${idx}`;

            return (
              <label
                key={item.id}
                className={classNames(originalStyles.group, {
                  [styleList.group]: !!styleList,
                })}>
                <input
                  className={originalStyles.input}
                  type='radio'
                  name={groupTag}
                  value={value}
                  onChange={() => changeHandler({ name, value })}
                  checked={isSelected}
                />

                <span
                  className={labelClassName}
                  role='radio'
                  aria-checked={isSelected}
                  style={
                    isSwatch ? { backgroundColor: item.value } : undefined
                  }>
                  {isSwatch ? '' : item.displayValue}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Attribute;
