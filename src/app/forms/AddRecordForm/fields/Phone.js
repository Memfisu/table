import React from 'react';
import Input from '../../../../ui-kit/Input';

const Phone = () => {
    const validateCallback = value =>
        value.match(/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g);

    return (
        <Input
            name="phone"
            placeholder="Phone"
            type="tel"
            validateCallback={validateCallback}
        />
    );
};

export default Phone;
