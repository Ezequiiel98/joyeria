import React from 'react';
import PropTypes from 'prop-types';

import ProductCart from '../ProductCart';

import styles from './index.module.scss';

export default function Products({ products, deleteProductToCart, addUnitToCart, removeUnitToCart }) {
  return (
    <div className={styles.products}>
      {products.map(product => (
        <ProductCart
          key={product.id}
          {...product}
          onDeleteProduct={deleteProductToCart}
          onAddUnit={addUnitToCart}
          onRemoveUnit={removeUnitToCart}
        />
      ))}
      {products.length === 0 && <p className={styles.cartEmpty}>El carrito está vacío...</p>}
    </div>
  );
}

Products.propTypes = {
  deleteProductToCart: PropTypes.func.isRequired,
  products: PropTypes.instanceOf(Array).isRequired
};
