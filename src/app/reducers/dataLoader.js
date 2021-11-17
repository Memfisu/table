import { actions, statuses } from '../constants/constants';

const fetchData = ({ data }) => ({
    type: actions.FETCH,
    payload: { data }
});

const setData = ({ newRecord }) => ({
    type: actions.SET,
    payload: { newRecord }
});

const dataLoader = (state, { type, payload }) => {
    switch (type) {
        case actions.FETCH:
            return {
                data: [...payload.data],
                status: payload.data.length ? statuses.DONE : statuses.ERROR
            };
        case actions.SET:
            return {
                data: [payload.newRecord, ...state.data],
                status: statuses.DONE
            };
        default:
            return state || {};
    }
};

export { fetchData, setData };
export default dataLoader;