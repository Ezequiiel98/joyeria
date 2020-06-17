import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { deleteProductToCart } from '../../redux/actions';

import Products from './components/Products';
import ButtonClose from './components/ButtonClose';
import TotalPrice from './components/TotalPrice';
import styles from './index.module.scss';

const containerShoppingCart = document.getElementById('shopping-cart');

function ShoppingCart({ cart, deleteProduct, setShowShoppingCart }) {
  const shoppingCartRef = useRef(null);

  const handleCloseShoppingCart = ({ keyCode, target }) => {
    const keyCodeEsc = 27;
    const { id } = target;
    const pressedEsc = keyCode === keyCodeEsc;
    const delay = 700;

    if (id === 'shopping-cart-container' || id === 'close-shopping-cart' || pressedEsc) {
      shoppingCartRef.current.classList.add(styles.hiddenShoppingCart);

      setTimeout(() => {
        setShowShoppingCart(false);
      }, delay);
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
      onKeyPress={handleCloseShoppingCart}
    >
      <div ref={shoppingCartRef} className={styles.shoppingCart}>
        <div className={styles.headerCart}>
          <ButtonClose onClick={handleCloseShoppingCart} id="close-shopping-cart" />
        </div>
        <Products products={cart} deleteProduct={deleteProduct} />
	<TotalPrice products={cart} text="Total: " className={styles.totalPrice} />
      </div>
    </div>,
    containerShoppingCart
  );
}

const mapStateToProps = state => ({
  cart: state
});

const mapDispatchToProps = dispatch => ({
  deleteProduct(product) {
    dispatch(deleteProductToCart(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
