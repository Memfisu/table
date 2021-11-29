import { actions, statuses } from '../constants/constants';

const initData = () => ({
    type: actions.INIT,
});

const fetchData = ({ data }) => ({
    type: actions.FETCH,
    payload: { data }
});

const addData = ({ newRecord }) => ({
    type: actions.ADD,
    payload: { newRecord }
});

const setError = () => ({
    type: actions.ERROR
});

const dataLoader = (state, { type, payload }) => {
    switch (type) {
        case actions.INIT:
            return {
                data: [],
                status: statuses.EMPTY
            };
        case actions.FETCH:
            return {
                data: [...payload.data],
                status: statuses.DONE
            };
        case actions.ADD:
            return {
                data: [payload.newRecord, ...state.data],
                status: statuses.DONE
            };
        case actions.ERROR:
            return {
                status: statuses.ERROR
            };
        default:
            return state || {};
    }
};

export { initData, fetchData, addData, setError };
export default dataLoader;