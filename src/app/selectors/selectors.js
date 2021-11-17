import { useSelector } from 'react-redux';
import {getSortCallback} from "../utils/getSortCallback";

const checkInclude = (obj, searchString) => Object.values(obj).some(elem => elem.toString().includes(searchString));

export const useLoadedData = state => {
    let { data } = state.dataLoader;

    const { filterString } = useSelector(filterInfo);
    if (filterString) data = data.filter(item => checkInclude(item, filterString));

    const sortData = useSelector(sortInfo);
    const sortCallback = getSortCallback({
        key: sortData?.column,
        direction: sortData?.direction
    });
    if (Object.keys(sortData).length) data = data.sort(sortCallback);

    return data;
}
export const loadingStatus = state => state.dataLoader.status;

export const additionalInfo = state => state.additionalInfo;
export const chosenRecord = state => additionalInfo(state).chosenRecord;

export const newRecord = state => state.newRecordAppendor;

export const sortInfo = state => state.dataSorter;

export const filterInfo = state => state.dataFilter;

export const pagination = state => state.pagination;

export const formVisibility = state => state.formDemonstrator;