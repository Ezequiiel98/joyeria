import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../screens/Home';
import Anillos from '../../screens/Anillos';
import Relojes from '../../screens/Relojes';
import Alhajas from '../../screens/Alhajas';
import Contacto from '../../screens/Contacto';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/anillos" component={Anillos} />
      <Route exact path="/relojes" component={Relojes} />
      <Route exact path="/alhajas" component={Alhajas} />
      <Route exact path="/contacto" component={Contacto} />
      <Route path="/" render={()=><Redirect to='/' />} />
    </Switch>
  );
}

export default Main;
