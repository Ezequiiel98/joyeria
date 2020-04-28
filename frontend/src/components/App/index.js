import React from 'react';

import NavBar from '../NavBar';
import Hero from '../Hero';
import Footer from '../../screens/Footer';
import clock from './9.jpg';
import styles from './index.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <Hero
        image={clock}
        description="Lorem ipsum t amet consectetur adipisicinelit amet consectetur adipisicinelit"
        title="Joyeria gold"
        reverse
      />
      <Footer />
    </>
  );
}

export default App;
