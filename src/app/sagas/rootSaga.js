import { put, all, spawn, call } from 'redux-saga/effects';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { initData, fetchData, setError } from '../reducers/dataLoader';
import axios from 'axios';

export function* initDataSagaWorker () {
    yield put(initData());
    const { data } = yield axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    yield put(setCurrentPage({ currentPage: 0 }));
    yield put(setFormVisibility({ visibility: false }));
    if (data?.length) yield put(fetchData({ data }));
}

export default function* rootSaga () {
    const sagas = [initDataSagaWorker];

    const executeSagas = yield sagas.map(saga => {
        return spawn(function* () {
                try {
                    yield call(saga);
                } catch (e) {
                    yield put(setError());
                    console.log(e);
                }
        })
    })
    yield all(executeSagas);
}
