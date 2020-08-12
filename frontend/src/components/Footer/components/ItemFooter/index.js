import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function ItemFooter({ title, titleCenter, children }) {
  return (
    <div className={titleCenter ? styles.boxTitleCenter : styles.box}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

ItemFooter.propTypes = {
  title: PropTypes.string.isRequired,
  titleCenter: PropTypes.bool
};
