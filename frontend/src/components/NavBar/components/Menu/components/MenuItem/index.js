import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

export default function MenuItem({ textItem, icon, urlProfile, column }) {
  return (
    <li className={column ? styles.itemMenuColumn : styles.itemMenu}>
      <a href={icon ? urlProfile : '#null'} className={styles.linkMenu}>
        {icon && <FontAwesomeIcon icon={icon} />} {textItem}
      </a>
    </li>
  );
}
