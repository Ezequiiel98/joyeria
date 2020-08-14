import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';

export default function MenuItem({
  textItem,
  icon,
  internalPath,
  externalPath,
  column
}) {
  return (
    <li className={column ? styles.itemMenuColumn : styles.itemMenu}>
      {externalPath && ( 
        <a target={icon && 'blank'} href={externalPath} className={styles.linkMenu}>
          {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />} {textItem}
        </a>)}
       
      { !externalPath && <Link to={internalPath} className={styles.linkMenu} >{textItem}</Link>}
    </li>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.instanceOf(Object),
  textItem: PropTypes.string,
  internalPath: PropTypes.string,
  externalPath: PropTypes.string,
  column: PropTypes.bool
}

