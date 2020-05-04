import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

export default function Stars({ stars }) {
  const STARS = [1, 2, 3, 4, 5];
  return (
    <div className={styles[`stars${stars}`]}>
      {STARS.map(star => (
        <FontAwesomeIcon key={star} className={styles.icon} icon={faStar} />
      ))}
    </div>
  );
}
