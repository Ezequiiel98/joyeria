import React from 'react';

import Title from 'components/Title';
import Hero from 'components/Hero';
import Product from 'components/Product';

import { ALHAJAS } from './constants/alhajas';
import imgHero from './assets/img/alhajas/alhaja-5.jpg';

export default function Alhajas() {
  return (
    <>
      <Hero
        image={imgHero}
        title="Nuestros Alhajas"
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
      />
      <Title title="Alhajas" />
      {ALHAJAS.map(alhaja => (
        <Product key={alhaja.id} {...alhaja} />
      ))}
    </>
  );
}
