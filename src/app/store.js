import { createStore } from 'redux';
import dataLoader from './reducers/reducers';

const store = createStore(dataLoader, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
export const { dispatch } = store;
export const { getState } = store;