import React from 'react';

import Title from '../../components/Title';
import Hero from '../../components/Hero';
import Product from '../../components/Product';

import { RiNGS } from './constants/rings';
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
      {RiNGS.map(clock => (
        <Product key={clock.id} {...clock} />
      ))}
    </>
  );
}
