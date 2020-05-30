import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export default function Button({ id, onClick, pathProduct }) {
  return (
    <a className={styles.button} onClick={onClick}>
      <span>Agregar al carrito</span>
    </a>
  );
}
