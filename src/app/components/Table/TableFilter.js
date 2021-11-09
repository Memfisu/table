import React, {useCallback, useState} from 'react';
import { Grid } from '../../../ui-kit/Containers';
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
        <Grid
            width="400px"
            padding="0px 0px 20px 0px"
            gridColumns="repeat(2, minmax(40px, 1fr))"
            gridAutoRows="25px"
        >
            <Input
                placeholder="Enter data to filter"
                type="text"
                onBlur={handleInputBlur}
            />
            <Button
                onClick={handleButtonClick}
                label="Filter"
            />
        </Grid>
    );
};

export default TableFilter;
