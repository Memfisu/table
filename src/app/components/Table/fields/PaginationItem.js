import React, { useCallback } from 'react';
import { Box } from '../../../../ui-kit/Containers';
import Button from '../../../utils/Button';
import { directions } from '../../../constants/constants';
import { setPaginationDirection } from '../../../reducers/pagination';
import { useDispatch } from 'react-redux';

const PaginationItem = ({ direction }) => {
    const dispatch = useDispatch();
    
    const handleClick = useCallback(() => {
        dispatch(setPaginationDirection({direction: direction}));
    }, [direction, dispatch]);

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
