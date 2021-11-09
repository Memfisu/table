import React from 'react';
/*
* todo
*  непонятно, что делает эта обертка. Просто повторяет входные параметры - 2
*
*
*
* */

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
