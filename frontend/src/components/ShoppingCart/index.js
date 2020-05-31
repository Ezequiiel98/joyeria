import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';

import { deleteProductToCart } from '../../redux/actions';

import styles from './index.module.scss';

function ShoppingCart({ cart, deleteProductToCart }) {
  const handleClick = (e, product) => {
    e.preventDefault();
    deleteProductToCart(product);
  };

  return (
    <div className={styles.shoppingCart}>
      {cart.map(product => (
        <div key={product.uuid} className={styles.product}>
          <div className={styles.containerImg}>
            <img className={styles.img} src={product.imgURL} />
          </div>
          <span>{product.title}</span>
          <span className="text-right">${product.price}</span>
          <button className={styles.buttonDelete} type="button" onClick={e => handleClick(e, product)}>
            <FontAwesomeIcon className={styles.icon} icon={faTrashAlt} />
          </button>
        </div>
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
