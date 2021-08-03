export const getCurrencyIcon = currency => {
  switch (currency) {
    case 'USD':
      return '$';
    case 'GBP':
      return '£';
    case 'AUD':
      return '₳';
    case 'JPY':
      return '¥';
    case 'RUB':
      return '₽';
    default:
      return '';
  }
};

export const totalPriceReducer =
  (productList, currency) => (prevAmount, basketItem) => {
    const amount = productList
      .find(product => product.id === basketItem.id)
      .prices.find(price => price.currency === currency).amount;
    return amount * basketItem.count + prevAmount;
  };

export const totalCountReducer = (prevAmount, currentItem) =>
  prevAmount + currentItem.count;

export const attributesReducer = (object, curr) => {
  object[curr.name] = '';
  return object;
};

export const itemsComparator = (item, givenItem) =>
  item.id === givenItem.id &&
  JSON.stringify(item.attributes) === JSON.stringify(givenItem.attributes);

export const getQuantity = counter =>
  `${counter} item${counter !== 1 ? 's' : ''}`;
