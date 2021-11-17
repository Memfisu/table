import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '../../utils/Box';
import Button from '../../utils/Button';
import { setData } from '../../reducers/dataLoader';
import { clearNewRecord } from '../../reducers/newRecordAppendor';
import InputWithValidation from '../../utils/InputWithValidation';
import { validate } from '../../utils/validate';
import { formVisibility, newRecord } from '../../selectors/selectors';
import { setFormVisibility } from '../../reducers/formDemonstrator';
import { headerNames } from '../../constants/constants';

const AddRecordForm = () => {
    const dispatch = useDispatch();
    const newRecordData = useSelector(newRecord);
    const { visibility } = useSelector(formVisibility);

    const toggleFormVisibility = () => {
        dispatch(setFormVisibility({ visibility: false }));
    };

    const handleAddRecord = useCallback(() => {
        dispatch(setData({ newRecord: newRecordData }));
        dispatch(clearNewRecord());
    }, [dispatch, newRecordData]);

    const isButtonDisabled = useMemo(() => Object.keys(newRecordData).length !== 5 ||
        Object.values(newRecordData).some(item => !item), [newRecordData]);

    if (!visibility) return null;

    return (
        <Box className="formWrapper">
        <Box className="formFields">
            {headerNames.map((name, index) => (
                <InputWithValidation
                    key={index}
                    name={name}
                    placeholder={name}
                    validate={validate}
                />
            ))}
        </Box>
        <Box className="formButtons">
            <Button
                className="commonButton"
                onClick={handleAddRecord}
                disabled={isButtonDisabled}
                label="Add record"
            />
            <Button
                className="commonButton"
                onClick={toggleFormVisibility}
                label="Cancel"
            />
        </Box>
    </Box>
    );
};

export default AddRecordForm;
