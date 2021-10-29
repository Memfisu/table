import { createStore, combineReducers } from 'redux';
import dataLoader  from './reducers/dataLoader';
import { recordInfoDemonstrator as additionalInfo } from './reducers/recordInfoDemonstrator';

const reducers = combineReducers ({
    dataLoader,
    additionalInfo
});

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
export const { dispatch } = store;
export const { getState } = store;