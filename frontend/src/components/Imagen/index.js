import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ImagenLoader from './components/ImagenLoader';

import styles from './index.module.scss';

export default function Imagen({ src, alt, className, big, medium, ...props }) {
  const [isLoading, setLoading] = useState(true);
  const handleLoad = () => setLoading(false);
  const customStyle = { style: { position: 'relative' } };
  const SIZE = big ? 1200 : medium ? 800 : 400;

  return (
    <div className={className} {...customStyle}>
      {isLoading && <ImagenLoader className={styles.loader} SIZE={SIZE} />}
      <img src={src} alt={alt} onLoad={handleLoad} className={styles.img} />
    </div>
  );
}

Imagen.propTypes = {
  alt: PropTypes.string.isRequired,
  big: PropTypes.bool,
  className: PropTypes.string.isRequired,
  medium: PropTypes.bool,
  src: PropTypes.string.isRequired
};
