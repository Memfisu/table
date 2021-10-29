const colors = {
    BLUE: '#e4eff6',
    GREEN: '#e5fbe5',
    RED: '#ff0000'
};

const directions = {
    BACK: 'BACK',
    FORWARD: 'FORWARD'
};

const actions = {
    LOAD: 'LOAD_DATA',
    ADD: 'ADD_DATA'
}

const temporaryData = [
    {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296'
    },
    {
        id: 102,
        firstName: 'Joe',
        lastName: 'Dow',
        email: 'JDow@in.gov',
        phone: '(612)333-333'
    }
];

export { colors, directions, actions, temporaryData };