import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../screens/Home';
import Anillos from '../../screens/Anillos';
import Relojes from '../../screens/Relojes';
import Alhajas from '../../screens/Alhajas';
import Contacto from '../../screens/Contacto';
import Anillo from '../../screens/Anillo';
import Reloj from '../../screens/Reloj';
import Alhaja from '../../screens/Alhaja';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/anillos" component={Anillos} />
      <Route exact path="/relojes" component={Relojes} />
      <Route exact path="/alhajas" component={Alhajas} />
      <Route exact path="/contacto" component={Contacto} />
      <Route path="/anillos/:id" component={Anillo} />
      <Route exact path="/relojes/:id" component={Reloj} />
      <Route exact path="/alhajas/:id" component={Alhaja} />
    </Switch>
  );
}

export default Main;
