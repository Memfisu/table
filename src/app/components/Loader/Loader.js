import React from 'react';
import Box from '../../utils/Box';
import { useSelector } from 'react-redux';
import { loaderVisibility } from '../../selectors/selectors';

const Loader = () => {
    const { visibility } = useSelector(loaderVisibility);

    if (!visibility) return null;

    return (
        <Box className="loaderWrapper">
            <Box className="loader" />
        </Box>
    );
};

export default Loader;