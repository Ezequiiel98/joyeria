import React from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from '../../redux/actions';

import styles from './index.module.scss';
import Stars from './components/Stars';
import Button from './components/Button';

function Product({ id, imgURL, title, stars, price, category, addProductToCart }) {
  const handleClick = () => {
    const product = { id, imgURL, title, price, category, quantity: 1 };

    addProductToCart(product);
  };
  return (
    <div className={styles.product}>
      <div className={styles.imgProduct}>
        <img src={imgURL} alt="" />
      </div>
      <div className={styles.description}>
        <h4 className={styles.descriptionTitle}>{title}</h4>
        <Stars stars={stars} />
        <p className={styles.price}>${price} </p>
        <Button onClick={handleClick}  />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  addProductToCart(product) {
    dispatch(addProductToCart(product));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
