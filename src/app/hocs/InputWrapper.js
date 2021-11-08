import React from 'react';

const InputWrapper = ({
    component: Component,
    name,
    placeholder,
    type,
    validate,
    onBlur
}) => {
    return (
        <Component
            name={name}
            placeholder={placeholder}
            type={type}
            validate={validate}
            onBlur={onBlur}
        />
    );
};

export default InputWrapper;