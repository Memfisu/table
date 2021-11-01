import React, { useCallback, useState } from 'react';
import { Box } from './Containers';
import { Label } from './Labels';
import { colors } from '../app/constants/constants';

const Input = ({
  type,
  placeholder,
  validateCallback,
  dispatchCallback
}) => {
    const [isError, setError] = useState(false);
    
    const handleBlur = useCallback((event) => {
        setError(!validateCallback(event.target.value));
        if (!isError && dispatchCallback) dispatchCallback(event.target.value);
    }, [dispatchCallback, isError, validateCallback]);

    return (
        <Box>
            <input
                type={type}
                placeholder={placeholder}
                onBlur={handleBlur}
            />
            {isError &&
            <Box margin="5px 0px 20px 0px">
                <Label color={colors.RED}>
                    Check the data
                </Label>
            </Box>}
        </Box>
    );

};

export default Input;
