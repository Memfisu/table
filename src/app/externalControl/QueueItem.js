import React, { useCallback, useState } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';
import { useDispatch } from 'react-redux';
import { cancelTaskFromQueue } from '../reducers/queueHandler';

const QueueItem = ({ item }) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);

    const handleSelect = useCallback(() => {
        if (!selected) setSelected(true);
        else setSelected(false);
    }, [selected]);

    const handleRemoveTask = useCallback(() => {
        dispatch(cancelTaskFromQueue({ id: item.id }));
    }, [dispatch, item.id]);

    return (
        <Box className={selected ? "taskWrapper focused" : "taskWrapper"} onClick={handleSelect}>
            <Box>{`Number in the queue: ${item.counter}, delay: ${item.delay} ms`}</Box>
            <Button
                className="commonButton"
                onClick={handleRemoveTask}
                label="x"
            />
        </Box>
    );
}

export default QueueItem;