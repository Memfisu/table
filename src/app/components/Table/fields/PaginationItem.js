import React, { useCallback } from 'react';
import { Box } from '../../../../ui-kit/Containers';
import Button from '../../../utils/Button';
import { directions } from '../../../constants/constants';
import { setCurrentPage } from '../../../reducers/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { pagination } from '../../../selectors/selectors';

const PaginationItem = ({ direction }) => {
    const dispatch = useDispatch();
    const { currentPage } = useSelector(pagination);
    
    const handleClick = useCallback(() => {
        if (direction === directions.BACK && currentPage)
            dispatch(setCurrentPage({currentPage: currentPage-1}));

        if (direction === directions.FORWARD)
            dispatch(setCurrentPage({currentPage: currentPage+1}));
    }, [currentPage, direction, dispatch]);

    return (
        <Box padding="5px 0px 0px 5px">
          <Button
              label={direction === directions.BACK ? "<<" : ">>"}
              onClick={handleClick}
          />
        </Box>
    );
};

export default PaginationItem;
