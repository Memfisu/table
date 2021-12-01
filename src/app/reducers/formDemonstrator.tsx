import { actions } from '../constants/constants';
import { IAction } from '../interfaces/interfaces';

type Visibility = {
    visibility: boolean
}

const setFormVisibility = ({ visibility }: Visibility) => ({
    type: actions.FORM,
    payload: visibility
});

export const formDemonstrator = (state: [], { type, payload }: IAction) => {
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