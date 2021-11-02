export const callbacks = {
    number: value => value.match(/^\d+$/g),
    text: value => value.match(/^[a-zA-Z]+$/g),
    email: value => value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    phone: value => value.match(/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g)
};