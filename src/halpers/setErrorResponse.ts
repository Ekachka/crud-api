import { ServerResponse } from 'http'

import { ApiError } from '../exceptions/api-error'
import { constants } from '../constants'

export const setErrorResponse = (error: unknown, res: ServerResponse) => {
    if (error instanceof ApiError) {
        const { status, message } = error
        res.writeHead(status, constants.contentType)
        res.end(JSON.stringify(message))
    }
}
