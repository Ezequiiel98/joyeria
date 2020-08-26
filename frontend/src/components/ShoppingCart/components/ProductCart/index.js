import React from 'react';
import PropTypes from 'prop-types';
import Imagen from 'components/Imagen';
import usePriceFormater from 'hooks/priceFormater';

import ButtonClose from '../ButtonClose';

import styles from './index.module.scss';

export default function ProductCart({
  id,
  imgURL,
  title,
  price,
  category,
  quantity,
  onDeleteProduct,
  onAddUnit,
  onRemoveUnit
}) {
  const product = { id, imgURL, title, price, category };
  const priceFormated = usePriceFormater(price);

  return (
    <div className={styles.product}>
      <Imagen className={styles.containerImg} src={imgURL} alt={`Imagen de ${title}`} />
      <div className={styles.containerInfoProduct}>
        <div className={styles.headInfo}>
          <p className={styles.title}>{title}</p>
          <ButtonClose onClick={() => onDeleteProduct(product)} small />
        </div>
        <div className={styles.containerQuantity}>
          {' '}
          <button className={styles.buttonQuantity} type="button" onClick={() => onAddUnit(product)}>
            +
          </button>{' '}
          <span className={styles.quantity}> {quantity} </span>
          <button className={styles.buttonQuantity} type="button" onClick={() => onRemoveUnit(product)}>
            -
          </button>
        </div>
        <p className={styles.price}>{priceFormated}</p>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  category: PropTypes.string,
  id: PropTypes.number.isRequired,
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  onDeleteProduct: PropTypes.func.isRequired,
  onAddUnit: PropTypes.func.isRequired,
  onRemoveUnit: PropTypes.func.isRequired
};
