import React from 'react';

interface ICommonInput extends React.HTMLAttributes<HTMLInputElement> {
    type?: string
}

const Input = (props: ICommonInput) => {
    return <input {...props} />;
};

export default Input;
