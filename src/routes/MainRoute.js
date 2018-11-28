import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home';

const MainRoute = () => (
  <main>
    <Switch>

          <Route path="/" component={Home} /> 
    </Switch>
  </main>
);

export { MainRoute };
