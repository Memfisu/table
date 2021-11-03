import { actions } from '../constants/constants';

const setSortingInfo = ({ sortingInfo }) => ({
    type: actions.SORT,
    payload: sortingInfo
});

const dataSorter = (state, { type, payload }) => {
    switch (type) {
        case actions.SORT:
            return {
                ...state,
                ...payload
            }
        default:
            return state || {};
    }
};

export { setSortingInfo };
export default dataSorter;