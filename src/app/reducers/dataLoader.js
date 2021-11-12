import { actions } from '../constants/constants';

const init = () => ({
    type: actions.INIT
});

const loadData = ({ data }) => ({
    type: actions.LOAD,
    payload: data
});

const addData = ({ newRecord }) => ({
    type: actions.ADD,
    payload: newRecord
});

const dataLoader = (state, { type, payload }) => {
    switch (type) {
        case actions.LOAD:
            return [...payload];
        case actions.ADD:
            return [payload, ...state];
        case actions.INIT:
            return state || [];
        default:
            return state || [];
    }
};

export { init, loadData, addData };
export default dataLoader;