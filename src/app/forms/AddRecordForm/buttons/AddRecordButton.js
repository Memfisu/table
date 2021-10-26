import React from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';

const AddRecordButton = () => {
    return (
        <Box padding="0px 20px 0px 0px">
            <Button
                onClick={() => console.log('Add new record to the table')}
                disabled={false}
                label="Add record"
            />
        </Box>
    );
};

export default AddRecordButton;
