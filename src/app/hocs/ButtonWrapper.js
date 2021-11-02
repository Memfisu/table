import React from 'react';

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