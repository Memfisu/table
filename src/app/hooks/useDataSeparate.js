export const useDataSeparate = ({ data = [], recordsAmount = 10 }) => {
    if (data.length <= recordsAmount) return data;

    return data.reduce((accum, current, index, array) => {
        if ( !(index % recordsAmount)  ) {
            return [
                ...accum,
                array.slice(index, index + recordsAmount),
            ];
        }
        return accum;
    }, []);
}