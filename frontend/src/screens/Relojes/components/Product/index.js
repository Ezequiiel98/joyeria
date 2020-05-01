import React from 'react';

import styles from './index.module.scss';
import Stars from './components/Stars';

export default function Product({ imgURL, title, starts, price }) {
  return (
    <div className={styles.product}>
      <div className={styles.imgProduct}>
        <img src={imgURL} alt="" />
      </div>
      <div className={styles.description}>
        <h4 className={styles.descriptionTitle}>{title}</h4>
        <Stars />
        <p className={styles.price}> $50 </p>
        <div className={styles.button}>
          <a href="#">Ver más</a>
        </div>
      </div>
    </div>
  );
}
