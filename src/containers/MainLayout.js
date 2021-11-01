import React from 'react';
import { Box } from '../ui-kit/Containers';
import RecordInfo from './RecordInfo';
import Table from './Table';
import AddRecordForm from '../app/forms/AddRecordForm/AddRecordForm';

const MainLayout = () => {
    return (
        <Box padding="50px">
            <AddRecordForm />
            <Table />
            <RecordInfo />
        </Box>
    );
};

export default MainLayout;
