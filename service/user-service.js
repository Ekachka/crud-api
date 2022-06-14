import { data } from '../data.js';

export const getAllUsers = () => {
    return new Promise((resolve, _) => {
        resolve(data)
    })
}
