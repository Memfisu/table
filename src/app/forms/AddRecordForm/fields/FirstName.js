import React from 'react';
import Input from '../../../../ui-kit/Input';

const FirstName = ({ dispatchCallback }) => {
    const validateCallback = value => value.match(/^[a-zA-Z]+$/g);

    return (
        <Input
            placeholder="FirstName"
            type="text"
            validateCallback={validateCallback}
            dispatchCallback={dispatchCallback}
        />
    );
};

export default FirstName;
