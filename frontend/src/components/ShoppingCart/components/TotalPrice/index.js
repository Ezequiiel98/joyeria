import React from 'react';
import PropTypes from 'prop-types';

export default function TotalPrice({ products, className, text }) {
  return (
    <div className={className}>
      <span>
        {' '}
        {text && text} ${products.reduce((sum, product) => sum + product.price, 0)}
      </span>
    </div>
  );
}

TotalPrice.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string
}
