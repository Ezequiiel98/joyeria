import React from 'react';
import Title from 'components/Title';
import Hero from 'components/Hero';
import Head from 'components/Head';
import ProductList from 'components/ProductList';

import { ALHAJAS } from './constants/alhajas';
import imgHero from './assets/img/alhajas/alhaja-6.jpg';

export default function Alhajas() {
  return (
    <>
      <Head title="Alhajas" />
      <Hero
        image={imgHero}
        title="Nuestras Alhajas"
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
      />
      <Title title="Alhajas" />
      <ProductList listProducts={ALHAJAS} />
    </>
  );
}
