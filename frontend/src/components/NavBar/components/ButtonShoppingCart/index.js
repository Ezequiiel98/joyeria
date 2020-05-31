import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import styles from './index.module.scss';

function ButtonShoppingCart({ cart, showShoppingCart, setShowShoppingCart }) {
  return (
    <button
      type="button"
      className={styles.buttonCart}
      onClick={() => setShowShoppingCart(!showShoppingCart)}
    >
      <FontAwesomeIcon icon={faCartPlus} className={styles.iconCart} />
      <span className={styles.price}>${cart.reduce((sum, product) => sum + product.price, 0)}</span>
    </button>
  );
}
const mapStateToProps = state => ({
  cart: state
});

export default connect(mapStateToProps)(ButtonShoppingCart);
