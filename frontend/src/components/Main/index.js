import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('screens/Home'));
const Anillos = lazy(() => import('screens/Anillos'));
const Relojes = lazy(() => import('screens/Relojes'));
const Alhajas = lazy(() => import('screens/Alhajas'));
const Contacto = lazy(() => import('screens/Contacto'));

function Main() {
  return (
    <main>
      <Suspense
        fallback={
          <div style={{ minHeight: '100vh' }}>
            <span>Cargando...</span>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/anillos" component={Anillos} />
          <Route exact path="/relojes" component={Relojes} />
          <Route exact path="/alhajas" component={Alhajas} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>
    </main>
  );
}

export default Main;
