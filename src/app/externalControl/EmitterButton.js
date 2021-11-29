import React, { useCallback } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';
import { useDispatch, useSelector } from 'react-redux';
import { queueData } from '../selectors/selectors';
import QueueItem from './QueueItem';
import { addTaskToQueue } from '../reducers/queueHandler';

const EmitterButton = () => {
    const dispatch = useDispatch();
    const queue = useSelector(queueData);
    
    const handleClick = useCallback(() => {
        dispatch(addTaskToQueue());
    }, [dispatch]);

    return (
        <Box className="emitterWrapper">
            <Button
                className="commonButton"
                onClick={handleClick}
                label="Emitter button"
            />
            {queue?.length ? queue.map((item, index) => <QueueItem item={item} key={index} />) : null}
        </Box>
    )
}

export default EmitterButton;