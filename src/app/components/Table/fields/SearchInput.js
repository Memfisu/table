import React from 'react';
import Input from '../../../../ui-kit/Input';
import { Box } from '../../../../ui-kit/Containers';

const SearchInput = () => {
    return (
        <Box padding="0px 10px 0px 0px">
            <Input
                placeholder="Enter data to filter"
                type="text"
            />
        </Box>
    );
};

export default SearchInput;
