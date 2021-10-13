import { createReducer } from 'redux-act';
import { errorAction, clearError } from '../actions';

const initialState = {
  title: '',
  message: '',
};

const errorReducer = createReducer({
  [errorAction]: (state, payload) => ({
    title: payload.title || state.title,
    message: payload.message || state.message,
    interval: payload.interval,
  }),
  [clearError]: () => ({
    ...initialState,
  }),
}, initialState);

export default errorReducer;
