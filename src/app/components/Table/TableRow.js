import React from 'react';
import TableField from './fields/TableField';

const TableRow = ({ rowData }) => {
    return <div>
        {Object.values(rowData).map(item => <TableField fieldData={item} />)}
    </div>;
};

export default TableRow;
