import React from 'react';

import styles from './index.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Joyeria gold</h1>
          <p>Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit</p>
        </div>
      </div>
    </div>
  );
}
