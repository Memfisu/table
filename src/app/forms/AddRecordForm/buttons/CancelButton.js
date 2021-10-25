import React from 'react';
import Button from '../../../../ui-kit/Button';

const CancelButton = () => {
    return <Button
                onClick={() => console.log('Hide AddRecordForm')}
                disabled={false}
                label="Cancel"
            />;
};

export default CancelButton;
