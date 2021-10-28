import React from 'react';
import { Box } from '../../../../ui-kit/Containers';

const TableField = ({ fieldData }) => {
    return (
        <Box padding="5px 0px 0px 5px">
            {fieldData}
        </Box>
    );
};

export default TableField;
