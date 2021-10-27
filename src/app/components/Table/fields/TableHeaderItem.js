import React from 'react';
import { Box } from '../../../../ui-kit/Containers';

const TableHeaderItem = ({ itemName }) => {
    return (
        <Box
            padding="10px 0px 0px 5px"
            onClick={() => console.log('sorting')}
        >
            {itemName}
        </Box>
    );
};

export default TableHeaderItem;
