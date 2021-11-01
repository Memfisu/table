import React, { useState } from 'react';
import { Box } from '../ui-kit/Containers';
import AddRecordForm from '../app/forms/AddRecordForm/AddRecordForm';
import NewRecordButton from '../app/forms/AddRecordForm/buttons/NewRecordButton';

const NewRecord = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const checkIfClicked = isClicked => {
        setFormVisible(isClicked);
    };

    return (
        <Box padding="0px 0px 20px 0px">
            {isFormVisible ?
                <AddRecordForm checkIfClicked={checkIfClicked} /> :
                <NewRecordButton checkIfClicked={checkIfClicked} />
            }
        </Box>
    );
};

export default NewRecord;
