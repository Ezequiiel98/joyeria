import React from 'react';

import Home from '../../screens/Home';
import NavBar from '../NavBar';
import Relojes from '../../screens/Relojes';
import Contacto from '../../screens/Contacto';
import Footer from '../Footer';
import Anillos from '../../screens/Anillos';
import Alhajas from '../../screens/Alhajas';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Relojes />
      <Contacto />
      <Alhajas />
      <Anillos />
      <Footer />
    </>
  );
}

export default App;
