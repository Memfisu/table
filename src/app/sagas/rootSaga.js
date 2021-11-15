import { takeEvery, put, all, select, spawn, call } from 'redux-saga/effects';
import { actions, statuses } from '../constants/constants';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { loadedData, sortInfo } from '../selectors/selectors';
import { getSortCallback } from '../utils/getSortCallback';
import { loadData } from '../reducers/dataLoader';
import axios from 'axios';

export function* initDataSagaWorker () {
    yield put(loadData({ data: [], status: statuses.EMPTY }));
    const { data } = yield axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    yield put(setCurrentPage({ currentPage: 0 }));
    yield put(setFormVisibility({ visibility: false }));
    if (data?.length) yield put(loadData({ data, status: statuses.FETCHED }));
}

export function* sortDataSagaWorker () {
    const sortData = yield select(sortInfo);
    let data = yield select(loadedData);
    const sortCallback = yield getSortCallback({
        key: sortData?.column,
        direction: sortData?.direction
    });
    const sortedData = yield data.sort(sortCallback);
    yield put(loadData({ data: sortedData, status: statuses.DONE }));
}
export function* watchSortData () {
    yield takeEvery(actions.SORT, sortDataSagaWorker);
}

// filtering draft
// для нормальной реализации нужно отдельно хранить в сторе отфильтрованный список?
// иначе отфильтрованный список перезаписывает собой загруженные изначальные данные

// const checkInclude = (obj, searchString) => Object.values(obj).slice(0, 5).some(elem => elem.toString().includes(searchString));
// export function* filterDataSagaWorker () {
//     let data = yield select(loadedData);
//     const { filterString } = yield select(filterInfo);
//     if (filterString) data = data.filter(item => checkInclude(item, filterString));
//     yield put(loadData({ data, status: statuses.DONE }));
// }
// export function* watchFilterData () {
//     yield takeEvery(actions.FILTER, filterDataSagaWorker);
// }

export default function* rootSaga () {
    const sagas = [initDataSagaWorker, watchSortData];

    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e);
                }
            }
        })
    })
    yield all(retrySagas);
}
