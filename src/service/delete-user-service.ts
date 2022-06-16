import { validate as uuidValidate } from 'uuid'
import { dataBase } from '../dataBase'
import { ApiError } from '../exceptions/api-error'
import { constants } from '../constants'
import { IUserData } from '../interfaces'

export const deleteUserData = async (id: string) => {
    const isUserIdUuid = uuidValidate(id)

    if (!isUserIdUuid) {
        throw ApiError.BadRequestField(constants.invalidUserId)
    }

    const index = dataBase.base.findIndex((user: IUserData) => user.id === id)

    if (index < 0) {
        throw ApiError.BadRequest(constants.userNotExist)
    }

    dataBase.base = dataBase.base.filter((user: IUserData) => user.id !== id)

    return dataBase.base
}
