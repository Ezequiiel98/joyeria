import React from 'react';

import ButtonClose from '../ButtonClose';

import styles from './index.module.scss';

export default function ProductCart({ id, uuid, imgURL, title, price, category, quantity, onClick }) {
  const product = { id, uuid, imgURL, title, price, category };

  return (
    <div className={styles.product}>
      <div className={styles.containerImg}>
        <img className={styles.img} src={imgURL} alt={`Imagen de ${title}`} />
      </div>
      <div className={styles.containerInfoProduct}>
        <div className={styles.headInfo}>
          <p className={styles.title}>{title}</p>
          <ButtonClose onClick={e => onClick(e, product)} small />
        </div>
        <p className={styles.quantity}>Cant: {quantity} </p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
}
