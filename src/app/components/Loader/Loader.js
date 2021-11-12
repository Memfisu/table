import React from 'react';
import Box from '../../utils/Box';
import { useSelector } from 'react-redux';
import { loadingStatus } from '../../selectors/selectors';
import { statuses } from '../../constants/constants';

const Loader = () => {
    const status = useSelector(loadingStatus);

    if (status === statuses.FETCHED || status === statuses.DONE) return null;

    return (
        <Box className="loaderWrapper">
            <Box className="loader" />
        </Box>
    );
};

export default Loader;