import React from 'react';

import styles from './index.module.scss';

export default function Button({ id, onClick }) {
  return (
    <button className={styles.button} id={id} type="button" onClick={onClick}>
      <a href="#" >
        Ver más
      </a>
    </button>
  );
}
