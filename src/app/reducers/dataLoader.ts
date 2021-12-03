import { actions, statuses } from '../constants/constants';
import {IAction, IColumnNames, IDataLoader, IRowData} from '../interfaces/interfaces';

type IData = {
    data: IRowData[],
    newRecord: IColumnNames
}

const initData = () => ({
    type: actions.INIT,
});

const fetchData = ({ data }: IData) => ({
    type: actions.FETCH,
    payload: { data }
});

const addData = ({ newRecord }: IData) => ({
    type: actions.ADD,
    payload: { newRecord }
});

const setError = () => ({
    type: actions.ERROR
});

const dataLoader = (state: IDataLoader, { type, payload }: IAction<IData>) => {
    switch (type) {
        case actions.INIT:
            return {
                data: [],
                status: statuses.EMPTY
            };
        case actions.FETCH:
            return {
                data: [...payload.data],
                status: statuses.DONE
            };
        case actions.ADD:
            return {
                data: [payload.newRecord, ...state.data],
                status: statuses.DONE
            };
        case actions.ERROR:
            return {
                status: statuses.ERROR
            };
        default:
            return state || {};
    }
};

export { initData, fetchData, addData, setError };
export default dataLoader;