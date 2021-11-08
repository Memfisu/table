import { actions } from '../constants/constants';

const setCurrentPage = ({ currentPage }) => ({
    type: actions.PAGE,
    payload: currentPage
});

const pagination = (state, { type, payload }) => {
    switch (type) {
        case actions.PAGE:
            return {
                ...state,
                currentPage: payload
            }
        default:
            return state || {};
    }
};

export { setCurrentPage };
export default pagination;