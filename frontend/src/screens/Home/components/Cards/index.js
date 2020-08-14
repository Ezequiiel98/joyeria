import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title';

import Card from './components/Card';
import styles from './index.module.scss';

export default function WhatWeDo({ CARDS, title }) {
  return (
    <div className={styles.cards}>
      <Title title={title} big />
      <div className={styles.container}>
        {CARDS.map(card => (
          <Card key={card.key} {...card} />
        ))}
      </div>
    </div>
  );
}

WhatWeDo.propTypes = {
  CARDS: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired
}
