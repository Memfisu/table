import React from 'react';
import { Box } from '../ui-kit/Containers';
import TableHeader from '../app/components/Table/TableHeader';
import TableRow from '../app/components/Table/TableRow';
import TableFilter from '../app/components/Table/TableFilter';
import TablePagination from '../app/components/Table/TablePagination';
import { useLoadTableData } from '../app/hooks/useLoadTableData';
import { Label } from '../ui-kit/Labels';
import {useDataSeparate} from '../app/hooks/useDataSeparate';
import { connect } from 'react-redux';

const Table = ({ dataLoader: data }) => {
    const { loaded } = useLoadTableData();
    const separatedData = useDataSeparate({ data });

    // pagination draft
    const temporaryPageNumber = 0;
    // if (back && temporaryPageNumber) temporaryPageNumber--;
    // if (forward && temporaryPageNumber < res?.length) temporaryPageNumber++;

    return (
        <Box padding="0px 0px 20px 0px">
            <TableFilter />
            <TableHeader />
            {loaded ?
                separatedData[temporaryPageNumber]?.map((item, index) => <TableRow key={index} rowData={item} />)
                : <Label>Data is loading...</Label>
            }
            <TablePagination />
        </Box>
    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Table);

