import {actions, statuses} from '../constants/constants';

const init = () => ({
    type: actions.INIT
});

const loadData = ({ data, status }) => ({
    type: actions.LOAD,
    payload: { data, status }
});

const addData = ({ newRecord, status }) => ({
    type: actions.ADD,
    payload: { newRecord, status }
});

const dataLoader = (state, { type, payload }) => {
    switch (type) {
        case actions.LOAD:
            return {
                data: [...payload.data],
                status: payload.status
            };
        case actions.ADD:
            return {
                data: [payload.newRecord, ...state.data],
                status: payload.status
            };
        case actions.INIT:
            return {
                data: [],
                status: statuses.EMPTY
            };
        default:
            return state || {};
    }
};

export { init, loadData, addData };
export default dataLoader;