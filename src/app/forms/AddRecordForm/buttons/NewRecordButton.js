import React, {useCallback, useState} from 'react';
import Button from '../../../../ui-kit/Button';
import { Box } from '../../../../ui-kit/Containers';

const NewRecordButton = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = useCallback(() => setClicked(true), []);
    console.log(clicked);

    return (
        <Box padding="0px 0px 20px 0px">
            <Button
                onClick={handleClick}
                disabled={false}
                label="New record"
            />
        </Box>
     );
};

export default NewRecordButton;
