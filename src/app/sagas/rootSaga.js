import { takeEvery, takeLatest, put, all, select, spawn, call } from 'redux-saga/effects';
import { actions } from '../constants/constants';
import { setLoader } from '../reducers/showLoader';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import {loadedData, sortInfo} from '../selectors/selectors';
import { getSortCallback } from '../utils/getSortCallback';
import { loadData } from '../reducers/dataLoader';
import axios from 'axios';

export function* loadDataSagaWorker () {
    yield put(setLoader({ visibility: true }));
    const { data } = yield axios.get('http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
    yield put(setCurrentPage({ currentPage: 0 }));
    yield put(setFormVisibility({ visibility: false }));
    if (data?.length) {
        yield put(loadData({ data }));
        yield put(setLoader({ visibility: false }));
    }
}
export function* watchLoadData () {
    yield takeLatest(actions.INIT, loadDataSagaWorker);
}

export function* sortDataSagaWorker () {
    const sortData = yield select(sortInfo);
    let data = yield select(loadedData);
    const sortCallback = yield getSortCallback({
        key: sortData?.column,
        direction: sortData?.direction
    });
    const sortedData = yield data.sort(sortCallback);
    yield put(loadData({ data: sortedData }));
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
//     yield put(loadData({ data }));
// }
// export function* watchFilterData () {
//     yield takeEvery(actions.FILTER, filterDataSagaWorker);
// }

export default function* rootSaga () {
    const sagas = [watchLoadData, watchSortData];

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
