import React from 'react';
import styles from './index.module.scss'

export default function ItemFooter({ title, children }) {
  return (
    <div className={styles.box}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}
