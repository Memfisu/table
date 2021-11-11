import { takeEvery, put, fork, select } from 'redux-saga/effects';
import { actions } from '../constants/constants';
import { setLoader } from '../reducers/showLoader';

export function* sagaWorker () {
    yield put(setLoader({ visibility: true }));
    const { dataLoader } = yield select(store => store);
    if (dataLoader?.length) yield put(setLoader({ visibility: false }));
}

export function* watchLoadData () {
    yield takeEvery(actions.LOAD, sagaWorker);
}

export default function* rootSaga () {
    yield fork(watchLoadData);
}
