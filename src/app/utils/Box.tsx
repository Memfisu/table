import React from 'react';

const Box = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <div {...props} />;
};

export default Box;
