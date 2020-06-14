import React, { useState, useEffect } from 'react';

import ShoppingCart from '../ShoppingCart';

import ButtonShoppingCart from './components/ButtonShoppingCart';
import Menu from './components/Menu';
import MenuBurger from './components/MenuBurger';
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

  const [showShoppingCart, setShowShoppingCart] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.containerNav}>
        <div className={styles.containerButtons}>
          <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
          <ButtonShoppingCart setShowShoppingCart={setShowShoppingCart} showShoppingCart={showShoppingCart} />
        </div>
        {showShoppingCart && <ShoppingCart setShowShoppingCart={setShowShoppingCart} />}
       {showMenu && <Menu />}
      </div>
    </nav>
  );
}
