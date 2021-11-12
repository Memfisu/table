import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '../../utils/Box';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFilter from './TableFilter';
import TablePagination from './TablePagination';
import { useLoadTableData } from '../../hooks/useLoadTableData';
import { useDataSeparate } from '../../hooks/useDataSeparate';
import { resetChosenRecord } from '../../reducers/recordInfoDemonstrator';
import { chosenRecord, loadedData, filterInfo, pagination, sortInfo } from '../../selectors/selectors';
import { setCurrentPage } from '../../reducers/pagination';
import { getSortCallback } from '../../utils/getSortCallback';
import { loadData } from '../../reducers/dataLoader';
import AddRecordForm from '../../forms/AddRecordForm/AddRecordForm';
import AddRecordButton from '../../forms/AddRecordForm/AddRecordButton';
import { setFormVisibility } from '../../reducers/formDemonstrator';
import Loader from '../Loader/Loader';

const checkInclude = (obj, searchString) => Object.values(obj).slice(0, 5).some(elem => elem.toString().includes(searchString));

const Table = () => {
    useLoadTableData();
    const dispatch = useDispatch();
    let data = useSelector(loadedData);
    let sortData = useSelector(sortInfo);
    const chosenRecordInfo = useSelector(chosenRecord);
    const { currentPage } = useSelector(pagination);

    const { filterString } = useSelector(filterInfo);
    if (filterString) data = data.filter(item => checkInclude(item, filterString));

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

    const tableData =
        separatedData?.map((item, index) => <TableRow key={index} rowData={item} />);

    return (
        <Box className="tableBody" onBlur={handleBlur}>
            <Box className="tableInstruments">
                <TableFilter />
                <AddRecordButton />
            </Box>
            <AddRecordForm />
            <TableHeader />
            <Loader />
            {tableData}
            <TablePagination />
        </Box>
    );
};

export default Table;

