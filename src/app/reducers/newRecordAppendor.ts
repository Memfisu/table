import { actions } from '../constants/constants';
import { IColumnNames, IAction } from '../interfaces/interfaces';

type NewRecord = {
    [newRecord: string]: string | null
}

const setNewRecord = (newRecord: NewRecord) => ({
    type: actions.NEW,
    payload: newRecord
});
const clearNewRecord = () => ({
    type: actions.CLEAR,
    payload: {}
});

const newRecordAppendor = (state: IColumnNames, { type, payload }: IAction<NewRecord>) => {
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