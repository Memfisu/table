import React from 'react';
import { Box } from '../../../../ui-kit/Containers';
import Button from '../../../utils/Button';
import { directions } from '../../../constants/constants';

const PaginationItem = ({ direction }) => {
    const handleBack = () => console.log('go back');
    const handleForward = () => console.log('go forward');

    return direction === directions.BACK ?
        <Box padding="5px 0px 0px 5px">
          <Button label="<<" onClick={handleBack} />
        </Box> :
        <Box padding="5px 0px 0px 5px">
            <Button label=">>" onClick={handleForward} />
        </Box>;
};

export default PaginationItem;
