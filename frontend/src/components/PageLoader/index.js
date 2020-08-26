import React from 'react';

import ImagenLoader from '../Imagen/components/ImagenLoader';

import styles from './index.module.scss';

export default function PageLoader() {
  const SIZE = window.innerWidth;
  
  return (
    <div className={styles.loader}>
      <ImagenLoader SIZE={SIZE} />
    </div>
  );
} 
