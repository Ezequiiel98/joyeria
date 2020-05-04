import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../screens/Home';
import Anillos from '../../screens/Anillos';
import Relojes from '../../screens/Relojes';
import Alhajas from '../../screens/Alhajas';
import Contacto from '../../screens/Contacto';

function Main() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/anillos" component={Anillos} />
        <Route path="/relojes" component={Relojes} />
        <Route path="/alhajas" component={Alhajas} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </>
  );
}

export default Main;
