import React from 'react';
import Box from '../utils/Box';
import RecordInfo from '../components/RecordInfo/RecordInfo';
import Table from '../components/Table/Table';
import DataFlowTest from '../components/DataFlowTest';
import AddRecordForm from '../forms/AddRecordForm/AddRecordForm';

const MainLayout = () => {
    return (
        <Box className="main">
            <DataFlowTest />
            <AddRecordForm />
            <Table />
            <RecordInfo />
        </Box>
    );
};

export default MainLayout;
