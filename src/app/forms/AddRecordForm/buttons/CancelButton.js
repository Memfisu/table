import React, { useCallback } from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';

const CancelButton = ({ toggleFormVisibility }) => {
    const handleClick = useCallback(() => {
        toggleFormVisibility(false);
    }, [toggleFormVisibility]);

    return (
        <Box>
            <Button
                onClick={handleClick}
                disabled={false}
                label="Cancel"
            />
        </Box>
    );
};

export default CancelButton;
