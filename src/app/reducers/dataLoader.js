import { actions } from '../constants/constants';

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
        default:
            return state || [];
    }
};

export { loadData, addData };
export default dataLoader;