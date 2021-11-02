import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import ButtonWrapper from '../../hocs/ButtonWrapper';
import Button from '../../utils/Button';
import InputWrapper from '../../hocs/InputWrapper';
import Input from '../../utils/Input';

const TableFilter = () => {
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
            />
            <ButtonWrapper
                component={Button}
                onClick={() => console.log('filter')}
                disabled={false}
                label="Filter"
            />
        </Grid>
    );
};

export default TableFilter;
