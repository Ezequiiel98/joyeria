import React from 'react';

import styles from './index.module.scss';

export default function Button({ id, onClick }) {
  return (
    <button className={styles.button} id={id} type="button" onClick={() => console.log('hola')}>
      <a href="#" >
        Ver más
      </a>
    </button>
  );
}
