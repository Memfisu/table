import React from 'react';
import { Box } from '../../../ui-kit/Containers';
import PaginationItem from './fields/PaginationItem';
import { directions } from '../../constants/constants';

const TablePagination = () => {
    return (
        <Box padding="10px 0px 0px 0px" display="flex">
            <PaginationItem direction={directions.BACK} />
            <PaginationItem direction={directions.FORWARD} />
        </Box>
    );
};

export default TablePagination;
