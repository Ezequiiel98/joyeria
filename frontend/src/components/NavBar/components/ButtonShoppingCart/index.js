import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import TotalPrice from 'components/ShoppingCart/components/TotalPrice';

import styles from './index.module.scss';

function ButtonShoppingCart({ cart, showShoppingCart, setShowShoppingCart }) {
  return (
    <button
      type="button"
      className={styles.buttonCart}
      onClick={() => setShowShoppingCart(!showShoppingCart)}
    >
      <FontAwesomeIcon icon={faCartPlus} className={styles.iconCart} />
      <TotalPrice className={styles.price} products={cart} />
    </button>
  );
}
const mapStateToProps = state => ({
  cart: state
});

export default connect(mapStateToProps)(ButtonShoppingCart);
