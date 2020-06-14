import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

export default function MenuItem({
  textItem,
  icon,
  internalPath,
  externalPath,
  column,
  showMenu,
  setShowMenu
}) {
  return (
    <li className={column ? styles.itemMenuColumn : styles.itemMenu}>
      {externalPath ? (
        <a target={icon && 'blank'} href={externalPath} className={styles.linkMenu}>
          {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />} {textItem}
        </a>
      ) : (
        <Link
          to={internalPath}
          className={styles.linkMenu}
	      /* onClick={() => setShowMenu && setShowMenu(!showMenu)}*/
        >
          {textItem}
        </Link>
      )}
    </li>
  );
}
