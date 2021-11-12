import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '../../utils/Box';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFilter from './TableFilter';
import TablePagination from './TablePagination';
import { useDataSeparate } from '../../hooks/useDataSeparate';
import { resetChosenRecord } from '../../reducers/recordInfoDemonstrator';
import { chosenRecord, loadedData, filterInfo, pagination } from '../../selectors/selectors';
import AddRecordForm from '../../forms/AddRecordForm/AddRecordForm';
import AddRecordButton from '../../forms/AddRecordForm/AddRecordButton';
import Loader from '../Loader/Loader';

const checkInclude = (obj, searchString) => Object.values(obj).some(elem => elem.toString().includes(searchString));

const Table = () => {
    const dispatch = useDispatch();
    let data = useSelector(loadedData);
    const chosenRecordInfo = useSelector(chosenRecord);
    const { currentPage } = useSelector(pagination);

    const { filterString } = useSelector(filterInfo);
    if (filterString) data = data.filter(item => checkInclude(item, filterString));

    const separatedData = useDataSeparate({
        data,
        pageNumber: currentPage
    });
    const tableData =
        separatedData?.map((item, index) => <TableRow key={index} rowData={item} />);

    const handleBlur = () => {
        if (chosenRecordInfo) dispatch(resetChosenRecord());
    }

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

