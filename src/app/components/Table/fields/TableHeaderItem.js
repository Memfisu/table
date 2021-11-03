import React from 'react';
import { useSelector } from 'react-redux';
import { loadedData, sortInfo } from '../../../selectors/selectors';
import { Box } from '../../../../ui-kit/Containers';
import { directions } from '../../../constants/constants';
import { setSortingInfo } from '../../../reducers/dataSorter';
import store from '../../../store';
import { getSortCallback } from '../../../utils/getSortCallback';
import { loadData } from '../../../reducers/dataLoader';

const TableHeaderItem = ({ itemName }) => {
    const sortData = useSelector(sortInfo);
    const tableData = useSelector(loadedData);
    const direction = !sortData?.direction || sortData?.direction === directions.DOWN ? directions.UP : directions.DOWN;

    const handleClick = () => {
        store.dispatch(setSortingInfo({ sortingInfo: {
                direction,
                column: itemName
            }}));

        const sortCallback = getSortCallback({
            key: sortData.column,
            direction
        });

        const sortedData = tableData.sort(sortCallback);
        store.dispatch(loadData({data: sortedData}));
    }

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
