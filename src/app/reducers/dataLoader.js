import { actions } from '../constants/constants';

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
        default:
            return state || {};
    }
};

export { loadData, addData };
export default dataLoader;