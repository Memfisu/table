import React, { useCallback } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';

const EmitterButton = () => {

    // todo реализовать сценарий из саги по нажатию на кнопку

    const handleClick = useCallback(() => {
        console.log('dispatchClick');
    }, []);

    return (
        <Box className="formWrapper">
            <Button
                className="commonButton"
                onClick={handleClick}
                label="Emitter Button"
            />
        </Box>
    )
}

export default EmitterButton;