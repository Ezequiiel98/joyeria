import React, { useState } from 'react';

import ImagenLoader from './components/ImagenLoader';

import styles from './index.module.scss';

export default function Imagen({ src, alt, className ,...props }) {
  const [loading, setLoading] = useState(true);

  const handleL = () => {
      setLoading(false);
  };

  return (
    <div className={className}>
      {loading && <ImagenLoader className={styles.loader} />}
      <img src={src} alt={alt} onLoad={handleL} className={styles.img} />
    </div>
  );
}
