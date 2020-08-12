import React from 'react';

import ImagenLoader from '../Imagen/components/ImagenLoader';

import styles from './index.module.scss';

export default function PageLoader(){
  return (
    <div className={styles.loader}> 
      <ImagenLoader SIZE="1500" />
    </div>
  );
}

