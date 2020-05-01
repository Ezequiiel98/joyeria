import React from 'react';

import Title from '../../components/Title';

import Product from './components/Product';
import CLOCKS from './constants/clocks';
import styles from './index.module.scss';

export default function Relojes() {
  return (
    <>
      <Title title="Relojes" />
      {CLOCKS.map(clock => (
        <Product key={clock.id} {...clock} />
      ))}
    </>
  );
}
