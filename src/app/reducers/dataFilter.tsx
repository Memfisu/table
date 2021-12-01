import { actions } from '../constants/constants';
import { IAction } from '../interfaces/interfaces';

type FilterInfo = {
    filterInfo: string
}

const setFilterInfo = ({ filterInfo }: FilterInfo) => ({
    type: actions.FILTER,
    payload: filterInfo
});

const dataFilter = (state: [], { type, payload }: IAction) => {
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