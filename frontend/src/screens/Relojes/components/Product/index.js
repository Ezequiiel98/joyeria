import React from 'react';

import styles from './index.module.scss';
import Stars from './components/Stars';
import Button from './components/Button';
import Imagen from '../../../../components/Imagen';

export default function Product({ id, imgURL, title, stars, price }) {
  const handleClick = e => console.log(e.target.id);
  return (
    <div className={styles.product}>
      <Imagen src={imgURL} alt={title} className={styles.imgProduct} />      
      <div className={styles.description}>
        <h4 className={styles.descriptionTitle}>{title}</h4>
        <Stars stars={stars} />
        <p className={styles.price}> {price} </p>
        <Button onClick={handleClick} id={id} />
      </div>
    </div>
  );
}
