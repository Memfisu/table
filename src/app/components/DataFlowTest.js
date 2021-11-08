import { Box } from '../../ui-kit/Containers';
import ButtonWrapper from '../hocs/ButtonWrapper';
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

const useActions = () => {
    const dispatch = useDispatch();
    let tableData = useSelector(loadedData);
    const { currentPage } = useSelector(pagination);

    const showLoader = useCallback(() => {
        console.log('loading...');
    }, []);

    const hideLoader = useCallback(() => {
        console.log('loaded');
    }, []);

    const dataLoad = useCallback(() => {
        showLoader();
        axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                dispatch(loadData({data: res.data}));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                hideLoader();
            });
    }, [dispatch, hideLoader, showLoader]);

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

        showLoader();
        dispatch(setSortingInfo({ sortingInfo: {
                direction: directions.UP, // будет передаваться в зависимости от текущего направления
                column: 'id' // column будет передаваться в зависимости от нажатого столбца, это хардкод для данного прототипа
            }}));

        // в реальной ситуации должен использоваться useSelector
        const { dataSorter: sortData } = store.getState();
        
        const sortedData = tableData.sort(sortData.direction === directions.UP ?
            compareAscending : compareDescending);
        
        dispatch(loadData({data: sortedData}));
        hideLoader();
    }, [dispatch, hideLoader, showLoader, tableData]);

    const filter = useCallback(() => {
        showLoader();
        // строка для сравнения будет передаваться из инпута фильтра по нажатию на кнопку
        const filterString = '14';
        dispatch(setFilterInfo({filterInfo: filterString}))

        if (filterString) tableData = tableData.filter(item =>
            item.id.toString().includes(filterString) ||
            item.firstName.includes(filterString) ||
            item.lastName.includes(filterString) ||
            item.email.includes(filterString) ||
            item.phone.toString().includes(filterString)
        );
        hideLoader();
    }, [dispatch, hideLoader, showLoader, tableData]);

    const paginationForward = useCallback(() => {
        showLoader();
        dispatch(setCurrentPage({currentPage: currentPage+1}));
        hideLoader();
    }, [currentPage, dispatch, hideLoader, showLoader]);

    const paginationBack = useCallback(() => {
        showLoader();
        dispatch(setCurrentPage({currentPage: currentPage-1}));
        hideLoader();
    }, [currentPage, dispatch, hideLoader, showLoader]);

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
        <Box padding="0px 0px 20px 0px">
            <ButtonWrapper
                component={Button}
                onClick={handleClick}
                disabled={false}
                label="== Data Flow Test =="
            />
        </Box>
    )
};

export default DataFlowTest;