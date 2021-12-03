import { IRowData } from '../interfaces/interfaces';

type Arguments = {
    data: IRowData[],
    recordsAmount?: number,
    pageNumber: number
}

type ArrayOfArrays = IRowData[];

export const separateData = ({ data = [], recordsAmount = 10, pageNumber }: Arguments) => {
    if (data.length <= recordsAmount) return data;

    const reduceCallback = (accum: ArrayOfArrays[], _current: IRowData, index: number, array: ArrayOfArrays[]): (ArrayOfArrays | ArrayOfArrays[])[] => {
        if (!(index % recordsAmount)) {
            return [
                ...accum,
                array.slice(index, index + recordsAmount),
            ];
        }
        return accum;
    }

    // @ts-ignore
    // todo убрать хак
    const separatedData = data.reduce(reduceCallback, []);
    // [[{id, firstName...}, {id, firstName...}], [{id, firstName...}, {id, firstName...}]]

    return separatedData[pageNumber];
}