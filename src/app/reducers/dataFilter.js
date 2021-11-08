import { actions } from '../constants/constants';

const setFilterInfo = ({ filterInfo }) => ({
    type: actions.FILTER,
    payload: filterInfo
});

const dataFilter = (state, { type, payload }) => {
    switch (type) {
        case actions.FILTER:
            return {
                ...state,
                filterString: payload
            }
        default:
            return state || {};
    }
};

export { setFilterInfo };
export default dataFilter;