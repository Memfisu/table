import React from 'react';
import Button from '../../../../ui-kit/Button';

const SearchButton = () => {
    return (
        <Button
            onClick={() => console.log('filter')}
            disabled={false}
            label="Filter"
        />
    );
};

export default SearchButton;
