import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import Box from '../../utils/Box';
import { setChosenRecord } from '../../reducers/recordInfoDemonstrator';
import { headerNames } from '../../constants/constants';

interface Address {
    city: string,
    state: string,
    streetAddress: string,
    zip: number
}

interface RowData {
    description: string,
    email: string,
    firstName: string,
    id: number,
    lastName: string,
    phone: string,
    address: Address
}

type Props = {
    rowData: RowData
}

const TableRow = ({ rowData }: Props) => {
    const dispatch = useDispatch();
    
    const handleCLick = useCallback(() => {
        dispatch(setChosenRecord({ rowData }));
    }, [dispatch, rowData]);

    const preparedRow = Object.entries(rowData).filter(([key]) => headerNames.includes(key));

    return (
        <Box
            className="tableRow"
            onClick={handleCLick}
        >
            {preparedRow.map(([key, value]) =>
                <Box className="tableField" key={key}>{value}</Box>)
            }
        </Box>
    );
};

export default TableRow;
