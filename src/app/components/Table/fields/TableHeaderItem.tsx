import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortInfo } from '../../../selectors/selectors';
import Box from '../../../utils/Box';
import { directions } from '../../../constants/constants';
import { setSortingInfo } from '../../../reducers/dataSorter';

type Props = {
    itemName: string
}

const TableHeaderItem = ({ itemName }: Props) => {
    let sortData = useSelector(sortInfo);
    const dispatch = useDispatch();

    const direction = sortData?.direction === directions.DOWN ? directions.UP : directions.DOWN;

    const handleClick = useCallback(() => {
        dispatch(setSortingInfo({ sortingInfo: {
                direction,
                column: itemName
            }}));
    }, [direction, dispatch, itemName]);

    const getClass = () => {
        let className = "tableHeaderSort";
        if (sortData?.column === itemName) className = className + " tableHeaderSortFilled";
        if (direction === directions.UP && sortData?.column === itemName) className = className+ " tableHeaderSortUp";
        return className;
    };

    return (
        <Box className="tableHeaderWrapper">
            <Box className="tableHeaderItem">
                {itemName}
            </Box>
            <Box
                className={getClass()}
                onClick={handleClick}
            />
        </Box>
    );
};

export default TableHeaderItem;