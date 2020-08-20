import React from 'react';

import Title from 'components/Title';
import Hero from 'components/Hero';
import Head from 'components/Head';
import Product from 'components/Product';

import { CLOCKS } from './constants/clocks';
import imgHero from './assets/img/reloj-4.jpg';

export default function Relojes() {
  return (
    <>
      <Head title="Relojes" />
      <Hero
        image={imgHero}
        title="Nuestros Relojes"
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
      />
      <Title title="Relojes" />
      {CLOCKS.map(clock => (
        <Product key={clock.id} {...clock} />
      ))}
    </>
  );
}
