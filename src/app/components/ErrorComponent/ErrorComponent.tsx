import Box from '../../utils/Box';
import Label from '../../utils/Label';

const ErrorComponent = () => {
    return (
        <Box className="errorWrapper">
            <Label> Data loading error. Please refresh the page.</Label>
        </Box>
    );
};

export default ErrorComponent;