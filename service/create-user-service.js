import {v4 as uuidv4} from 'uuid';
import {data} from '../data.js';

export const createUserEntity =  async (username, age, hobbies) => {
    const userId = uuidv4()
    const newUser = {
        id: userId,
        username: username,
        age: age,
        hobbies: hobbies
    }
    data.push(newUser)
    return newUser

}
