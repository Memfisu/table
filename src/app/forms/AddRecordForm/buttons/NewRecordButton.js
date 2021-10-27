import React, { useCallback } from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';

const NewRecordButton = ({ checkIfClicked }) => {
    const handleClick = useCallback(() => {
        checkIfClicked(true);
    }, [checkIfClicked]);

    return (
        <Box padding="0px 0px 20px 0px">
            <Button
                onClick={handleClick}
                disabled={false}
                label="New record"
            />
        </Box>
     );
};

export default NewRecordButton;
