import React from 'react';
import { Box } from '../ui-kit/Containers';
import TableHeader from '../app/components/Table/TableHeader';
import TableRow from '../app/components/Table/TableRow';
import TableFilter from '../app/components/Table/TableFilter';
import TablePagination from '../app/components/Table/TablePagination';
import { useGetTableData } from "../app/hooks/useGetTableData";
import { Label } from "../ui-kit/Labels";

const Table = () => {
    const { loaded, data } = useGetTableData();

    return (
        <Box padding="0px 0px 20px 0px">
            <TableFilter />
            <TableHeader />
            {loaded ?
                data.map((item, index) => <TableRow key={index} rowData={item} />)
                : <Label>Data is loading...</Label>
            }
            <TablePagination />
        </Box>
    );
};

export default Table;
