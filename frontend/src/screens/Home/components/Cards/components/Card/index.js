import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

export default function Card({ urlImg, icon, title, description }) {
  return (
    <div className={icon ? styles.cardIcon : styles.card}>
      <div className={icon ? styles.containerIcon : styles.containerImg}>
        {icon ? <FontAwesomeIcon icon={icon} /> : <img src={urlImg} alt="" />}
      </div>
      <div className={styles.containerDesc}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
