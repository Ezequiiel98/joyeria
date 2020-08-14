import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Title({ title, big }) {
  return big ? <h2 className={styles.title}>{title}</h2> : <h3 className={styles.title}>{title}</h3>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  big: PropTypes.bool
}
