import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '../../utils/Box';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFilter from './TableFilter';
import TablePagination from './TablePagination';
import { useLoadTableData } from '../../hooks/useLoadTableData';
import Label from '../../utils/Label';
import { useDataSeparate } from '../../hooks/useDataSeparate';
import { resetChosenRecord } from '../../reducers/recordInfoDemonstrator';
import { chosenRecord, loadedData, filterInfo, pagination, sortInfo } from '../../selectors/selectors';
import { setCurrentPage } from '../../reducers/pagination';
import { getSortCallback } from '../../utils/getSortCallback';
import { loadData } from '../../reducers/dataLoader';
import AddRecordForm from "../../forms/AddRecordForm/AddRecordForm";

const Table = () => {
    const { loaded } = useLoadTableData();
    const dispatch = useDispatch();
    let data = useSelector(loadedData);
    let sortData = useSelector(sortInfo);
    const chosenRecordInfo = useSelector(chosenRecord);
    const { currentPage } = useSelector(pagination);

    const { filterString } = useSelector(filterInfo);
    if (filterString) data = data.filter(item =>
        Object.values(item).slice(0, 5).some(elem => elem.toString().includes(filterString))
    );

    useEffect(() => {
        dispatch(setCurrentPage({currentPage: 0}));
    }, [dispatch]);
    
    useEffect(() => {
        const sortCallback = getSortCallback({
            key: sortData?.column,
            direction: sortData?.direction
        });

        const sortedData = data.sort(sortCallback);
        dispatch(loadData({data: sortedData}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, sortData?.column, sortData?.direction]);

    const separatedData = useDataSeparate({
        data,
        pageNumber: currentPage
    });

    const handleBlur = () => {
        if (chosenRecordInfo) dispatch(resetChosenRecord());
    }

    const tableData = separatedData?.length ? separatedData?.map(
        (item, index) => <TableRow key={index} rowData={item} />) :
        <Label>There is no data matching the filter</Label>;

    return (
        <Box className="tableBody" onBlur={handleBlur}>
            <Box className="tableInstruments">
                <TableFilter />
                <AddRecordForm />
            </Box>
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

