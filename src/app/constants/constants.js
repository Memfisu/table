const colors = {
    BLUE: '#e4eff6',
    GREEN: '#e5fbe5',
    RED: '#ff0000',
    BLACK: '#000000'
};

const directions = {
    BACK: 'BACK',
    FORWARD: 'FORWARD'
};

const actions = {
    LOAD: 'LOAD_DATA',
    NEW: 'CREATE_NEW_DATA',
    CLEAR: 'CLEAR_NEW_DATA',
    RESET: 'RESET_CHOSEN_RECORD',
    ADD: 'ADD_NEW_DATA',
    SHOW: 'SHOW_RECORD'
}

const headerNames = [
    "id",
    "firstName",
    "lastName",
    "email",
    "phone"
];

export { colors, directions, actions, headerNames };