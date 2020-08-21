import React from 'react';
import PropTypes from 'prop-types';

import Imagen from 'components/Imagen';

import styles from './index.module.scss';

export default function Hero({ image, title, description, reverse }) {
  return (
    <div className={styles.hero} >
      <Imagen src={image} big />
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
