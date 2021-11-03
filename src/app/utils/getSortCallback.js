import {directions} from "../constants/constants";

export const getSortCallback = ({ key, direction }) => {
    const compareDescending = (a, b) => {
        if (a[key] > b[key]) {
            return -1;
        }
        if (a[key] < b[key]) {
            return 1;
        }
        return 0;
    };

    const compareAscending = (a, b) => {
        if (a[key] > b[key]) {
            return 1;
        }
        if (a[key] < b[key]) {
            return -1;
        }
        return 0;
    };

    return direction === directions.UP ? compareAscending : compareDescending;
}