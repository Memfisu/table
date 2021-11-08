import { actions } from '../constants/constants';

const setLoader = ({ visibility }) => ({
    type: actions.LOADER,
    payload: visibility
});

const showLoader = (state, { type, payload}) => {
    switch (type) {
        case actions.LOADER:
            return {
                ...state,
                visibility: payload
            }
        default:
            return state || {};
    }
};

export { setLoader };
export default showLoader;