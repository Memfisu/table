import React from 'react';

const TableHeaderItem = ({ itemName }) => {
    return (
        <div
            onClick={() => console.log('sorting')}
        >
            {itemName}
        </div>
    );
};

export default TableHeaderItem;
