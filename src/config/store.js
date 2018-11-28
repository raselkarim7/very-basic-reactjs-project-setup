import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'; 

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
