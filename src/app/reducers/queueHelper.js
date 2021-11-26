import { actions } from '../constants/constants';

const initCounterAndDelay = () => ({
    type: actions.HELPERINIT
});

const changeCounterAndDelay = () => ({
    type: actions.HELPERUPDATE
});

const queueHelper = (state, { type }) => {
    switch (type) {
        case actions.HELPERINIT:
            return [{
                counter: 1,
                delay: 4000
            }];
        case actions.HELPERUPDATE:
        {   const newState = [...state];
            newState.push({
                counter: newState[newState.length-1].counter+1,
                delay: newState[newState.length-1].delay/2
            });
            return newState;
        }
        default:
            return state || [];
    }
};

export { initCounterAndDelay, changeCounterAndDelay };
export default queueHelper;