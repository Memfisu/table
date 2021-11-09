import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from './Box';
import Label from './Label';
import { setNewRecord } from '../reducers/newRecordAppendor';

const InputWithValidation = ({
  name,
  type,
  placeholder,
  validate
}) => {
    const dispatch = useDispatch();
    
    const [isError, setError] = useState(false);
    const [value, setValue] = useState(false);
    
    const handleBlur = useCallback((event) => {
        setError(!validate(name, event.target.value));
        setValue(event.target.value);
    }, [name, validate]);
    
    useEffect(() => {
        if (!isError) dispatch(setNewRecord({[name]: value}));
        else dispatch(setNewRecord({[name]: null}));
    }, [dispatch, isError, name, value]);

    return (
        <Box>
            <input
                type={type}
                placeholder={placeholder}
                onBlur={handleBlur}
            />
            {isError &&
            <Box className="errorBox">
                <Label className="redText">
                    Check the data
                </Label>
            </Box>}
        </Box>
    );

};

export default InputWithValidation;
