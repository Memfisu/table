import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadedData, sortInfo } from '../../../selectors/selectors';
import { Box } from '../../../../ui-kit/Containers';
import { directions } from '../../../constants/constants';
import { setSortingInfo } from '../../../reducers/dataSorter';
import { getSortCallback } from '../../../utils/getSortCallback';
import { loadData } from '../../../reducers/dataLoader';

const TableHeaderItem = ({ itemName }) => {
    let sortData = useSelector(sortInfo);
    const tableData = useSelector(loadedData);
    const dispatch = useDispatch();

    const direction = sortData?.direction === directions.DOWN ? directions.UP : directions.DOWN;

    const handleClick = useCallback(() => {
        dispatch(setSortingInfo({ sortingInfo: {
                direction,
                column: itemName
            }}));
        /*
        * todo
        *   Неправильный подход. Выше мы бросили экшен, изменили данные.
        *   В этом коллбэке мы не должны писать и реакцию на изменение этих данных, зачем нам тогда вообще редакс?
        *   Сортировка должна состояться как ракция на изменение этих данных
        *   Реакция на изменение данных в сторе прописывается либо через сагу, как реакция на экшен, либо через useEffect
        *   Можно начать с useEffect
        * */
        const sortCallback = getSortCallback({
            key: itemName,
            direction
        });

        const sortedData = tableData.sort(sortCallback);
        dispatch(loadData({data: sortedData}));
    }, [direction, dispatch, itemName, tableData]);

    return (
        <Box
            padding="10px 0px 0px 5px"
            onClick={handleClick}
        >
            {itemName}
        </Box>
    );
};

export default TableHeaderItem;
