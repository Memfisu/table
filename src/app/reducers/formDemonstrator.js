import { actions } from '../constants/constants';

const setFormVisibility = ({ visibility }) => ({
    type: actions.FORM,
    payload: visibility
});

export const formDemonstrator = (state, { type, payload }) => {
    switch (type) {
        case actions.FORM:
            return {
                ...state,
                visibility: payload
            }
        default:
            return state || {};
    }
};

export { setFormVisibility };