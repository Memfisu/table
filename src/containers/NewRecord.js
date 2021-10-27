import React, { useState } from 'react';
import { Box } from '../ui-kit/Containers';
import AddRecordForm from '../app/forms/AddRecordForm/AddRecordForm';
import NewRecordButton from '../app/forms/AddRecordForm/buttons/NewRecordButton';
import AddRecordButton from '../app/forms/AddRecordForm/buttons/AddRecordButton';
import CancelButton from '../app/forms/AddRecordForm/buttons/CancelButton';

const NewRecord = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const checkIfClicked = isClicked => {
        setFormVisible(isClicked);
    };

    return (
        <Box padding="0px 0px 20px 0px">
            {!isFormVisible && <NewRecordButton checkIfClicked={checkIfClicked} />}
            {isFormVisible &&
                <Box>
                    <AddRecordForm />
                    <Box display="flex" padding="0px 0px 20px 0px">
                        <AddRecordButton />
                        <CancelButton checkIfClicked={checkIfClicked} />
                    </Box>
                </Box>
            }
        </Box>
    );
};

export default NewRecord;
