import { IColumnNames } from '../interfaces/interfaces';

const names: IColumnNames = {
    id: /^\d+$/g,
    firstName: /^[a-zA-Z]+$/g,
    lastName: /^[a-zA-Z]+$/g,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g
};

export const validate = (name: string, value: string) => value?.match(names[name]);