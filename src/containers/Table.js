import React from 'react';
import { Box } from '../ui-kit/Containers';
import TableHeader from '../app/components/Table/TableHeader';
import TableRow from '../app/components/Table/TableRow';
import TableFilter from '../app/components/Table/TableFilter';
import TablePagination from '../app/components/Table/TablePagination';

const temporaryData = [
    {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296'
    },
    {
        id: 102,
        firstName: 'Joe',
        lastName: 'Dow',
        email: 'JDow@in.gov',
        phone: '(612)333-333'
    }
];

const Table = () => {
    return (
        <Box padding="0px 0px 20px 0px">
            <TableFilter />
            <TableHeader />
            {temporaryData.map(item => <TableRow rowData={item} />)}
            <TablePagination />
        </Box>
    );
};

export default Table;
