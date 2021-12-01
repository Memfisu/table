import { actions } from '../constants/constants';
import { IAction, ISortingInfo } from '../interfaces/interfaces';

type SortingInfo = {
    sortingInfo: ISortingInfo
}

const setSortingInfo = ({ sortingInfo }: SortingInfo) => ({
    type: actions.SORT,
    payload: sortingInfo
});

const dataSorter = (state: [], { type, payload }: IAction) => {
    switch (type) {
        case actions.SORT:
            return {
                ...state,
                // @ts-ignore
                // todo: сделать, чтобы работало без хака
                ...payload
            }
        default:
            return state || {};
    }
};

export { setSortingInfo };
export default dataSorter;