import React from 'react';
import PropTypes from 'prop-types';

import ProductCart from '../ProductCart';

import styles from './index.module.scss';

export default function Products({ products, deleteProduct }) {
  return (
    <div className={styles.products}>
      {products.map(product => (
        <ProductCart key={product.uuid} {...product} onClick={() => deleteProduct(product)} />
      ))}
      {products.length === 0 && <p className={styles.cartEmpty}>El carrito esta vacio...</p>}
    </div>
  );
}

Products.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  products: PropTypes.instanceOf(Array).isRequired
};
