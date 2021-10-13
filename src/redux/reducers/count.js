import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

const initialState = {
  count: 0,
};

export default createReducer({
  [actions.setCountAction]: (state, count) => ({
    count,
  }),
  [actions.resetCounterAction]: () => ({
    ...initialState,
  }),
}, initialState);
