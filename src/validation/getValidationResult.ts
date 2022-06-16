import { ApiError } from '../exceptions/api-error'
import { constants } from '../constants'
import { IUserData } from '../interfaces'

export const getValidationResult = (data: IUserData) => {
    const { username, age, hobbies } = data

    const isUsername = username && username.constructor === String
    const isAge = age && age.constructor === Number
    const isStringArray =
        Array.isArray(hobbies) &&
        hobbies.every((value) => value.constructor === String)

    if (!isUsername || !isAge || !isStringArray) {
        throw ApiError.BadRequestField(constants.invalidDataRequest)
    }

    return
}
