import React, { useCallback, useState } from 'react';
import Box from '../utils/Box';
import Button from '../utils/Button';

const QueueItem = ({ item }) => {
    const [selected, setSelected] = useState(false);

    const handleSelect = useCallback(() => {
        if (!selected) setSelected(true);
        else setSelected(false);
    }, [selected]);

    const handleRemoveTask = useCallback(() => {
        // todo диспатч экшена удаления конкретной задачи из очереди
    }, []);

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