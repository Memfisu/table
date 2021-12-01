import { directions } from '../constants/constants';
import { IRowData } from '../interfaces/interfaces';

type Props = {
    key: string,
    direction: string
};

export const getSortCallback = ({ key, direction }: Props) =>
    (a: IRowData, b: IRowData) => {
        const value = direction === directions.UP ? 1 : -1;
        if (a[key] > b[key]) {
            return value;
        }
        if (a[key] < b[key]) {
            return -value;
        }
        return 0;
    };