import { put, spawn, call, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { initData, fetchData } from '../reducers/dataLoader';
import axios from 'axios';
import { setSortingInfo } from '../reducers/dataSorter';
import store from '../store';
import { actions } from '../constants/constants';
import { queueData } from '../selectors/selectors';
import { finishTaskFromQueue } from '../reducers/queueHandler';

function* initDataSagaWorker () {
    yield put(initData());
    const { data } = yield axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    yield put(setCurrentPage({ currentPage: 0 }));
    yield put(setFormVisibility({ visibility: false }));
    if (data?.length) yield put(fetchData({ data }));
}

const callback = (action) => store.dispatch(setSortingInfo(action));

const commandsArray = [
    {sortingInfo: {
            direction: 'UP',
            column: 'id'
        }},
    {sortingInfo: {
            direction: 'DOWN',
            column: 'firstName'
        }},
    {sortingInfo: {
            direction: 'UP',
            column: 'lastName'
        }},
    {sortingInfo: {
            direction: 'DOWN',
            column: 'email'
        }},
    {sortingInfo: {
            direction: 'UP',
            column: 'phone'
        }}
];

function* sagaCounter(){
    let counter = 0;
    for (let i = 0 ; i < commandsArray.length; i++){
        yield counter++;
    }
}
const counter = sagaCounter();

function* sagaAutoSort(taskDelay, taskId) {
    yield console.log(`start ${taskDelay}`);
    const runner = yield setInterval(() => {
        const next = counter.next();
        if (next.done) {
            clearInterval(runner);
            store.dispatch(finishTaskFromQueue({ id: taskId }));
            console.log('done!');
        } else {
            console.log(next.value);
            callback(commandsArray[next.value]);
        }
    }, taskDelay);
}

function* sagaCheckQueue() {
    const payload = yield select(queueData);
    if (payload.length) {
        yield call(sagaAutoSort, payload[0].delay, payload[0].id);
    }
}

// todo переделать на очередь из redux:
// реагируем на QUEUEADD (takeLatest?) - запускаем sagaAutoSort с установленной taskDelay
// реагируем на QUEUEFINISH (takeEvery?) - проверяем, есть ли ещё что-то в очереди
// если есть - запускаем новый сет sagaAutoSort с новой taskDelay
// + проследить, чтобы законченные таски пропадали из рендера очереди
function* sagaEmitterHandler() {
    yield takeLatest(actions.QUEUEADD, sagaCheckQueue);
    yield takeEvery(actions.QUEUEFINISH, sagaCheckQueue);
}

export default function* rootSaga () {
    yield spawn(initDataSagaWorker);
    yield spawn(sagaEmitterHandler);
}
