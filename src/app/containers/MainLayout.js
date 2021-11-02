import React from 'react';
import { Box } from '../../ui-kit/Containers';
import RecordInfo from '../components/RecordInfo/RecordInfo';
import Table from '../components/Table/Table';
import DataFlowTest from '../components/DataFlowTest';
import AddRecordForm from '../forms/AddRecordForm/AddRecordForm';

const MainLayout = () => {
    return (
        <Box padding="50px">
            <DataFlowTest />
            <AddRecordForm />
            <Table />
            <RecordInfo />
        </Box>
    );
};

export default MainLayout;
