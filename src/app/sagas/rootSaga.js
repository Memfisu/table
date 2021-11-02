import { takeEvery } from 'redux-saga/effects';
import { actions } from '../constants/constants';

export function* sagaWorker () {
    yield console.log('saga test');
}

export function* sagaWatcher () {
    yield takeEvery(actions.ADD, sagaWorker);
}

export default function* rootSaga () {
    yield sagaWatcher();
}
