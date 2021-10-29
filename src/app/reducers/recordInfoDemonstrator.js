import { actions } from '../constants/constants';

const setChosenRecord = ({ rowData }) => ({
    type: actions.SHOW,
    payload: rowData
});

export const recordInfoDemonstrator = (state, { type, payload }) => {
    switch (type) {
        case actions.SHOW:
            return {
                ...state,
                chosenRecord: payload
            }
        default:
            return state || {};
    }
};

export { setChosenRecord };