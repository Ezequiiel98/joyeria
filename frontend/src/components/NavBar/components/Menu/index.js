import React from 'react';

import styles from './index.module.scss';
import MenuItem from './components/MenuItem';
import { MENU_ITEMS as NAV_MENU } from './constants/menuItems';

export default function Menu({ column, redes }) {
  const SOCIAL_MENU = NAV_MENU;
  const MENU_ITEMS = redes ? SOCIAL_MENU : NAV_MENU;
  return (
    <ul className={column ? styles.menuColumn : styles.menu}>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.id} text={item.textItem} column={column} />
      ))}
    </ul>
  );
}
