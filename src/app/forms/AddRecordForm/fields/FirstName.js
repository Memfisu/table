import React from 'react';
import Input from '../../../../ui-kit/Input';

const FirstName = () => {
    const validateCallback = value => value.match(/^[a-zA-Z]+$/g);

    return (
        <Input
            placeholder="FirstName"
            type="text"
            validateCallback={validateCallback}
        />
    );
};

export default FirstName;
