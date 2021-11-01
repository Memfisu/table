import React from 'react';
import Input from '../../../../ui-kit/Input';

const Email = () => {
    const validateCallback = value =>
        value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return (
        <Input
            name="email"
            placeholder="E-mail"
            type="email"
            validateCallback={validateCallback}
        />
    );
};

export default Email;
