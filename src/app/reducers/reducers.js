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
            return {
                ...state,
                payload
            }
        case actions.ADD:
            return {
                ...state,
                payload
            }
        default:
            return state;
    }
};

export { loadData };
export default dataLoader;