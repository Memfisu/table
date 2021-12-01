import { actions } from '../constants/constants';
import {IAction, IRowData} from '../interfaces/interfaces';

type RowData = {
    rowData: IRowData
}

const setChosenRecord = ({ rowData }: RowData) => ({
    type: actions.SHOW,
    payload: rowData
});
const resetChosenRecord = () => ({
    type: actions.RESET,
    payload: {}
});

export const recordInfoDemonstrator = (state: [], { type, payload }: IAction) => {
    switch (type) {
        case actions.SHOW:
            return {
                ...state,
                chosenRecord: payload
            }
        case actions.RESET:
            return {};
        default:
            return state || {};
    }
};

export { setChosenRecord, resetChosenRecord };