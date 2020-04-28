import React from 'react';

import Menu from '../../components/NavBar/components/Menu';

import styles from './index.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <h4>NEWSLETTER</h4>
        <p>
          No te pierdas todas nuestras novedades y los mejores descuentos
          <form>
            <input placeholder="Email..." type="text" />
            <input type="submit" value="Enviar" />
          </form>
        </p>
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
