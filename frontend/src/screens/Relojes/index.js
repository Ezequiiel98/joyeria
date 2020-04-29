import React from 'react';

import Title from '../../components/Title';

import Reloj from './assets/img/reloj-11.jpg';
import styles from './index.module.scss';

export default function Relojes() {
  return (
    <>
      <Title tile="Relojes" />
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.imgProduct}>
            <img src={Reloj} alt="" />
          </div>
          <div className={styles.description}>
            
          </div>
        </div>
      </div>
    </>
  );
}
