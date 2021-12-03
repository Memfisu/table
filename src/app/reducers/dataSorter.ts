import { actions } from '../constants/constants';
import { IAction, ISortingInfo } from '../interfaces/interfaces';

type SortingInfo = {
    sortingInfo: ISortingInfo
}

const setSortingInfo = ({ sortingInfo }: SortingInfo) => ({
    type: actions.SORT,
    payload: sortingInfo
});

const dataSorter = (state: ISortingInfo, { type, payload }: IAction<ISortingInfo>) => {
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