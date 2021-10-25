import React, {useCallback, useState} from 'react';
import Button from '../../../../ui-kit/Button';

const NewRecordButton = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = useCallback(() => setClicked(true), []);
    console.log(clicked);

    return (
        <Button
            onClick={handleClick}
            disabled={false}
            label="New record"
        />
     );
};

export default NewRecordButton;
