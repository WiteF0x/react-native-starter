import { createAction } from 'redux-act';

export const incrementAction = createAction('INCREMENT_ACTION');
export const decrementAction = createAction('DECREMENT_ACTION');

export const setCountAction = createAction('SET_COUNT_ACTION');
export const resetCounterAction = createAction('RESET_COUNTER_ACTION');
