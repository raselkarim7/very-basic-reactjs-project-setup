import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../config/store';
import { MainRoute } from '../routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRoute />
      </Provider>
    );
  }
}

export default App;
