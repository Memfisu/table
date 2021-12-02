import { createSelector } from 'reselect'
import { getSortCallback } from '../utils/getSortCallback';
import { IRowData, IState } from '../interfaces/interfaces';

export const loadingStatus = (state: IState) => state.dataLoader.status;

export const additionalInfo = (state: IState) => state.additionalInfo;
export const chosenRecord = (state: IState) => additionalInfo(state).chosenRecord;

export const newRecord = (state: IState) => state.newRecordAppendor;

export const sortInfo = (state: IState) => state.dataSorter;

export const filterInfo = (state: IState) => state.dataFilter.filterString;

export const pagination = (state: IState) => state.pagination;

export const formVisibility = (state: IState) => state.formDemonstrator;

export const loadedData = (state: IState) => state.dataLoader.data;

export const queueData = (state: IState) => state.queueHandler.queue;
export const mergeData = (state: IState) => state.queueHandler.merge;

const checkInclude = (obj: IRowData, searchString: string) => Object.values(obj).some(elem => elem.toString().includes(searchString));

export const filteredSortedData = createSelector([
    loadedData,
    filterInfo,
    sortInfo
],
    (data, filterInfo, sortInfo) => {
        let finalData = data;

        if (filterInfo) finalData = finalData.filter(item => checkInclude(item, filterInfo));

        const sortCallback = getSortCallback({
            key: sortInfo?.column,
            direction: sortInfo?.direction
        });
        if (Object.keys(sortInfo).length) finalData = [...finalData.sort(sortCallback)];

        return finalData;
});