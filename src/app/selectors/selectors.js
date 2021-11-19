import { createSelector } from 'reselect'
import { getSortCallback } from '../utils/getSortCallback';

export const loadingStatus = state => state.dataLoader.status;

export const additionalInfo = state => state.additionalInfo;
export const chosenRecord = state => additionalInfo(state).chosenRecord;

export const newRecord = state => state.newRecordAppendor;

export const sortInfo = state => state.dataSorter;

export const filterInfo = state => state.dataFilter.filterString;

export const pagination = state => state.pagination;

export const formVisibility = state => state.formDemonstrator;

export const loadedData = state => state.dataLoader.data;

const checkInclude = (obj, searchString) => Object.values(obj).some(elem => elem.toString().includes(searchString));

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
        if (Object.keys(sortInfo).length) finalData = finalData.sort(sortCallback);

        console.log('finalData', finalData);
        return finalData;
});

// export const filteredData = createSelector(loadedData, filterInfo, (data, filterInfo) => {
//     if (filterInfo) return data.filter(item => checkInclude(item, filterInfo));
//     return data;
// });
//
// export const sortedData = createSelector(loadedData, sortInfo, (data, sortInfo) => {
//     const sortCallback = getSortCallback({
//         key: sortInfo?.column,
//         direction: sortInfo?.direction
//     });
//     if (Object.keys(sortInfo).length) return data.sort(sortCallback);
//     return data;
// });