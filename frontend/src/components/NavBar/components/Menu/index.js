import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';
import MenuItem from './components/MenuItem';
import { NAV_MENU, SOCIAL_MENU } from './constants/menuItems';

export default function Menu({ column, socialNetwork }) {
  const MENU_ITEMS = socialNetwork ? SOCIAL_MENU : NAV_MENU;
  return (
    <ul className={column ? styles.menuColumn : styles.menu}>
      {MENU_ITEMS.map(item => (
	 	      <MenuItem key={item.key} {...item} column={column} />
      ))}
    </ul>
  );
}

Menu.propTypes = {
  column: PropTypes.bool,
  socialNetwork: PropTypes.bool
}
