import React from 'react';
import Input from '../../../../ui-kit/Input';

const LastName = () => {
    const validateCallback = value => value.match(/^[a-zA-Z]+$/g);

    return (
        <Input
            name="lastName"
            placeholder="LastName"
            type="text"
            validateCallback={validateCallback}
        />
    );
};

export default LastName;
