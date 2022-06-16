import { IApiError } from '../interfaces'

export class ApiError extends Error implements IApiError {
    status

    constructor(status: number, message: string) {
        super(message)
        this.status = status
    }

    static BadRequestField(message: string) {
        return new ApiError(400, message)
    }

    static BadRequest(message: string) {
        return new ApiError(404, message)
    }

    static serverError(message: string) {
        return new ApiError(500, message)
    }
}
