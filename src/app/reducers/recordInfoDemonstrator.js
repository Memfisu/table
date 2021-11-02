import { actions } from '../constants/constants';

const setChosenRecord = ({ rowData }) => ({
    type: actions.SHOW,
    payload: rowData
});
const resetChosenRecord = () => ({
    type: actions.RESET,
    payload: {}
});

export const recordInfoDemonstrator = (state, { type, payload }) => {
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