const names = {
    id: /^\d+$/g,
    firstName: /^[a-zA-Z]+$/g,
    lastName: /^[a-zA-Z]+$/g,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g
};

export const validate = (name, value) => value?.match(names[name]);