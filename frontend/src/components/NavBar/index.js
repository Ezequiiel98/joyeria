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
            <span className={styles.burgerIcon} />
            <span className={styles.burgerIcon} />
            <span className={styles.burgerIcon} />
          </div>
        </div>
        <Menu />
      </div>
    </nav>
  );
}
