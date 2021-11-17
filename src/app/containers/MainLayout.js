import React from 'react';
import Box from '../utils/Box';
import RecordInfo from '../components/RecordInfo/RecordInfo';
import Table from '../components/Table/Table';

const MainLayout = () => {
    return (
        <Box className="main">
            <Table />
            <RecordInfo />
        </Box>
    );
};

export default MainLayout;
