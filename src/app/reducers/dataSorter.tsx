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
            /*
            * todo
            *  Нужно сделать обопщение в интерфейсе IAction, заменить в нем payload: any на вычисляемый тип, чтобы все было красиво
            * */
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
