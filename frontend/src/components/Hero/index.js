import React from 'react';

import styles from './index.module.scss';

export default function Hero({ image, title, description }) {
  const backgroundImage = { style: { backgroundImage: `url(${image}` } };

  return (
    <div className={styles.hero} {...backgroundImage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
