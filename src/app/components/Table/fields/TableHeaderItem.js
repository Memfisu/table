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