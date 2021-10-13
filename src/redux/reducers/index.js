import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import nav from 'src/navigation/reducer';
import count from './count';
import error from './error';

const reducer = combineReducers({
  form,
  nav,
  count,
  error,
});

export default reducer;
