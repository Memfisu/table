import React, { useCallback, useState } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';
import { useDispatch } from 'react-redux';
import {
    cancelTaskFromQueue,
    addSelectedTaskToMerge,
    deleteSelectedTaskFromMerge
} from '../reducers/queueHandler';
import { IQueueItem } from '../interfaces/interfaces';

type Props = {
    item: IQueueItem
}

const QueueItem = ({ item }: Props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);

    const handleSelect = useCallback(() => {
        if (!selected) {
            setSelected(true);
            dispatch(addSelectedTaskToMerge({ id: item.id }));
        }
        else {
            setSelected(false);
            dispatch(deleteSelectedTaskFromMerge({ id: item.id }));
        }
    }, [dispatch, item.id, selected]);

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