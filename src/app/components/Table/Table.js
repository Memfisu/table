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
import AddRecordForm from '../../forms/AddRecordForm/AddRecordForm';
import AddRecordButton from '../../forms/AddRecordForm/AddRecordButton';
import { setFormVisibility } from '../../reducers/formDemonstrator';

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
        dispatch(setFormVisibility({ visibility: false }));
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

    const tableData = separatedData?.length ?
        separatedData?.map((item, index) => <TableRow key={index} rowData={item} />)
        : <Box className="informationWrapper">
            <Label>There is no data matching the filter</Label>
        </Box>;

    return (
        <Box className="tableBody" onBlur={handleBlur}>
            <Box className="tableInstruments">
                <TableFilter />
                <AddRecordButton />
            </Box>
            <AddRecordForm />
            <TableHeader />
            {loaded ?
                tableData
            : <Box className="informationWrapper">
                    <Label>Data is loading...</Label>
              </Box>
            }
            <TablePagination />
        </Box>
    );
};

export default Table;

