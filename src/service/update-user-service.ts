import { validate as uuidValidate } from 'uuid'
import { dataBase } from '../dataBase'
import { ApiError } from '../exceptions/api-error'
import { constants } from '../constants'
import { IUserData } from '../interfaces'

export const updateUserData = async (id: string, data: IUserData) => {
    const isUserIdUuid = uuidValidate(id)
    if (!isUserIdUuid) {
        throw ApiError.BadRequestField(constants.invalidUserId)
    }

    const index = dataBase.base.findIndex((user: IUserData) => user.id === id)

    if (index < 0) {
        throw ApiError.BadRequest(constants.userNotExist)
    }

    dataBase.base[index] = { ...dataBase.base[index], ...data }

    return dataBase.base[index]
}
