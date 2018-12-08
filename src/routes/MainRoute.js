import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import PaginationTest from '../components/PaginationTest'
import NestedStateTest from '../components/NestedStateTest'

const MainRoute = () => (
  <main>
    <Switch>
        <Route path="/nestedstate" component={NestedStateTest} />
        <Route path="/paginationtest" component={PaginationTest} />
        <Route path="/" component={Home} />

    </Switch>
  </main>
);

export { MainRoute };
