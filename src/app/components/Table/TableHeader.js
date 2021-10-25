import React from 'react';
import TableHeaderItem from './fields/TableHeaderItem';

const TableHeader = () => {
    return <div>
        <TableHeaderItem itemName="id" />
        <TableHeaderItem itemName="firstName" />
        <TableHeaderItem itemName="lastName" />
        <TableHeaderItem itemName="email" />
        <TableHeaderItem itemName="phone"/>
    </div>;
};

export default TableHeader;
