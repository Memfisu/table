import { actions } from '../constants/constants';
import { IAction, IPagination } from '../interfaces/interfaces';

type CurrentPage = {
    currentPage: number
}

const setCurrentPage = ({ currentPage }: CurrentPage) => ({
    type: actions.PAGE,
    payload: currentPage
});

const pagination = (state: IPagination, { type, payload }: IAction<CurrentPage>) => {
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