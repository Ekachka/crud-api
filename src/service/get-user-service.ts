import { validate as uuidValidate } from 'uuid'
import { dataBase } from '../dataBase'
import { ApiError } from '../exceptions/api-error'
import { constants } from '../constants'
import { IUserData } from '../interfaces'

export const findUser = async (id: string) => {
    const isUserIdUuid = uuidValidate(id)

    if (!isUserIdUuid) {
        throw ApiError.BadRequestField(constants.invalidUserId)
    }

    const user = dataBase.base.find((data: IUserData) => data.id === id)

    if (!user) {
        throw ApiError.BadRequest("user doesn't exist")
    }
    return user
}
