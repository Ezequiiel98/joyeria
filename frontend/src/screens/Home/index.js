import React from 'react';

import Hero from '../../components/Hero';

import imgAboutUs from './assets/img/aboutUs.jpg';
import imgHero1 from './assets/img/hero1.jpg';
import imgHero2 from './assets/img/hero2.jpg';
import { CARDS_IMG, CARDS_ICON } from './constants/cards';
import AboutUs from './components/AboutUs';
import Cards from './components/Cards';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <Hero
        image={imgHero1}
        title="Joyeria gold"
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
      />
      <AboutUs urlImg={imgAboutUs} />
      <Cards CARDS={CARDS_IMG} title="Lo que hacemos" />
      <Hero
        image={imgHero2}
        title="Diseño de anillos de casamiento"
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
        reverse
      />
      <Cards CARDS={CARDS_ICON} title="Como lo hacemos" />
    </>
  );
}
