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
            {Object.values(rowData).map((item, index) =>
                {
                    return <TableField key={index} fieldData={item} />
                }
            )}
        </Grid>
    );
};

export default TableRow;
