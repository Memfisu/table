import { eventChannel, END, buffers } from 'redux-saga'
import { put, all, spawn, call, take, actionChannel } from 'redux-saga/effects';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { initData, fetchData, setError, stopEmitterDemonstration } from '../reducers/dataLoader';
import axios from 'axios';
import { setSortingInfo } from '../reducers/dataSorter';
import store from '../store';
import { actions } from '../constants/constants';
import { setNewQueueItem } from '../reducers/queueHandler';

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

export function* sagaAutoSort(counter, delay) {
    const chan = yield call(autoSort, delay, callback, commandsArray);
    try {
        while (true) {
            yield take(chan);
        }
    } finally {
        yield put(stopEmitterDemonstration());
        console.log('done!');
    }
}

let counter = 1;
let delay = 3000;
function* sagaIsEmittingWatcher() {
    const requestChannel = yield actionChannel(actions.EMITTING, buffers.fixed(5));
    while (true) {
        yield take(requestChannel);
        yield put(setNewQueueItem({ counter, delay }));
        yield call(sagaAutoSort, counter, delay);
        yield delay = delay/2;
        yield counter++;
    }
}

export default function* rootSaga () {
    const sagas = [initDataSagaWorker, sagaIsEmittingWatcher];

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
