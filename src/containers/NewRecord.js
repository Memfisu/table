import React from 'react';
import AddRecordForm from '../app/forms/AddRecordForm/AddRecordForm';
import NewRecordButton from '../app/components/NewRecordButton/NewRecordButton';
import AddRecordButton from '../app/forms/AddRecordForm/buttons/AddRecordButton';
import CancelButton from '../app/forms/AddRecordForm/buttons/CancelButton';

const NewRecord = () => {
    return (
        <div>
            <NewRecordButton />
            <AddRecordForm />
            <AddRecordButton />
            <CancelButton />
        </div>
    );
};

export default NewRecord;
