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
    address: IAddress,
    [index: string]: string | number | IAddress | RegExp
}

export interface IQueueItem {
    counter: number,
    delay: number,
    id: number
}

export type ColumnNames = Omit<IRowData, "description" & "address">;

export interface IAction {
    type: string,
    /*
    * todo
    *  Заменить эти на вычисляемый тип.
    * */
    payload: any
}

export interface ISortingInfo {
    column: string,
    direction: string
}
