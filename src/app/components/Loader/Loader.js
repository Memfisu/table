import { Box } from '../../../ui-kit/Containers';
import { Label } from '../../../ui-kit/Labels';
import { useSelector } from 'react-redux';
import { loaderVisibility } from '../../selectors/selectors';

const Loader = () => {
    const { visibility } = useSelector(loaderVisibility);

    if (!visibility) return null;

    return (
        <Box>
            <Label>Loading...</Label>
        </Box>
    );
};

export default Loader;