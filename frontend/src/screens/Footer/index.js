import React from 'react';

import Menu from '../../components/NavBar/components/Menu';

import Newsletter from './components/Newsletter';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <Newsletter />
      </div>

      <div className={styles.box}>
        <h4>Menu</h4>
        <Menu column />
      </div>
      <div className={styles.box}>
        <h4>Redes</h4>
        <Menu column socialNetwork />
      </div>
    </div>
  );
}
