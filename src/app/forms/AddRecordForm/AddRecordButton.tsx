import { useCallback } from 'react';
import Box from '../../utils/Box';
import Button from '../../utils/Button';
import { setFormVisibility } from '../../reducers/formDemonstrator';
import { useDispatch, useSelector } from 'react-redux';
import { formVisibility } from '../../selectors/selectors';

const AddRecordButton = () => {
    const dispatch = useDispatch();
    const { visibility } = useSelector(formVisibility);
    
    const handleClick = useCallback(() => {
        dispatch(setFormVisibility({ visibility: true }));
    }, [dispatch]);

    if (visibility) return null;

    return (
        <Box className="formWrapper">
            <Button
                className="commonButton"
                onClick={handleClick}
                label="+ New record"
            />
        </Box>
    )
}

export default AddRecordButton;