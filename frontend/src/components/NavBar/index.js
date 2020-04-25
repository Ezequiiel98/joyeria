import React from 'react';

import Menu from './components/Menu';
import styles from './index.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.containerNav}>
        <div className={styles.logo}>
          <p>Logo</p>

          <div className={styles.burgerMenu}>
            <i className="fas fa-bars" />
          </div>
        </div>
        <Menu />
      </div>
    </nav>
  );
}
