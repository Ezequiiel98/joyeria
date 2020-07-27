import React from 'react';

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

  return (
    <div className={styles.product}>
      <div className={styles.containerImg}>
        <img className={styles.img} src={imgURL} alt={`Imagen de ${title}`} />
      </div>
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
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
}
