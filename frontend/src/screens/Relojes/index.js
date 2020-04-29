import React from 'react';

import Title from '../../components/Title';

import Reloj from './assets/img/reloj-11.jpg';
import styles from './index.module.scss';

export default function Relojes() {
  return (
    <>
      <Title title="Relojes" />
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.imgProduct}>
            <img src={Reloj} alt="" />
          </div>
          <div className={styles.description}>
            <h4 className={styles.descriptionTitle}>Aniffllos</h4>
            <div className={styles.starts}>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p className={styles.price}> $50 </p>
            <div className={styles.button}>
              <a href="#">Ver mas</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
