import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <span>Agregar al carrito</span>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
