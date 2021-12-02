import React, { useCallback, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Box from './Box';
import Label from './Label';
import { setNewRecord } from '../reducers/newRecordAppendor';
import { newRecord } from '../selectors/selectors';

type Props = {
    name: string,
    placeholder: string,
    validate: (name: string, value: string) => RegExpMatchArray | null
}

const InputWithValidation = ({
  name,
  placeholder,
  validate
}: Props) => {
    const dispatch = useDispatch();
    const newRecordData = useSelector(newRecord);
    
    const [isError, setError] = useState(false);
    const [value, setValue] = useState('');
    
    const handleChange = useCallback((event) => {
        setError(!validate(name, event.target.value));
        setValue(event.target.value);
    }, [name, validate]);
    
    useEffect(() => {
        if (!isError) dispatch(setNewRecord({[name]: value}));
        else dispatch(setNewRecord({[name]: null}));
    }, [dispatch, isError, name, value]);

    useEffect(() => {
        if (Object.values(newRecordData).every(item => !item)) setValue('');
    }, [newRecordData]);

    return (
        <Box>
            <input
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
            {isError &&
            <Box className="errorBox">
                <Label>
                    Check the data
                </Label>
            </Box>}
        </Box>
    );

};

export default InputWithValidation;
