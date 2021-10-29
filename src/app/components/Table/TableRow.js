import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import TableField from './fields/TableField';
import { colors } from '../../constants/constants';
import { dispatch } from '../../store';
import { setChosenRecord } from '../../reducers/recordInfoDemonstrator';

const TableRow = ({ rowData }) => {
    const handleCLick = () => {
        dispatch(setChosenRecord({ rowData }));
    }

    return (
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            padding="0px 0px 20px 0px"
            backgroundColor={colors.GREEN}
            onClick={handleCLick}
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
