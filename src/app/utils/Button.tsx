import React from 'react';

// todo: указать более строгий тип
const Button = (props: any) => {
    return (
        <button {...props}>
            {props.label}
        </button>
    );
};

export default Button;
