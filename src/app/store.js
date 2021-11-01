import { createStore, combineReducers } from 'redux';
import dataLoader  from './reducers/dataLoader';
import newRecordAppendor  from './reducers/newRecordAppendor';
import { recordInfoDemonstrator as additionalInfo } from './reducers/recordInfoDemonstrator';

const reducers = combineReducers ({
    dataLoader,
    newRecordAppendor,
    additionalInfo
});

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
export const { dispatch } = store;
export const { getState } = store;