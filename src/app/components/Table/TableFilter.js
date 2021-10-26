import React from 'react';
import { Box } from '../../../ui-kit/Containers';
import SearchInput from './fields/SearchInput';
import SearchButton from './buttons/SearchButton';

const TableFilter = () => {
    return (
        <Box
            padding="0px 0px 20px 0px"
            display="flex"
        >
            <SearchInput />
            <SearchButton />
        </Box>
    );
};

export default TableFilter;
