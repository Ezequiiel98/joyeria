import React from 'react';

import styles from './index.module.scss';

export default function Button({ text }) {
  return (
    <button className={styles.button} type="submit" disabled>
      {text}
    </button>
  );
}
