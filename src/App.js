import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import * as ROUTES from './pages/routes';


import HomePage from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar routes={ROUTES} />
        <Switch>
          <Route exact={true} path={ROUTES.HOME.link} component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
