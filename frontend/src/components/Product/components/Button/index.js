import React from 'react';

import styles from './index.module.scss';

export default function Button({ id, onClick, pathProduct }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <span>Agregar al carrito</span>
    </button>
  );
}
