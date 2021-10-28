import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import TableField from './fields/TableField';
import { constants } from '../../constants/constants';

const TableRow = ({ rowData }) => {
    return (
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            padding="0px 0px 20px 0px"
            backgroundColor={constants.GREEN}
        >
            <TableField fieldData={rowData?.id} />
            <TableField fieldData={rowData?.firstName} />
            <TableField fieldData={rowData?.lastName} />
            <TableField fieldData={rowData?.email} />
            <TableField fieldData={rowData?.phone} />
        </Grid>
    );
};

export default TableRow;
