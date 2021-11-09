import React from 'react';
/*
* todo
*  непонятно, что делает эта обертка. Просто повторяет входные параметры
*
*
*
* */

const ButtonWrapper = ({
   component: Component,
   disabled,
   onClick,
   label
}) => {
    return (
        <Component
            disabled={disabled}
            onClick={onClick}
            label={label}
        />
    );
};

export default ButtonWrapper;
