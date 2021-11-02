import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import TableHeaderItem from './fields/TableHeaderItem';
import {colors, headerNames} from '../../constants/constants';

const TableHeader = () => {
    return (
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            gridAutoRows="50px"
            backgroundColor={colors.BLUE}
        >
            {headerNames.map((item, index) =>
                <TableHeaderItem key={index} itemName={item}/>
            )}
        </Grid>
    );
};

export default TableHeader;
