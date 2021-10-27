import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import TableHeaderItem from './fields/TableHeaderItem';
import { constants } from '../../constants/constants';

const TableHeader = () => {
    return (
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            gridAutoRows="50px"
            backgroundColor={constants.BLUE}
        >
            <TableHeaderItem itemName="id" />
            <TableHeaderItem itemName="firstName" />
            <TableHeaderItem itemName="lastName" />
            <TableHeaderItem itemName="email" />
            <TableHeaderItem itemName="phone"/>
        </Grid>
    );
};

export default TableHeader;
