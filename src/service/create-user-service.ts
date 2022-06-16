import { v4 as uuidv4 } from 'uuid'
import { dataBase } from '../dataBase'
import { IUserData } from '../interfaces'

export const createUserEntity = async (data: IUserData): Promise<IUserData> => {
    const userId = uuidv4()
    const newUser = {
        id: userId,
        ...data,
    }

    dataBase.base.push(newUser)
    return newUser
}
