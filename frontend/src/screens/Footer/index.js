import React from 'react';

import Menu from '../../components/NavBar/components/Menu';

import styles from './index.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h4>Newsletter</h4>
        <p>asdsadasdsadas</p>
        <p>asdsadasdsadas</p>
        <p>asdsadasdsadas</p>
      </div>
    
      <div className="">
        <h4>Menu</h4>
        <Menu column />
      </div>
      <div className="">
        <h4>Redes</h4>
        <Menu column socialNetwork />
      </div>
    </div>
  );
}
