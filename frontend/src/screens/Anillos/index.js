import React from 'react';

import Title from '../../components/Title';
import Hero from '../../components/Hero';
import Product from '../../components/Product';

import { RINGS } from './constants/rings';
import imgHero from './assets/img/rings/ring-4.jpg';

export default function Anillos() {
  return (
    <>
      <Hero
        image={imgHero}
        title="Nuestros Anillos"
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
      />
      <Title title="Anillos" />
      {RINGS.map(ring => (
        <Product key={ring.id} {...ring} />
      ))}
    </>
  );
}
