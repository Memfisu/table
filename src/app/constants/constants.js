const directions = {
    BACK: 'BACK',
    FORWARD: 'FORWARD',
    UP: 'UP',
    DOWN: 'DOWN'
};

const actions = {
    INIT: 'INITIAL_DATA',
    LOAD: 'LOAD_DATA',
    NEW: 'CREATE_NEW_DATA',
    CLEAR: 'CLEAR_NEW_DATA',
    RESET: 'RESET_CHOSEN_RECORD',
    ADD: 'ADD_NEW_DATA',
    SHOW: 'SHOW_RECORD',
    FORM: 'SHOW_FORM',
    SORT: 'SORT_DATA',
    FILTER: 'FILTER_DATA',
    PAGE: 'SET_CURRENT_PAGE',
    LOADER: 'SET_LOADER'
}

const headerNames = [
    "id",
    "firstName",
    "lastName",
    "email",
    "phone"
];

const statuses = {
    'ERROR': 'ERROR',
    'EMPTY': 'EMPTY',
    'FETCHED': 'FETCHED',
    'DONE': 'DONE'
}

export { directions, actions, headerNames, statuses };