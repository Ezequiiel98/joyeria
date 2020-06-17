import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './index.module.scss';

export default function ButtonClose({ onClick, id, small }) {
  return (
    <button
      type="button"
      className={small ? styles.buttonSmall : styles.buttonBig}
      onClick={onClick}
      id={id && id}
    >
      <FontAwesomeIcon icon={faTimes} className={styles.iconClose} />
    </button>
  );
}

ButtonClose.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  small: PropTypes.bool
};
