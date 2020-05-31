import React from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from '../../redux/actions';

import styles from './index.module.scss';
import Stars from './components/Stars';
import Button from './components/Button';

function Product({ id, imgURL, title, stars, price, category, addProductToCart }) {
  const handleClick = () => {
    const uuid = new Date().getTime() + Math.random();
    const product = { id, uuid, imgURL, title, price, category };
    console.log(product);
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
        <Button onClick={handleClick} id={id} category={category} />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addProductToCart(product) {
    dispatch(addProductToCart(product));
  }
});
export default connect('', mapDispatchToProps)(Product);
