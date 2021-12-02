export interface IAddress {
    city: string,
    state: string,
    streetAddress: string,
    zip: number
}

export interface IRowData {
    description: string,
    email: string,
    firstName: string,
    id: number,
    lastName: string,
    phone: string,
    address: IAddress
    [index: string]: string | number | IAddress
}

export interface IColumnNames {
    email: RegExp,
    firstName: RegExp,
    id: RegExp,
    lastName: RegExp,
    phone: RegExp
    [index: string]: RegExp
}

export interface IAction {
    type: string,
    // todo заменить на вычисляемый тип
    payload: any
}

export interface ISortingInfo {
    column: string,
    direction: string
}

export interface IDataLoader {
    data: IRowData[],
    status: 'ERROR' | 'EMPTY' | 'DONE'
}

export interface IFilterString {
    filterString: string
}

export interface IPagination {
    currentPage: number
}

export interface IChosenRecord {
    chosenRecord: IRowData
}

export interface IFormVisibility {
    visibility: boolean
}

export interface IQueueItem {
    counter: number,
    delay: number,
    id: number
}

export interface IQueueHandler {
    queue: IQueueItem[],
    merge: number[]
}

export interface IState {
    dataLoader: IDataLoader,
    newRecordAppendor: IColumnNames,
    additionalInfo: IChosenRecord,
    dataSorter: ISortingInfo,
    dataFilter: IFilterString,
    pagination: IPagination,
    formDemonstrator: IFormVisibility
    queueHandler: IQueueHandler
}
