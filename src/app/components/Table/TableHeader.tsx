import React from 'react';
import Box from '../../utils/Box';
import TableHeaderItem from './fields/TableHeaderItem';
import { headerNames } from '../../constants/constants';

const TableHeader = () => {
    return (
        <Box className="tableHeader">
            {headerNames.map((item, index) =>
                <TableHeaderItem key={index} itemName={item}/>
            )}
        </Box>
    );
};

export default TableHeader;
