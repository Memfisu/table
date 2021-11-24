import React, { useCallback } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';
import { setEmitterDemonstration } from '../reducers/dataLoader';
import {useDispatch, useSelector} from 'react-redux';
import { setNewQueueItem } from '../reducers/queueHandler';
import { queueData } from '../selectors/selectors';

const EmitterButton = () => {
    const dispatch = useDispatch();
    const queue = useSelector(queueData);
    
    const handleClick = useCallback(() => {
        dispatch(setEmitterDemonstration());
        dispatch(setNewQueueItem({ position: 1, delay: 5000 }));
    }, [dispatch]);

    return (
        <Box className="emitterWrapper">
            <Button
                className="commonButton"
                onClick={handleClick}
                label="Emitter button"
            />
            {queue?.length ? queue.map((item, index) => <Box key={index}>
                {`Номер в очереди: ${item.position}, задержка: ${item.delay} мс`}
            </Box>)
                : null
            }
        </Box>
    )
}

export default EmitterButton;