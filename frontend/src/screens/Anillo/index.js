import React from 'react';

import { RINGS } from '../Anillos/constants/rings';
import styles from './index.module.scss'; 
import Title from '../../components/Title'

export default function Anillo({ match }) {
  const { imgURL, title, description, price } = RINGS[match.params.id];
  return (
    <div className={styles.product}>
      <img src={imgURL} alt="" />
      <div className={styles.container}>
        <Title title={title} big />
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>{price}</span>
        <button className={styles.button} type="button" ><span>Comprar</span></button>
      </div>
    </div>
  );
}
