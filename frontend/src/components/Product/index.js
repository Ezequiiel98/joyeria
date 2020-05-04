import React from 'react';

import styles from './index.module.scss';
import Stars from './components/Stars';
import Button from './components/Button';

export default function Product({ id, imgURL, title, stars, price }) {
  const handleClick = e => console.log(e.target.id);
  return (
    <div className={styles.product}>
      <div className={styles.imgProduct}>
        <img src={imgURL} alt="" />
      </div>
      <div className={styles.description}>
        <h4 className={styles.descriptionTitle}>{title}</h4>
        <Stars stars={stars} />
        <p className={styles.price}> {price} </p>
        <Button onClick={handleClick} id={id} />
      </div>
    </div>
  );
}
