import React from 'react';

import styles from './index.module.scss';

export default function MenuItem({ text, column }) {
  return (
    <li className={ column ? styles.itemMenuColumn : styles.itemMenu}>
      <a href="#null" className={styles.linkMenu}>
        {text}
      </a>
    </li>
  );
}
