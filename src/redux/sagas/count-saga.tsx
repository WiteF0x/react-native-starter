import {
  put,
  all,
  select,
  takeEvery,
} from 'redux-saga/effects';

import * as actions from 'src/redux/actions';

const count = state => state.count.count;

function* increment() {
  try {
    const current = yield select(count);
    yield put(actions.setCountAction(current + 1));
  } catch (e) {
    console.log(e);
  }
};

function* decrement() {
  try {
    const current = yield select(count);
    yield put(actions.setCountAction(current - 1));
  } catch (e) {
    console.log(e);
  };
}

export default function* activitiesSagas() {
  yield all([
    takeEvery(actions.incrementAction, increment),
    takeEvery(actions.decrementAction, decrement),
  ]);
};
