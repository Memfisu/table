import React from 'react';
import Input from '../../../../ui-kit/Input';

const Id = () => {
    const validateCallback = value => value.match(/^\d+$/g);

    return (
        <Input
            name="id"
            placeholder="Id"
            type="text"
            validateCallback={validateCallback}
        />
    );
};

export default Id;
