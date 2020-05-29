import React, { useState, useEffect } from 'react';

import Menu from './components/Menu';
import MenuBurger from './components/MenuBurger';
import ShoppingCart from '../ShoppingCart'
import styles from './index.module.scss';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const showHideMenu = () => {
      const minWidth = 768;
      const visibilityMenu = window.innerWidth >= minWidth;
      setShowMenu(visibilityMenu);
    };
  
    showHideMenu();
    window.addEventListener('resize', showHideMenu);
    return () => window.removeEventListener('resize', showHideMenu);
  }, []);

  return (
    <nav className={styles.nav}>
      <ShoppingCart />
      <div className={styles.containerNav}>
        <div className={styles.logo}>
          <p>Logo</p>
          <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        {showMenu && <Menu />}
      </div>
    </nav>
  );
}
