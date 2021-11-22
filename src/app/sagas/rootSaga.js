import { eventChannel, END } from 'redux-saga'
import { put, all, spawn, call, take } from 'redux-saga/effects';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { initData, fetchData, setError } from '../reducers/dataLoader';
import axios from 'axios';
import { setSortingInfo } from '../reducers/dataSorter';
import store from '../store';

export function* initDataSagaWorker () {
    yield put(initData());
    const { data } = yield axios.get('https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    yield put(setCurrentPage({ currentPage: 0 }));
    yield put(setFormVisibility({ visibility: false }));
    if (data?.length) yield put(fetchData({ data }));
}

const autoSort = (interval, callback, commandsArray) => {
    return eventChannel(emitter => {
        let counter = 0;
        const commandEmitter = setInterval(() => {
            if (counter < commandsArray.length) {
                callback(commandsArray[counter++]);
            } else {
                emitter(END);
            }
        }, interval);

        return () => {
            clearInterval(commandEmitter);
        }
    })
};

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

export function* sagaAutoSort() {
    const chan = yield call(autoSort, 5000, callback, commandsArray);
    try {
        while (true) {
            yield take(chan);
        }
    } finally {
        console.log('done!');
    }
}

export default function* rootSaga () {
    const sagas = [initDataSagaWorker, sagaAutoSort];

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
