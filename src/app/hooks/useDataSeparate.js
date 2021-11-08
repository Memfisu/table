export const useDataSeparate = ({ data = [], recordsAmount = 10, pageNumber }) => {
    if (data.length <= recordsAmount) return data;

    const separatedData = data.reduce((accum, current, index, array) => {
        if ( !(index % recordsAmount)  ) {
            return [
                ...accum,
                array.slice(index, index + recordsAmount),
            ];
        }
        return accum;
    }, []);

    return separatedData[pageNumber];
}