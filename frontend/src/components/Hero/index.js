import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Hero({ image, title, description, reverse }) {
  const backgroundImage = { style: { backgroundImage: `url(${image}` } };
  
  return (
    <div className={styles.hero} {...backgroundImage}>
      <div className={reverse ? styles.containerReverse : styles.container}>
        <div className={reverse ? styles.contentReverse : styles.content}>
          <h1 className={reverse ? styles.titleReverse : styles.title}>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reverse: PropTypes.bool
}
