import React from 'react';

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
