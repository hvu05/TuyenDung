import {get, post, get4can} from '../utils/request';

export const login = async (email, password) => {
    const result = await get(`?email=${email}&password=${password}`);
    return result;
};
export const login4can = async (email, phone) => {
    const result = await get4can(`?email=${email}`);
    return result;
};
export const signin = async (values) => {
    const result = await post('', values);
    return result;
};
