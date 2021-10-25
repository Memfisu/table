import React from 'react';
import Id from './fields/Id';
import FirstName from './fields/FirstName';
import LastName from './fields/LastName';
import Email from './fields/Email';
import Phone from './fields/Phone';

const AddRecordForm = () => {
    return <div>
        <Id />
        <FirstName />
        <LastName />
        <Email />
        <Phone />
    </div>;
};

export default AddRecordForm;
