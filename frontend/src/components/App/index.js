import React from 'react';

import Home from '../../screens/Home';
import NavBar from '../NavBar';
import Relojes from '../../screens/Relojes';

import styles from './index.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Relojes />
    </>
  );
}

export default App;
