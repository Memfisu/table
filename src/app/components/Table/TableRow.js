import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { Grid } from '../../../ui-kit/Containers';
import TableField from './fields/TableField';
import { colors } from '../../constants/constants';
import { setChosenRecord } from '../../reducers/recordInfoDemonstrator';

const TableRow = ({ rowData }) => {
    const dispatch = useDispatch();
    
    const handleCLick = useCallback(() => {
        dispatch(setChosenRecord({ rowData }));
    }, [dispatch, rowData]);

    const fieldValues = Object.values(rowData).slice(0, 5);

    return (
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            padding="0px 0px 20px 0px"
            backgroundColor={colors.GREEN}
            onClick={handleCLick}
        >
            { fieldValues.map((item, index) => <TableField key={index} fieldData={item} />) }
        </Grid>
    );
};

export default TableRow;
