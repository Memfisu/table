import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '../../utils/Box';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFilter from './TableFilter';
import TablePagination from './TablePagination';
import { useDataSeparate } from '../../hooks/useDataSeparate';
import { resetChosenRecord } from '../../reducers/recordInfoDemonstrator';
import {
    chosenRecord,
    pagination,
    loadingStatus,
    filteredSortedData
} from '../../selectors/selectors';
import AddRecordForm from '../../forms/AddRecordForm/AddRecordForm';
import AddRecordButton from '../../forms/AddRecordForm/AddRecordButton';
import Loader from '../Loader/Loader';
import { statuses } from '../../constants/constants';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { IRowData } from '../../interfaces/interfaces';

const Table = () => {
    const dispatch = useDispatch();
    let data = useSelector(filteredSortedData);

    const chosenRecordInfo = useSelector(chosenRecord);
    const { currentPage } = useSelector(pagination);
    const status = useSelector(loadingStatus);
    /*
    * todo
    *  Сейчас это не хук, поэтому его не нужно назвать use***
    *  Это обыкновенный хелпер, который неплохо бы оберуть в useMemo, чтобы он не вычислялся заново при каждом рендере
    * */
    const separatedData = useDataSeparate({
        data,
        pageNumber: currentPage
    });
    const tableData =
        separatedData?.map((item: IRowData, index: number) => <TableRow key={index} rowData={item} />);

    const handleBlur = () => {
        if (chosenRecordInfo) dispatch(resetChosenRecord());
    }

    return (
        <Box className="tableBody" tabIndex={1} onBlur={handleBlur}>
            <Box className="tableInstruments">
                <TableFilter />
                <AddRecordButton />
            </Box>
            <AddRecordForm />
            <TableHeader />
            {status === statuses.EMPTY && <Loader />}
            {status === statuses.ERROR && <ErrorComponent />}
            {tableData}
            <TablePagination />
        </Box>
    );
};

export default Table;

