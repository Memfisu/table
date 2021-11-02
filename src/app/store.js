import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import dataLoader  from './reducers/dataLoader';
import newRecordAppendor  from './reducers/newRecordAppendor';
import { recordInfoDemonstrator as additionalInfo } from './reducers/recordInfoDemonstrator';
import rootSaga from './sagas/rootSaga';

const saga = createSagaMiddleware();

const reducers = combineReducers ({
    dataLoader,
    newRecordAppendor,
    additionalInfo
});

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

saga.run(rootSaga);

export default store;