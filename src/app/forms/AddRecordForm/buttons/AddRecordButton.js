import React, { useCallback } from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';
import { dispatch } from '../../../store';
import { addData } from '../../../reducers/dataLoader';

const temporaryNewRecord = {
    id: 101,
    firstName: 'Sue',
    lastName: 'Corson',
    email: 'DWhalley@in.gov',
    phone: '(612)211-6296'
};

const AddRecordButton = ({ disabled }) => {
    const handleClick = useCallback(() => {
        dispatch(addData({ newRecord: temporaryNewRecord }));
    }, []);

    return (
        <Box padding="0px 20px 0px 0px">
            <Button
                onClick={handleClick}
                disabled={disabled}
                label="Add record"
            />
        </Box>
    );
};

export default AddRecordButton;
