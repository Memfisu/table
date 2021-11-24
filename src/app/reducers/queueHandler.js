import { actions } from '../constants/constants';

const setNewQueueItem = (queueItem) => ({
    type: actions.QUEUEADD,
    payload: queueItem
});

const queueHandler = (state, { type, payload }) => {
    switch (type) {
        case actions.QUEUEADD:
            return [...state, payload];
        default:
            return state || [];
    }
};

export { setNewQueueItem };
export default queueHandler;