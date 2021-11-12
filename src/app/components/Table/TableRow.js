import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import Box from '../../utils/Box';
import { setChosenRecord } from '../../reducers/recordInfoDemonstrator';

const TableRow = ({ rowData }) => {
    const dispatch = useDispatch();

    const handleCLick = useCallback(() => {
        dispatch(setChosenRecord({ rowData }));
    }, [dispatch, rowData]);

    /*
    * todo
    *  slice(0, 5) - в чем идея?
    * */

    const fieldValues = Object.values(rowData).slice(0, 5);

    return (
        <Box
            className="tableRow"
            onClick={handleCLick}
        >
            { fieldValues.map((item, index) =>
                <Box className="tableField" key={index}>{item}</Box>)
            }
        </Box>
    );
};

export default TableRow;
