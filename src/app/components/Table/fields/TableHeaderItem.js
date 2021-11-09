import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortInfo } from '../../../selectors/selectors';
import Box from '../../../utils/Box';
import { directions } from '../../../constants/constants';
import { setSortingInfo } from '../../../reducers/dataSorter';

const TableHeaderItem = ({ itemName }) => {
    let sortData = useSelector(sortInfo);
    const dispatch = useDispatch();

    const direction = sortData?.direction === directions.DOWN ? directions.UP : directions.DOWN;

    const handleClick = useCallback(() => {
        dispatch(setSortingInfo({ sortingInfo: {
                direction,
                column: itemName
            }}));
    }, [direction, dispatch, itemName]);

    return (
        <Box
            className="tableHeaderItem"
            onClick={handleClick}
        >
            {itemName}
        </Box>
    );
};

export default TableHeaderItem;