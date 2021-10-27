import React from 'react';
import { Box } from '../ui-kit/Containers';
import TableHeader from '../app/components/Table/TableHeader';
import TableRow from '../app/components/Table/TableRow';
import TableFilter from '../app/components/Table/TableFilter';
import TablePagination from '../app/components/Table/TablePagination';
import { temporaryData } from '../app/constants/constants';

const Table = () => {
    return (
        <Box padding="0px 0px 20px 0px">
            <TableFilter />
            <TableHeader />
            {temporaryData.map((item, index) =>
                {
                    return <TableRow key={index} rowData={item} />
                }
            )}
            <TablePagination />
        </Box>
    );
};

export default Table;
