import React from 'react';

import Product from './components/Product';

export default function ProductList({ listProducts = [] }) {
  return (
    <>
      {listProducts.map(product => (
        <Product {...product} key={product.id} />
      ))}
    </>
  );
}
