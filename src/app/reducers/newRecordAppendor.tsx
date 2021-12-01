import { actions } from '../constants/constants';
import { IAction } from '../interfaces/interfaces';

const setNewRecord = (newRecord: string) => ({
    type: actions.NEW,
    payload: newRecord
});
const clearNewRecord = () => ({
    type: actions.CLEAR,
    payload: {}
});

const newRecordAppendor = (state: [], { type, payload }: IAction) => {
    switch (type) {
        case actions.NEW:
            return {
                ...state,
                // @ts-ignore
                // todo: сделать, чтобы работало без хака
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