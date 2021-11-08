import { actions } from '../constants/constants';

const setPaginationDirection = ({ direction }) => ({
    type: actions.PAGINATION,
    payload: direction
});

const pagination = (state, { type, payload }) => {
    switch (type) {
        case actions.PAGINATION:
            return {
                ...state,
                direction: payload
            }
        default:
            return state || {};
    }
};

export { setPaginationDirection };
export default pagination;