import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import Box from '../../utils/Box';
import { setChosenRecord } from '../../reducers/recordInfoDemonstrator';
import { headerNames } from '../../constants/constants';
import { IRowData } from '../../interfaces/interfaces';

type Props = {
    rowData: IRowData
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
