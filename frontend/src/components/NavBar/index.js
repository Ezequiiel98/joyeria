import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import ShoppingCart from '../ShoppingCart';

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

  return (
    <nav className={styles.nav}>
      {/*       <ShoppingCart />
       */}{' '}
      <div className={styles.containerNav}>
        <div className={styles.containerButtons}>
          <MenuBurger showMenu={showMenu} setShowMenu={setShowMenu} />
          <button type="button" className={styles.buttonCart}>
            <FontAwesomeIcon icon={faCartPlus} className={styles.iconCart} />
            <span className={styles.price}>$505315</span>
          </button>
        </div>
        {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
      </div>
    </nav>
  );
}
