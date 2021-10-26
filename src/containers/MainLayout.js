import React from 'react';
import { Box } from '../ui-kit/Containers';
import NewRecord from './NewRecord';
import RecordInfo from './RecordInfo';
import Table from './Table';

const MainLayout = () => {
    return (
        <Box padding="50px">
            <NewRecord />
            <Table />
            <RecordInfo />
        </Box>
    );
};

export default MainLayout;
