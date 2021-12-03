import { actions } from '../constants/constants';
import { IAction, IFormVisibility } from '../interfaces/interfaces';

type Visibility = {
    visibility: boolean
}

const setFormVisibility = ({ visibility }: Visibility) => ({
    type: actions.FORM,
    payload: visibility
});

export const formDemonstrator = (state: IFormVisibility, { type, payload }: IAction<Visibility>) => {
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