import { ServerResponse } from 'http'
import { constants } from '../constants'

export const setResponse = (
    status: number,
    res: ServerResponse,
    paramResponse: unknown
) => {
    res.writeHead(status, constants.contentType)
    res.end(JSON.stringify(paramResponse))
}
