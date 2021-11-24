const directions = {
    BACK: 'BACK',
    FORWARD: 'FORWARD',
    UP: 'UP',
    DOWN: 'DOWN'
};

const actions = {
    INIT: 'INIT_DATA',
    FETCH: 'FETCH_DATA',
    NEW: 'CREATE_NEW_DATA',
    CLEAR: 'CLEAR_NEW_DATA',
    RESET: 'RESET_CHOSEN_RECORD',
    ADD: 'ADD_NEW_RECORD',
    SHOW: 'SHOW_RECORD',
    FORM: 'SHOW_FORM',
    SORT: 'SORT_DATA',
    AUTOSORT: 'AUTO_SORT_DATA',
    FILTER: 'FILTER_DATA',
    PAGE: 'SET_CURRENT_PAGE',
    LOADER: 'SET_LOADER',
    ERROR: 'SET_ERROR',
    EMITTING: 'SET_EMITTING',
    STOP: 'STOP_EMITTING',
    QUEUEADD: 'QUEUE_ADD_ITEM',
    QUEUEREMOVE: 'QUEUE_REMOVE_ITEM'
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
    'DONE': 'DONE'
}

export { directions, actions, headerNames, statuses };