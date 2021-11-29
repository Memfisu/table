import { eventChannel, END, buffers } from 'redux-saga'
import { put, spawn, call, take, actionChannel, select } from 'redux-saga/effects';
import { setCurrentPage } from '../reducers/pagination';
import { setFormVisibility } from '../reducers/formDemonstrator';
import { initData, fetchData } from '../reducers/dataLoader';
import axios from 'axios';
import { setSortingInfo } from '../reducers/dataSorter';
import store from '../store';
import { actions } from '../constants/constants';
import { queueData } from '../selectors/selectors';

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
        while (true) {
            yield take(chan);
        }
}

// todo переделать на очередь из redux:
// сага запускает сет сортировки из очереди
// в конце сортировки кидается экшен - сигнал проверить очередь, есть ли там ещё айтемы
// если есть, берём следующий сет
function* sagaEmitterHandler() {
    let index = 0;
    const requestChannel = yield actionChannel(actions.QUEUEADD, buffers.fixed(5));
    while (true) {
        yield take(requestChannel);
        const payload = yield select(queueData);
        yield call(sagaAutoSort, payload[index].counter, payload[index].delay);
        yield index++;
    }
}

export default function* rootSaga () {
    yield spawn(initDataSagaWorker);
    yield spawn(sagaEmitterHandler);
}
