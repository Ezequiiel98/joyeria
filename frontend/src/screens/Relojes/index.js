import React from 'react';

import Title from '../../components/Title';

import Product from './components/Product';
import Reloj from './assets/img/reloj-11.jpg';
import styles from './index.module.scss';

export default function Relojes() {
  return (
    <>
      <Title title="Relojes" />
      <Product imgUrl={Reloj} />
      <Product imgUrl={Reloj} />
      <Product imgUrl={Reloj} />
    </>
  );
}
