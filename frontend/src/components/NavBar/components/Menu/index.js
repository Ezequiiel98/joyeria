import React from 'react';

import styles from './index.module.scss';
import MenuItem from './components/MenuItem';
import { MENU_ITEMS } from './constants/menuItems';

export default function Menu() {
  return (
    <ul className={styles.menu}>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.id} text={item.textItem} />
      ))}
    </ul>
  );
}
