import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import dataLoader  from './reducers/dataLoader';
import newRecordAppendor  from './reducers/newRecordAppendor';
import { recordInfoDemonstrator as additionalInfo } from './reducers/recordInfoDemonstrator';
import rootSaga from './sagas/rootSaga';
import dataSorter from './reducers/dataSorter';
import dataFilter from './reducers/dataFilter';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import pagination from './reducers/pagination';
import { formDemonstrator } from './reducers/formDemonstrator';
import queueHandler from './reducers/queueHandler';

const saga = createSagaMiddleware();

const reducers = combineReducers ({
    dataLoader,
    newRecordAppendor,
    additionalInfo,
    dataSorter,
    dataFilter,
    pagination,
    formDemonstrator,
    queueHandler
});

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;