import { actions } from '../constants/constants';

const setNewRecord = (newRecord) => ({
    type: actions.NEW,
    payload: newRecord
});
const clearNewRecord = () => ({
    type: actions.CLEAR,
    payload: {}
});

const newRecordAppendor = (state, { type, payload }) => {
    switch (type) {
        case actions.NEW:
            return {
                ...state,
                ...payload
            }
        case actions.CLEAR:
            return {};
        default:
            return state || {};
    }
};

export { setNewRecord, clearNewRecord };
export default newRecordAppendor;