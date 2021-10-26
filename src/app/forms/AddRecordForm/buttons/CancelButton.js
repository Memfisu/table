import React from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';

const CancelButton = () => {
    return (
        <Box>
            <Button
                onClick={() => console.log('Hide AddRecordForm')}
                disabled={false}
                label="Cancel"
            />
        </Box>
    );
};

export default CancelButton;
