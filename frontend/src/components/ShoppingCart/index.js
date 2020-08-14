import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProductToCart, addUnitToCart, removeUnitToCart } from 'redux/actions';

import Products from './components/Products';
import ButtonClose from './components/ButtonClose';
import TotalPrice from './components/TotalPrice';
import styles from './index.module.scss';

const containerShoppingCart = document.getElementById('shopping-cart');

function ShoppingCart({ cart, deleteProductToCart, setShowShoppingCart, addUnitToCart, removeUnitToCart }) {
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
        <Products products={cart} deleteProductToCart={deleteProductToCart} addUnitToCart={addUnitToCart} removeUnitToCart={removeUnitToCart} />
        <TotalPrice products={cart} text="Total: " className={styles.totalPrice} />
      </div>
    </div>,
    containerShoppingCart
  );
}

const mapStateToProps = state => ({
  cart: state
});

const mapDispatchToProps = {
  deleteProductToCart,
  addUnitToCart,
  removeUnitToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

ShoppingCart.propTypes = {
  addUnitToCart: PropTypes.func.isRequired,
  cart: PropTypes.instanceOf(Array).isRequired,
  deleteProductToCart: PropTypes.func.isRequired,
  setShowShoppingCart: PropTypes.func.isRequired,
  removeUnitToCart: PropTypes.func.isRequired
}
