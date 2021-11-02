import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '../../../ui-kit/Containers';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFilter from './TableFilter';
import TablePagination from './TablePagination';
import { useLoadTableData } from '../../hooks/useLoadTableData';
import { Label } from '../../../ui-kit/Labels';
import {useDataSeparate} from '../../hooks/useDataSeparate';
import { resetChosenRecord } from '../../reducers/recordInfoDemonstrator';
import { chosenRecord, loadedData } from '../../selectors/selectors';

const Table = () => {
    const { loaded } = useLoadTableData();
    const dispatch = useDispatch();
    const data = useSelector(loadedData);
    const chosenRecordInfo = useSelector(chosenRecord);
    const separatedData = useDataSeparate({ data });

    // pagination draft
    const temporaryPageNumber = 0;
    // if (back && temporaryPageNumber) temporaryPageNumber--;
    // if (forward && temporaryPageNumber < res?.length) temporaryPageNumber++;

    const handleBlur = () => {
        if (chosenRecordInfo) dispatch(resetChosenRecord());
    }

    return (
        <Box
            padding="0px 0px 20px 0px"
            tabIndex={1}
            onBlur={handleBlur}
        >
            <TableFilter />
            <TableHeader />
            {loaded ?
                separatedData[temporaryPageNumber]?.map((item, index) => <TableRow key={index} rowData={item} />)
                : <Label>Data is loading...</Label>
            }
            <TablePagination />
        </Box>
    );
};

export default Table;

