import React from 'react';

const InputWrapper = ({
    component: Component,
    name,
    placeholder,
    type,
    validate
}) => {
    return (
        <Component
            name={name}
            placeholder={placeholder}
            type={type}
            validate={validate}
        />
    );
};

export default InputWrapper;