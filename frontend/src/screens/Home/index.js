import React from 'react';

import Hero from '../../components/Hero';
import Title from '../../components/Title';

import imgAboutUs from './assets/img/aboutUs.jpg';
import imgHero1 from './assets/img/hero1.jpg';
import imgHero2 from './assets/img/hero2.jpg';
import AboutUs from './components/AboutUs';
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
      <Title title='sobre nosotros' />
      <Hero
        image={imgHero2}
        title="Diseño de anillos de casamiento"
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
        reverse
      />
    </>
  );
}
