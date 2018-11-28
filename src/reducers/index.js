import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; /* comment this, if you don't use redux-from */

const rootReducer = combineReducers({
  form: formReducer, /* comment this, if you don't use redux-from */
});

export default rootReducer;
