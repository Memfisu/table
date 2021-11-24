import React, { useCallback } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';
import { setEmitterDemonstration } from '../reducers/dataLoader';
import { useDispatch, useSelector } from 'react-redux';
import { queueData } from '../selectors/selectors';
import QueueItem from './QueueItem';

const EmitterButton = () => {
    const dispatch = useDispatch();
    const queue = useSelector(queueData);
    
    const handleClick = useCallback(() => {
        try {
            dispatch(setEmitterDemonstration());
        } catch (e) {
            console.log(e.message);
        }
    }, [dispatch]);

    return (
        <Box className="emitterWrapper">
            <Button
                className="commonButton"
                onClick={handleClick}
                label="Emitter button"
            />
            {queue?.length ? queue.map((item, index) => <QueueItem item={item} index={index} />) : null}
        </Box>
    )
}

export default EmitterButton;