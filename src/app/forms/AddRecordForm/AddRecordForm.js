import React from 'react';
import { Grid } from '../../../ui-kit/Containers';
import Id from './fields/Id';
import FirstName from './fields/FirstName';
import LastName from './fields/LastName';
import Email from './fields/Email';
import Phone from './fields/Phone';

const AddRecordForm = () => {
    return (
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            gridAutoRows="30px"
            padding="0px 0px 20px 0px"
        >
            <Id />
            <FirstName />
            <LastName />
            <Email />
            <Phone />
        </Grid>
    );
};

export default AddRecordForm;
