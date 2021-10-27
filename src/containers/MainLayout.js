import React from 'react';
import { Box } from '../ui-kit/Containers';
import NewRecord from './NewRecord';
import RecordInfo from './RecordInfo';
import Table from './Table';
import { temporaryData } from '../app/constants/constants';

const MainLayout = () => {
    return (
        <Box padding="50px">
            <NewRecord />
            <Table />
            <RecordInfo chosenRecord={temporaryData[0]} />
        </Box>
    );
};

export default MainLayout;
