import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { deleteProductToCart } from '../../redux/actions';

import ProductCart from './components/ProductCart';
import styles from './index.module.scss';

const containerShoppingCart = document.getElementById('shopping-cart');

function ShoppingCart({ cart, deleteProductToCart, setShowShoppingCart }) {
  const handleClick = (e, product) => {
    e.preventDefault();
    deleteProductToCart(product);
  };

  const handleCloseShoppingCart = ({ keyCode, target }) => {
    const keyName = keyCode;
    const keyCodeEsc = 27;
    const { id } = target;
    const pressEsc = keyName === keyCodeEsc;
    if (id === 'shopping-cart-container' || id === 'close-shopping-cart' || pressEsc) {
      setShowShoppingCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleCloseShoppingCart);
    return () => document.removeEventListener('keydown', handleCloseShoppingCart);
  });

  return ReactDOM.createPortal(
    <div
      className={styles.container}
      id="shopping-cart-container"
      onClick={handleCloseShoppingCart}
      onKeyPress={e => handleCloseShoppingCart(e)}
      tabIndex={1}
    >
      <div className={styles.shoppingCart}>
        <div className={styles.headerCart}>
          <button type="button" id="close-shopping-cart" className={styles.buttonClose} onClick={handleCloseShoppingCart}>
            <FontAwesomeIcon icon={faTimes} className={styles.iconClose} />
          </button>
        </div>
        <div className={styles.products}>
          {cart.map(product => (
            <ProductCart key={product.uuid} {...product} onClick={handleClick} />
          ))}
          {cart.length === 0 && <p className={styles.cartEmpty}>El carrito esta vacio...</p>}
        </div>
        <div className={styles.totalPrice}>
          <span>Total: ${cart.reduce((sum, product) => sum + product.price, 0)}</span>
        </div>
      </div>
    </div>,
    containerShoppingCart
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
