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
    QUEUEADD: 'QUEUE_ADD_TASK',
    QUEUEFINISH: 'QUEUE_FINISH_TASK',
    QUEUECANCEL: 'QUEUE_CANCEL_TASK',
    MERGEADD: 'ADD_TASK_TO_MERGE',
    MERGEDELETE: 'DELETE_TASK_FROM_MERGE',
    MERGE: 'MERGE_SELECTED_TASKS',
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