import { eventChannel, END, buffers } from 'redux-saga'
import { put, all, spawn, call, take, actionChannel, fork, cancel, select } from 'redux-saga/effects';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { initData, fetchData, setError, stopEmitterDemonstration } from '../reducers/dataLoader';
import axios from 'axios';
import { setSortingInfo } from '../reducers/dataSorter';
import store from '../store';
import { actions } from '../constants/constants';
import { finishQueueTask, setQueueTask } from '../reducers/queueHandler';
import {changeCounterAndDelay, initCounterAndDelay} from '../reducers/queueHelper';
import { helper } from '../selectors/selectors';

function* initDataSagaWorker () {
    yield put(initData());
    const { data } = yield axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    yield put(setCurrentPage({ currentPage: 0 }));
    yield put(setFormVisibility({ visibility: false }));
    yield put(initCounterAndDelay());
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

function autoSort (interval, callback, commandsArray) {
    return eventChannel(emitter => {
        let counter = 0;
        console.log(`start ${interval}`);
        const commandEmitter = setInterval(() => {
            if (counter < commandsArray.length) {
                console.log(counter);
                callback(commandsArray[counter++]);
            } else {
                emitter(END);
            }
        }, interval);

        return () => {
            clearInterval(commandEmitter);
        }
    })
}

function* sagaAutoSort(counter, taskDelay) {
    const chan = yield call(autoSort, taskDelay, callback, commandsArray);
    // todo реализовать отмену конкретной задачи из очереди по экшену
    // const cancelAction =  yield take(actions.QUEUECANCEL);
    // todo избавиться от try - catch с сохранением функционала
    try {
            while (true) {
                yield take(chan);
                // if (cancelAction.payload.counter === 2) {
                //     yield console.log(cancelAction.payload.counter === 2);
                // yield cancel(action);
                // }

            }
        } finally {
            yield put(stopEmitterDemonstration());
            yield put(finishQueueTask());
            console.log('done!');
        }
}

function* sagaEmitterHandler() {
    let index = 0;
    const requestChannel = yield actionChannel(actions.EMITTING, buffers.fixed(5));
    while (true) {
        yield take(requestChannel);
        const payload = yield select(helper);
        yield call(sagaAutoSort, payload[index].counter, payload[index].delay);
        yield index++;
    }
}
function* sagaMessagesHandler() {
    let index = 0;
    const requestChannel = yield actionChannel(actions.EMITTING, buffers.fixed(5));
    while (true) {
        yield take(requestChannel);
        const payload = yield select(helper);
        yield put(setQueueTask({ counter: payload[index].counter, delay: payload[index].delay }));
        yield put(changeCounterAndDelay());
        yield index++;
    }
}

function* sagaEmitterWatcher() {
    yield fork(sagaEmitterHandler);
    yield fork(sagaMessagesHandler);
}

export default function* rootSaga () {
    yield spawn(initDataSagaWorker);
    yield spawn(sagaEmitterWatcher);
}
