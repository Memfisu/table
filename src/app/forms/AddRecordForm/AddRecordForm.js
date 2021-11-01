import React from 'react';
import { Box, Grid } from '../../../ui-kit/Containers';
import Id from './fields/Id';
import FirstName from './fields/FirstName';
import LastName from './fields/LastName';
import Email from './fields/Email';
import Phone from './fields/Phone';
import AddRecordButton from "./buttons/AddRecordButton";
import CancelButton from "./buttons/CancelButton";

const AddRecordForm = ({ checkIfClicked }) => {
    const dispatchCallback = value => console.log(value);

    return (
        <Box>
        <Grid
            gridColumns="repeat(5, minmax(100px, 1fr))"
            gridAutoRows="30px"
            padding="0px 0px 20px 0px"
        >
            <Id dispatchCallback={dispatchCallback} />
            <FirstName />
            <LastName />
            <Email />
            <Phone />
        </Grid>
        <Grid
            width="220px"
            padding="25px 0px 5px 0px"
            gridColumns="repeat(2, minmax(40px, 1fr))"
        >
            <AddRecordButton disabled={false} />
            <CancelButton checkIfClicked={checkIfClicked} />
        </Grid>
    </Box>
    );
};

export default AddRecordForm;
