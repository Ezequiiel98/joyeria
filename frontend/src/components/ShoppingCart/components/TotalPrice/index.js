import React from 'react';
import PropTypes from 'prop-types';
import usePriceFormater from 'hooks/priceFormater';

export default function TotalPrice({ products, className, text }) {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const price = usePriceFormater(totalPrice);

  return (
    <div className={className}>
      <span>
        {' '}
        {text && text} {price}
      </span>
    </div>
  );
}

TotalPrice.propTypes = {
  className: PropTypes.string.isRequired,
  products: PropTypes.instanceOf(Array).isRequired,
  text: PropTypes.string
};
