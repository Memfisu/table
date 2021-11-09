import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortInfo } from '../../../selectors/selectors';
import { Box } from '../../../../ui-kit/Containers';
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
            padding="10px 0px 0px 5px"
            onClick={handleClick}
        >
            {itemName}
        </Box>
    );
};

export default TableHeaderItem;