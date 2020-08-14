import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addProductToCart } from '../../redux/actions';

import styles from './index.module.scss';
import Stars from './components/Stars';
import Button from './components/Button';

import Imagen from '../Imagen';

function Product({ id, imgURL, title, stars, price, category, addProductToCart }) {
  const handleClick = () => {
    const product = { id, imgURL, title, price, category, quantity: 1 };

    addProductToCart(product);
  };

  return (
    <div className={styles.product}>
      <Imagen className={styles.imgProduct} src={imgURL} alt={title} medium /> 
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

Product.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  category: PropTypes.string,
  id: PropTypes.number.isRequired,
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  quantity: PropTypes.number
}
