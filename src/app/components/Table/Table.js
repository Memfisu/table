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
import { chosenRecord, loadedData, filterInfo } from '../../selectors/selectors';

const Table = () => {
    const { loaded } = useLoadTableData();
    const dispatch = useDispatch();
    let data = useSelector(loadedData);
    const chosenRecordInfo = useSelector(chosenRecord);

    const { filterString } = useSelector(filterInfo);
    if (filterString) data = data.filter(item =>
        item.id.toString().includes(filterString) ||
        item.firstName.includes(filterString) ||
        item.lastName.includes(filterString) ||
        item.email.includes(filterString) ||
        item.phone.toString().includes(filterString)
    );

    const temporaryPageNumber = 0; // pagination draft
    // if (back && temporaryPageNumber) temporaryPageNumber--;
    // if (forward && temporaryPageNumber < res?.length) temporaryPageNumber++;
    const separatedData = useDataSeparate({
        data,
        recordsAmount: '10',
        pageNumber: temporaryPageNumber
    });

    const handleBlur = () => {
        if (chosenRecordInfo) dispatch(resetChosenRecord());
    }

    const tableData = separatedData?.length ? separatedData?.map(
        (item, index) => <TableRow key={index} rowData={item} />) :
        <Label>There is no data matching the filter</Label>;

    return (
        <Box
            padding="0px 0px 20px 0px"
            tabIndex={1}
            onBlur={handleBlur}
        >
            <TableFilter />
            <TableHeader />
            {loaded ?
                tableData
                : <Label>Data is loading...</Label>
            }
            <TablePagination />
        </Box>
    );
};

export default Table;
