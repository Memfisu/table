import { actions } from '../constants/constants';

const setQueueTask = queueItem => ({
    type: actions.QUEUEADD,
    payload: queueItem
});

const finishQueueTask = () => ({
    type: actions.QUEUEFINISH
});

const cancelQueueTask = payload => ({
    type: actions.QUEUECANCEL,
    payload: payload
});

const queueHandler = (state, { type, payload }) => {
    switch (type) {
        case actions.QUEUEADD:
            return [...state, payload];
        case actions.QUEUEFINISH:
        {   let changedState = [...state];
            changedState.shift();
            return [...changedState];
        }
        case actions.QUEUECANCEL:
            return state.filter(item => item.counter !== payload.counter);
        default:
            return state || [];
    }
};

export { setQueueTask, finishQueueTask, cancelQueueTask };
export default queueHandler;