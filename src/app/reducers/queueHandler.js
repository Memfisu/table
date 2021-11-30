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

// todo: нужно оставлять одну объединённую задачу вместо переданных нескольких
const delIdsFromArray = (ids, items) => items.filter(item => !ids.includes(item.id));

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
});

const addSelectedTaskToMerge = ({ id }) => ({
    type: actions.MERGEADD,
    payload: { id }
});

const deleteSelectedTaskFromMerge = ({ id }) => ({
    type: actions.MERGEDELETE,
    payload: { id }
});

const mergeSelectedTasks = () => ({
    type: actions.MERGE
});

const queueHandler = (state, { type, payload }) => {
    switch (type) {
        case actions.QUEUEADD:
        {   const newState = [...state.queue];
            newState.length ?
                newState.push({
                    counter: newState[newState.length-1].counter+1,
                    delay: newState[newState.length-1].delay/2,
                    id: setUniqueId(newState)
                })
                : newState.push(initialData);
            return {
                ...state,
                queue: newState
            };
        }
        case actions.QUEUECANCEL:
        {   const newState = state.queue.filter(item => item.id !== payload.id);
            return {
                ...state,
                queue: newState.map((item, index) => ({
                    counter: index+1,
                    id: item.id,
                    delay: index === 0 ? initialData.delay : state.queue[index-1].delay/2
                }))
            };
        }
        case actions.QUEUEFINISH:
            return {
                ...state,
                queue: state.queue.filter(item => item.id !== payload.id)
            };
        case actions.MERGEADD:
            return {...state, merge: [...state.merge, payload.id]};
        case actions.MERGEDELETE:
            return {...state, merge: state.merge.filter(item => item !== payload.id)};
        case actions.MERGE:
            return {
                queue: delIdsFromArray(state.merge, state.queue),
                merge: []
            }
            default:
            return state || { queue: [], merge: [] };
    }
};

export {
    addTaskToQueue,
    cancelTaskFromQueue,
    finishTaskFromQueue,
    addSelectedTaskToMerge,
    deleteSelectedTaskFromMerge,
    mergeSelectedTasks
};
export default queueHandler;