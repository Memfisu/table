import React from 'react';
import Box from '../../utils/Box';
import PaginationItem from './fields/PaginationItem';
import { directions } from '../../constants/constants';

const TablePagination = () => {
    return (
        <Box className="tablePagination">
            <PaginationItem direction={directions.BACK} />
            <PaginationItem direction={directions.FORWARD} />
        </Box>
    );
};

export default TablePagination;
