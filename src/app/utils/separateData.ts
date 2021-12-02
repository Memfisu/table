type Arguments = {
    // todo сузить тип и не использовать any
    data: any[],
    recordsAmount?: number,
    pageNumber: number
}

export const separateData = ({ data = [], recordsAmount = 10, pageNumber }: Arguments) => {
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