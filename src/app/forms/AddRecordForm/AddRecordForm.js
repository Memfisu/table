import React, { useCallback, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid } from '../../../ui-kit/Containers';
import Button from '../../utils/Button';
import { addData } from '../../reducers/dataLoader';
import { clearNewRecord } from '../../reducers/newRecordAppendor';
import InputWithValidation from '../../utils/InputWithValidation';
import { validate } from '../../utils/validate';
import { newRecord } from '../../selectors/selectors';

const AddRecordForm = () => {
    const dispatch = useDispatch();
    const newRecordData = useSelector(newRecord);

    const [isFormVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    const handleAddRecord = useCallback(() => {
        dispatch(addData({ newRecord: newRecordData }));
        dispatch(clearNewRecord());
    }, [dispatch, newRecordData]);

    const isButtonDisabled = useMemo(() => Object.keys(newRecordData).length !== 5 ||
        Object.values(newRecordData).some(item => !item), [newRecordData]);

    if (!isFormVisible) {
        return (
            <Box padding="0px 0px 20px 0px">
                <Button
                    onClick={toggleFormVisibility}
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
            <InputWithValidation
                name="id"
                placeholder="Id"
                type="text"
                validate={validate}
            />
            <InputWithValidation
                name="firstName"
                placeholder="FirstName"
                type="text"
                validate={validate}
            />
            <InputWithValidation
                name="lastName"
                placeholder="LastName"
                type="text"
                validate={validate}
            />
            <InputWithValidation
                name="email"
                placeholder="E-mail"
                type="email"
                validate={validate}
            />
            <InputWithValidation
                name="phone"
                placeholder="Phone"
                type="tel"
                validate={validate}
            />
        </Grid>
        <Grid
            width="220px"
            padding="25px 0px 5px 0px"
            gridColumns="repeat(2, minmax(40px, 1fr))"
            gridAutoRows="25px"
        >
            <Button
                onClick={handleAddRecord}
                disabled={isButtonDisabled}
                label="Add record"
            />
            <Button
                onClick={toggleFormVisibility}
                label="Cancel"
            />
        </Grid>
    </Box>
    );
};

export default AddRecordForm;
