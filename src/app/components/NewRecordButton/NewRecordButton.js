import React from 'react';
import Button from '../../../ui-kit/Button';

const NewRecordButton = () => {
    return <Button
                onClick={() => console.log('Show AddRecordForm')}
                disabled={false}
                label="New record"
            />;
};

export default NewRecordButton;
