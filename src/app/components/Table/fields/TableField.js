import React from 'react';
import { Box } from '../../../../ui-kit/Containers';

const TableField = ({ fieldData }) => {
    return (
        <Box
            padding="5px 0px 0px 5px"
            cursor="pointer"
            textOverflow="hidden"
        >
            {fieldData}
        </Box>
    );
};

export default TableField;
