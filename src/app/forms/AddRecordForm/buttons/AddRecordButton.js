import React from 'react';
import Button from '../../../../ui-kit/Button';

const AddRecordButton = () => {
    return (
        <Button
            onClick={() => console.log('Add new record to the table')}
            disabled={false}
            label="Add record"
        />
    );
};

export default AddRecordButton;
