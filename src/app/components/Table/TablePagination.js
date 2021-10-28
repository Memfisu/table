import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import PaginationItem from './fields/PaginationItem';
import { directions } from '../../constants/constants';

const TablePagination = () => {
    return (
        <Grid
            width="100px"
            padding="10px 0px 0px 0px"
            gridColumns="repeat(2, minmax(40px, 1fr))"
        >
            <PaginationItem direction={directions.BACK} />
            <PaginationItem direction={directions.FORWARD} />
        </Grid>
    );
};

export default TablePagination;
