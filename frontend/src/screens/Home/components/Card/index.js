import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faGem } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import styles from './index.module.scss';

export default function Card({ urlImg, icon, title, description }) {
  return (
    <div className={icon ? styles.cardIcon : styles.card}>
      <div className={icon ? styles.containerIcon : styles.containerImg}>
        {icon ? <FontAwesomeIcon icon={faCircle} /> : <img src={urlImg} alt="" />}
      </div>
      <div className={styles.containerDesc}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
