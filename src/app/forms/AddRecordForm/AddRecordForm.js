import React, { useState } from 'react';
import { Box, Grid } from '../../../ui-kit/Containers';
import Id from './fields/Id';
import FirstName from './fields/FirstName';
import LastName from './fields/LastName';
import Email from './fields/Email';
import Phone from './fields/Phone';
import AddRecordButton from './buttons/AddRecordButton';
import CancelButton from './buttons/CancelButton';
import Button from '../../../ui-kit/Button';
import { connect } from 'react-redux';

const AddRecordForm = ({ newRecordAppendor: newRecordData}) => {
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = isClicked => {
        setFormVisible(isClicked);
    };

    const isButtonDisabled = Object.keys(newRecordData).length !== 5 ||
        Object.values(newRecordData).some(item => !item);

    if (!isFormVisible) {
        return (
            <Box padding="0px 0px 20px 0px">
                <Button
                    onClick={toggleFormVisibility}
                    disabled={false}
                    label="New record"
                />
            </Box>
        )
    }

    return (
        <Box padding="0px 0px 20px 0px">
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
        <Grid
            width="220px"
            padding="25px 0px 5px 0px"
            gridColumns="repeat(2, minmax(40px, 1fr))"
        >
            <AddRecordButton
                disabled={isButtonDisabled}
                newRecordData={newRecordData}
            />
            <CancelButton toggleVisible={toggleFormVisibility} />
        </Grid>
    </Box>
    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(AddRecordForm);
