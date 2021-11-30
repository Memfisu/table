import React, { useCallback } from 'react';
import Box from '../../../utils/Box';
import Button from '../../../utils/Button';
import { directions } from '../../../constants/constants';
import { setCurrentPage } from '../../../reducers/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { pagination } from '../../../selectors/selectors';

type Props = {
    direction: string
}

const PaginationItem = ({ direction }: Props) => {
    const dispatch = useDispatch();
    const { currentPage } = useSelector(pagination);
    
    const handleClick = useCallback(() => {
        if (direction === directions.BACK && currentPage)
            dispatch(setCurrentPage({currentPage: currentPage-1}));

        if (direction === directions.FORWARD)
            dispatch(setCurrentPage({currentPage: currentPage+1}));
    }, [currentPage, direction, dispatch]);

    return (
        <Box className="paginationItem">
          <Button
              className="commonButton"
              label={direction === directions.BACK ? "<<" : ">>"}
              onClick={handleClick}
          />
        </Box>
    );
};

export default PaginationItem;
