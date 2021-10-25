import React from 'react';
import TableHeader from '../app/components/Table/TableHeader';
import TableRow from '../app/components/Table/TableRow';
import TableFilter from '../app/components/Table/TableFilter';

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
        <div>
            <TableFilter />
            <TableHeader />
            {temporaryData.map(item => <TableRow rowData={item} />)}
        </div>
    );
};

export default Table;
