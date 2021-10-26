import React from 'react';
import { Box } from '../ui-kit/Containers';
import AddRecordForm from '../app/forms/AddRecordForm/AddRecordForm';
import NewRecordButton from '../app/forms/AddRecordForm/buttons/NewRecordButton';
import AddRecordButton from '../app/forms/AddRecordForm/buttons/AddRecordButton';
import CancelButton from '../app/forms/AddRecordForm/buttons/CancelButton';

const NewRecord = () => {
    return (
        <Box padding="0px 0px 20px 0px">
            <NewRecordButton />
            <AddRecordForm />
            <Box display="flex">
                <AddRecordButton />
                <CancelButton />
            </Box>
        </Box>
    );
};

export default NewRecord;
