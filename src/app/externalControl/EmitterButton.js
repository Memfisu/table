import React, { useCallback } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';
import { setEmitterDemonstration } from '../reducers/dataLoader';
import { useDispatch } from 'react-redux';

const EmitterButton = () => {
    const dispatch = useDispatch();
    
    const handleClick = useCallback(() => {
        dispatch(setEmitterDemonstration());
    }, [dispatch]);

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