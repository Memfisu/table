import React, {useCallback, useState} from 'react';
import Box from '../../utils/Box';
import Button from '../../utils/Button';
import Input from '../../utils/Input';
import { useDispatch } from 'react-redux';
import { setFilterInfo } from '../../reducers/dataFilter';

const TableFilter = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleInputBlur = useCallback(event =>
        setInputValue(event.target.value),
        [] );

    const handleButtonClick = useCallback(() =>
        dispatch(setFilterInfo({filterInfo: inputValue})),
        [dispatch, inputValue]);

    return (
        <Box className="tableFilter">
            <Input
                placeholder="Enter data to filter"
                type="text"
                onBlur={handleInputBlur}
            />
            <Button
                onClick={handleButtonClick}
                label="Filter"
            />
        </Box>
    );
};

export default TableFilter;
