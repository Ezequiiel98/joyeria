import React from 'react';

import Home from '../../screens/Home';
import NavBar from '../NavBar';
import Relojes from '../../screens/Relojes';
import Contacto from '../../screens/Contacto';
import Footer from '../Footer';

import styles from './index.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Relojes />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
