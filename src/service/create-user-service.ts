import { v4 as uuidv4 } from 'uuid'
import { dataBase } from '../dataBase'
import { IUser, IUserData } from '../interfaces'
import { ApiError } from '../exceptions/api-error'

export const createUserEntity = async (data: IUserData): Promise<IUser> => {
    if (!data.username) {
        throw ApiError.BadRequest('hhh')
    }
    const userId = uuidv4()
    const newUser = {
        id: userId,
        ...data,
    }
    dataBase.push(newUser)
    return newUser
}
