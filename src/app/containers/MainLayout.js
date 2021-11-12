import React from 'react';
import Box from '../utils/Box';
import RecordInfo from '../components/RecordInfo/RecordInfo';
import Table from '../components/Table/Table';
import DataFlowTest from '../components/DataFlowTest';
import { useDispatch } from 'react-redux';
import { init } from '../reducers/dataLoader';

const MainLayout = () => {
    const dispatch = useDispatch();
    dispatch(init());

    return (
        <Box className="main">
            <DataFlowTest />
            <Table />
            <RecordInfo />
        </Box>
    );
};

export default MainLayout;
