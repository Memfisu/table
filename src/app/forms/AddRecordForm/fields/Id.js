import React from 'react';
import Input from '../../../../ui-kit/Input';

const Id = ({ dispatchCallback }) => {
    const validateCallback = value => value.match(/^\d+$/g);

    return (
        <Input
            placeholder="Id"
            type="text"
            validateCallback={validateCallback}
            dispatchCallback={dispatchCallback}
        />
    );
};

export default Id;
