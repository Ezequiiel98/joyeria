import React from 'react';

import styles from './index.module.scss';

export default function MenuItem({ text }) {
  return (
    <li className={styles.itemMenu}>
      <a href="#null" className={styles.linkMenu}>
        {text}
      </a>
    </li>
  );
}
