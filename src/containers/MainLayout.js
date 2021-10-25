import React from 'react';
import NewRecord from './NewRecord';
import RecordInfo from './RecordInfo';
import Table from './Table';

const MainLayout = () => {
    return (
        <div>
            <NewRecord />
            <Table />
            <RecordInfo />
        </div>
    );
};

export default MainLayout;
