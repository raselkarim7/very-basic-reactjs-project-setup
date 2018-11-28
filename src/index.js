import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

//import 'react-widgets/dist/css/react-widgets.css';
import styles from './style.css';

import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  
  document.getElementById('app')
);
