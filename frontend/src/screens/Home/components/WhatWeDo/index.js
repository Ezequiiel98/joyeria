import React from 'react';

import Title from '../../../../components/Title';
import Card from '../Card';
import styles from './index.module.scss';

export default function WhatWeDo({ urlImg }) {
  return (
    <div className={styles.whatWeDo}>
      <Title title="Lo que hacemos" big />
      <div className={styles.container}>
       <Card urlImg={urlImg} />       
       <Card urlImg={urlImg} />       
       <Card urlImg={urlImg} />       

      </div>
    </div>
  );
}
