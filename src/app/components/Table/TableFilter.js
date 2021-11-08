import React, {useCallback, useState} from 'react';
import { Grid } from '../../../ui-kit/Containers';
import ButtonWrapper from '../../hocs/ButtonWrapper';
import Button from '../../utils/Button';
import InputWrapper from '../../hocs/InputWrapper';
import Input from '../../utils/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loadedData } from '../../selectors/selectors';
import { loadData } from '../../reducers/dataLoader';

const TableFilter = () => {
    const dispatch = useDispatch();
    const tableData = useSelector(loadedData);
    const [inputValue, setInputValue] = useState('');

    const handleInputBlur = useCallback(event =>
        setInputValue(event.target.value),
        [] );

    const handleButtonClick = useCallback(() => {
        if (!inputValue) dispatch(loadData({data: tableData}));
        else {
            const filteredData = tableData.filter(item =>
                item.id.toString().includes(inputValue) ||
                item.firstName.includes(inputValue) ||
                item.lastName.includes(inputValue) ||
                item.email.includes(inputValue) ||
                item.phone.toString().includes(inputValue)
            );
            dispatch(loadData({data: filteredData}));
        }
    }, [dispatch, inputValue, tableData]);

    return (
        <Grid
            width="400px"
            padding="0px 0px 20px 0px"
            gridColumns="repeat(2, minmax(40px, 1fr))"
            gridAutoRows="25px"
        >
            <InputWrapper
                component={Input}
                placeholder="Enter data to filter"
                type="text"
                onBlur={handleInputBlur}
            />
            <ButtonWrapper
                component={Button}
                onClick={handleButtonClick}
                disabled={false}
                label="Filter"
            />
        </Grid>
    );
};

export default TableFilter;
