import { all } from 'redux-saga/effects';
import countSaga from './count-saga';

export default function* rootSaga() {
  yield all([
    countSaga(),
  ]);
};
