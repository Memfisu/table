export const loadedData = state => state.dataLoader.data;
export const loadingStatus = state => state.dataLoader.status;

export const additionalInfo = state => state.additionalInfo;
export const chosenRecord = state => additionalInfo(state).chosenRecord;

export const newRecord = state => state.newRecordAppendor;

export const sortInfo = state => state.dataSorter;

export const filterInfo = state => state.dataFilter;

export const pagination = state => state.pagination;

export const formVisibility = state => state.formDemonstrator;