import React from 'react';

import Footer from '../Footer';
import NavBar from '../NavBar';
import ShoppingCard from '../ShoppingCart';
import Header from '../Header';
import Main from '../Main';

function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
       
      <Main />
      <Footer />
    </>
  );
}

export default App;
