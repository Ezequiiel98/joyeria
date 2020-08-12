import React from 'react';
import PropTypes from 'prop-types';

import ContentLoader from 'react-content-loader';

import styles from './index.module.scss';

export default function ImagenLoader({ SIZE }) {

  return (
    <ContentLoader 
      speed={2}
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE} `}
      backgroundColor="#cfcfcf"
      foregroundColor="#ecebeb"
      className={styles.loader}
    >
      <rect x="0" y="0" rx="0" ry="0" width={SIZE} height={SIZE} />
    </ContentLoader>
  );
}

ImagenLoader.propTypes = {
  SIZE: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

