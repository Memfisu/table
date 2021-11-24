import { eventChannel, END, buffers } from 'redux-saga'
import { put, all, spawn, call, take, actionChannel, fork } from 'redux-saga/effects';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { initData, fetchData, setError, stopEmitterDemonstration } from '../reducers/dataLoader';
import axios from 'axios';
import { setSortingInfo } from '../reducers/dataSorter';
import store from '../store';
import { actions } from '../constants/constants';
import { removeQueueItem, setNewQueueItem } from '../reducers/queueHandler';

export function* initDataSagaWorker () {
    yield put(initData());
    const { data } = yield axios.get('https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
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

// todo перенести счётчик, задержку и их изменения в стор?
let counter = 1;
let delay = 4000;

export function autoSort (interval, callback, commandsArray) {
    return eventChannel(emitter => {
        let counter = 0;
        console.log('start');
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

export function* sagaAutoSort(counter, taskDelay) {
    const chan = yield call(autoSort, taskDelay, callback, commandsArray);
    try {
        while (true) {
            yield take(chan);
        }
    } finally {
        yield put(stopEmitterDemonstration());
        yield put(removeQueueItem());
        console.log('done!');
    }
}

function* sagaEmitterHandler() {
    const requestChannel = yield actionChannel(actions.EMITTING, buffers.fixed(5));
    while (true) {
        yield take(requestChannel);
        yield call(sagaAutoSort, counter, delay);
    }
}
function* sagaMessagesHandler() {
    const requestChannel = yield actionChannel(actions.EMITTING, buffers.fixed(5));
    while (true) {
        yield take(requestChannel);
        yield put(setNewQueueItem({ counter, delay }));
        yield delay = delay/2;
        yield counter++;
    }
}

function* sagaEmitterWatcher() {
    yield fork(sagaEmitterHandler);
    yield fork(sagaMessagesHandler);
}

// todo реализовать отмену конкретной задачи из очереди по экшену

export default function* rootSaga () {
    const sagas = [initDataSagaWorker, sagaEmitterWatcher];

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
