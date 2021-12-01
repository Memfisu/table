import { actions } from '../constants/constants';
import {IAction} from "../interfaces/interfaces";

type CurrentPage = {
    currentPage: number
}

const setCurrentPage = ({ currentPage }: CurrentPage) => ({
    type: actions.PAGE,
    payload: currentPage
});

const pagination = (state: [], { type, payload }: IAction) => {
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