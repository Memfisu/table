import { actions } from '../constants/constants';

const initialData = {
    counter: 1,
    delay: 4000,
    id: 42
};

const setUniqueId = array => {
    let id = Math.floor(Math.random() * 100);
    if (array.find(item => item.id === id)) {
        setUniqueId(array);
    } else return id;
};

const addTaskToQueue = () => ({
    type: actions.QUEUEADD
});

const cancelTaskFromQueue = ({ id }) => ({
    type: actions.QUEUECANCEL,
    payload: { id }
});

const finishTaskFromQueue = ({ id }) => ({
    type: actions.QUEUEFINISH,
    payload: { id }
})

const queueHandler = (state, { type, payload }) => {
    switch (type) {
        case actions.QUEUEADD:
        {   const newState = [...state];
            newState.length ?
                newState.push({
                    counter: newState[newState.length-1].counter+1,
                    delay: newState[newState.length-1].delay/2,
                    id: setUniqueId(newState)
                })
                : newState.push(initialData);
            return newState;
        }
        case actions.QUEUECANCEL:
        {   const newState = state.filter(item => item.id !== payload.id);
            return newState.map((item, index) => ({
                counter: index+1,
                id: item.id,
                delay: index === 0 ? initialData.delay : state[index-1].delay/2
            }));
        }
        case actions.QUEUEFINISH:
            return state.filter(item => item.id !== payload.id);
        default:
            return state || [];
    }
};

export { addTaskToQueue, cancelTaskFromQueue, finishTaskFromQueue };
export default queueHandler;