import React from 'react';
import { connect } from 'react-redux';

import { deleteProductToCart } from '../../redux/actions';

import ProductCart from './components/ProductCart';
import styles from './index.module.scss';

function ShoppingCart({ cart, deleteProductToCart }) {
  const handleClick = (e, product) => {
    e.preventDefault();
    deleteProductToCart(product);
  };

  return (
    <div className={styles.shoppingCart}>
      {cart.map(product => (
        <ProductCart key={product.uuid} {...product} onClick={handleClick} />
      ))}
      <div className={styles.totalPrice}>
        <span>Total: ${cart.reduce((sum, product) => sum + product.price, 0)}</span>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state
});

const mapDispatchToProps = dispatch => ({
  deleteProductToCart(product) {
    dispatch(deleteProductToCart(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
