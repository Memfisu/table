import React from 'react';

interface ICommonButton extends React.HTMLAttributes<HTMLButtonElement> {
    label?: string,
    disabled?: boolean
}

const Button = (props: ICommonButton) => {
    return (
        <button {...props}>
            {props.label}
        </button>
    );
};

export default Button;
