import React from 'react';
import Input from '../../../../ui-kit/Input';

const Email = () => {
    const validateCallback = value =>
        value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);

    return (
        <Input
            placeholder="E-mail"
            type="email"
            validateCallback={validateCallback}
        />
    );
};

export default Email;
