import React, { useCallback, useState } from 'react';
import { Box } from './Containers';
import { Label } from './Labels';
import { colors } from '../app/constants/constants';
import { dispatch } from '../app/store';
import { setNewRecord } from '../app/reducers/newRecordAppendor';

const Input = ({
  name,
  type,
  placeholder,
  validateCallback
}) => {
    const [isError, setError] = useState(false);
    
    const handleBlur = useCallback((event) => {
        setError(!validateCallback(event.target.value));
        if (!isError) dispatch(setNewRecord({[name]: event.target.value}));
    }, [isError, name, validateCallback]);

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
