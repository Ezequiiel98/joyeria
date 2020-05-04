import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

export default function MenuItem({ textItem, icon, urlProfile, column }) {
  return (
    <li className={column ? styles.itemMenuColumn : styles.itemMenu}>
      <a target={icon && 'blank'} href={icon ? urlProfile : '#null'} className={styles.linkMenu}>
        {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />} {textItem}
      </a>
    </li>
  );
}
