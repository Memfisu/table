import React from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';

const SearchButton = () => {
    return (
        <Box>
            <Button
                onClick={() => console.log('filter')}
                disabled={false}
                label="Filter"
            />
        </Box>
    );
};

export default SearchButton;
