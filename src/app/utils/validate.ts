import { ColumnNames } from '../interfaces/interfaces';

const names: ColumnNames = {
    id: /^\d+$/g,
    firstName: /^[a-zA-Z]+$/g,
    lastName: /^[a-zA-Z]+$/g,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g
};

type Keys = keyof typeof names;

// @ts-ignore
// todo: разобраться с этой ошибкой ts
export const validate = (name: Keys, value: string) => value?.match(names[name]);