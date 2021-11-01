import React, { useCallback } from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';
import { dispatch } from '../../../store';
import { addData } from '../../../reducers/dataLoader';
import { clearNewRecord } from '../../../reducers/newRecordAppendor';

const AddRecordButton = ({ disabled, newRecordData }) => {
    const handleClick = useCallback(() => {
        dispatch(addData({ newRecord: newRecordData }));
        dispatch(clearNewRecord());
    }, [newRecordData]);

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
