import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import TableField from './fields/TableField';
import colors from "../../constants/colors";

const TableRow = ({ rowData }) => {
    return (
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            padding="0px 0px 20px 0px"
            backgroundColor={colors.GREEN}
        >
            {Object.values(rowData).map(item => <TableField fieldData={item} />)}
        </Grid>
    );
};

export default TableRow;
