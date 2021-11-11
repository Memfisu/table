import Box from '../utils/Box';
import Button from '../utils/Button';
import React, { useCallback } from 'react';
import axios from 'axios';
import { addData, loadData } from '../reducers/dataLoader';
import { useDispatch, useSelector } from 'react-redux';
import { resetChosenRecord, setChosenRecord } from '../reducers/recordInfoDemonstrator';
import { loadedData, pagination } from '../selectors/selectors';
import { clearNewRecord } from '../reducers/newRecordAppendor';
import { directions } from '../constants/constants';
import { setSortingInfo } from '../reducers/dataSorter';
import store from '../store';
import { setFilterInfo } from '../reducers/dataFilter';
import { setCurrentPage } from '../reducers/pagination';
import { setLoader } from '../reducers/showLoader';

const useActions = () => {
    const dispatch = useDispatch();
    let tableData = useSelector(loadedData);
    const { currentPage } = useSelector(pagination);

    const dataLoad = useCallback(() => {
        dispatch(setLoader({ visibility: true }));
        axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                dispatch(loadData({data: res.data}));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(setLoader({ visibility: false }));
            });
    }, [dispatch]);

    const showAdditionalInfo = useCallback(() => {
        dispatch(setChosenRecord({ rowData: tableData[0] }));
    }, [tableData, dispatch]);

    const hideAdditionalInfo = useCallback(() => {
        dispatch(resetChosenRecord());
    }, [dispatch]);

    const addNewRecord = useCallback(() => {
        const newRecordData = {
            id: 101,
            firstName: 'Sue',
            lastName: 'Corson',
            email: 'DWhalley@in.gov',
            phone: '(612)211-6296'
        };
        dispatch(addData({ newRecord: newRecordData }));
        dispatch(clearNewRecord());
    }, [dispatch]);
    
    const sort = useCallback(() => {
        const compareDescending = (a, b) => {
            if (a[sortData.column] > b[sortData.column]) {
                return -1;
            }
            if (a[sortData.column] < b[sortData.column]) {
                return 1;
            }
            return 0;
        };

        const compareAscending = (a, b) => {
            if (a[sortData.column] > b[sortData.column]) {
                return 1;
            }
            if (a[sortData.column] < b[sortData.column]) {
                return -1;
            }
            return 0;
        };

        dispatch(setSortingInfo({ sortingInfo: {
                direction: directions.UP, // будет передаваться в зависимости от текущего направления
                column: 'id' // column будет передаваться в зависимости от нажатого столбца, это хардкод для данного прототипа
            }}));

        // в реальной ситуации должен использоваться useSelector
        const { dataSorter: sortData } = store.getState();
        
        const sortedData = tableData.sort(sortData.direction === directions.UP ?
            compareAscending : compareDescending);
        
        dispatch(loadData({data: sortedData}));
    }, [dispatch, tableData]);

    const filter = useCallback(() => {
        // строка для сравнения будет передаваться из инпута фильтра по нажатию на кнопку
        const filterString = '14';
        dispatch(setFilterInfo({filterInfo: filterString}))

        if (filterString) tableData = tableData.filter(item =>
            Object.values(item).slice(0, 5).some(elem => elem.toString().includes(filterString))
        );
    }, [dispatch, tableData]);

    const paginationForward = useCallback(() => {
        dispatch(setCurrentPage({currentPage: currentPage+1}));
    }, [currentPage, dispatch]);

    const paginationBack = useCallback(() => {
        dispatch(setCurrentPage({currentPage: currentPage-1}));
    }, [currentPage, dispatch]);

    return [
        dataLoad,
        showAdditionalInfo,
        hideAdditionalInfo,
        addNewRecord,
        sort,
        paginationForward,
        paginationBack,
        filter
    ];
};

let counter = 0;

const DataFlowTest = () => {
    const actions = useActions();

    const handleClick = () => {
        if (counter < actions.length) {
            actions[counter]();
            counter++;
        } else console.log('done!');
    };

    return (
        <Box className="dataFlowButtonWrapper">
            <Button
                className="dataFlowTest"
                onClick={handleClick}
                label="== Data Flow Test =="
            />
        </Box>
    )
};

export default DataFlowTest;