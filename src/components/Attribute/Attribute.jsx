import React, { Component } from 'react';
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
          {items.map((item, itemIdx) => {
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

            const groupId = `${name}${cartTag}${idx}${itemIdx}`;

            return (
              <div
                className={classNames(originalStyles.group, {
                  [styleList.group]: !!styleList,
                })}
                key={item.id}>
                <input
                  className={originalStyles.input}
                  type='radio'
                  name={groupId}
                  id={groupId}
                  value={value}
                  onChange={() => changeHandler({ name, value })}
                  checked={isSelected}
                />

                <label
                  className={labelClassName}
                  style={isSwatch ? { backgroundColor: item.value } : undefined}
                  htmlFor={groupId}>
                  {isSwatch ? '' : item.displayValue}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Attribute;
