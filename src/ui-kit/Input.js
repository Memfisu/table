import React, { useState } from 'react';
import { Box } from './Containers';
import { Label } from './Labels';
import { colors } from '../app/constants/constants';

const Input = ({
  type,
  placeholder,
  validateCallback
}) => {
    const [isError, setError] = useState(false);
    const validate = (event) => {
        setError(!validateCallback(event.target.value));
    }

    return (
        <Box>
            <input
                type={type}
                placeholder={placeholder}
                onBlur={validate}
            />
            {isError &&
            <Box margin="20px 0px">
                <Label color={colors.RED}>
                    Check the data
                </Label>
            </Box>}
        </Box>
    );

};

export default Input;
