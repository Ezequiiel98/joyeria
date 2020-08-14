import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({ text }) {
  return (
    <button className={styles.button} type="submit" disabled>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
