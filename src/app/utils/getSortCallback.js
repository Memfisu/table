import { directions } from '../constants/constants';

export const getSortCallback = ({ key, direction }) =>
    (a, b) => {
        const value = direction === directions.UP ? 1 : -1;
        if (a[key] > b[key]) {
            return value;
        }
        if (a[key] < b[key]) {
            return -value;
        }
        return 0;
    };