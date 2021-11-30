import React, { useCallback } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';
import { useDispatch, useSelector } from 'react-redux';
import { mergeData, queueData } from '../selectors/selectors';
import QueueItem from './QueueItem';
import {addTaskToQueue, mergeSelectedTasks} from '../reducers/queueHandler';

const EmitterButton = () => {
    const dispatch = useDispatch();
    const queue = useSelector(queueData);
    const merge = useSelector(mergeData);

    const handleStart = useCallback(() => {
        dispatch(addTaskToQueue());
    }, [dispatch]);

    const handleMerge = useCallback(() => {
        dispatch(mergeSelectedTasks());
    }, [dispatch]);

    return (
        <Box className="emitterWrapper">
            <Button
                className="commonButton"
                onClick={handleStart}
                label="Emitter button"
            />
            {queue?.length > 0 && queue.map((item, index) => <QueueItem item={item} key={index} />)}
            {merge?.length > 1 &&
            <Button
                className="commonButton"
                onClick={handleMerge}
                label="Merge selected tasks"
            />}
        </Box>
    )
}

export default EmitterButton;