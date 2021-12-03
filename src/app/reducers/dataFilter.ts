import { actions } from '../constants/constants';
import { IAction, IFilterString } from '../interfaces/interfaces';

type FilterInfo = {
    filterInfo: string
}

const setFilterInfo = ({ filterInfo }: FilterInfo) => ({
    type: actions.FILTER,
    payload: filterInfo
});

const dataFilter = (state: IFilterString, { type, payload }: IAction<string>) => {
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