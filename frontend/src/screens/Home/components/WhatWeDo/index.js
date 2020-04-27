import React from 'react';

import Title from '../../../../components/Title';
import Card from '../Card';

import { CARDS } from './constants/cards';
import styles from './index.module.scss';

export default function WhatWeDo() {
  return (
    <div className={styles.whatWeDo}>
      <Title title="Lo que hacemos" big />
      <div className={styles.container}>
        {CARDS.map(card => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
}
