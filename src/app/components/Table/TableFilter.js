import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import SearchInput from './fields/SearchInput';
import SearchButton from './buttons/SearchButton';

const TableFilter = () => {
    return (
        <Grid
            width="400px"
            padding="0px 0px 20px 0px"
            gridColumns="repeat(2, minmax(40px, 1fr))"
        >
            <SearchInput />
            <SearchButton />
        </Grid>
    );
};

export default TableFilter;
