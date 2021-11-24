import { actions } from '../constants/constants';

const setNewQueueItem = (queueItem) => ({
    type: actions.QUEUEADD,
    payload: queueItem
});

const removeQueueItem = () => ({
    type: actions.QUEUEREMOVE
});

const queueHandler = (state, { type, payload }) => {
    switch (type) {
        case actions.QUEUEADD:
            return [...state, payload];
        case actions.QUEUEREMOVE:
        {   let changedState = [...state];
            changedState.shift();
            return [...changedState];
        }
        default:
            return state || [];
    }
};

export { setNewQueueItem, removeQueueItem };
export default queueHandler;