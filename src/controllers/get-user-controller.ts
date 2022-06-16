import { IncomingMessage, ServerResponse } from 'http'
import { setErrorResponse } from '../halpers/setErrorResponse'
import { setResponse } from '../halpers/setResponse'
import { findUser } from '../service/get-user-service'

export const getUser = async (
    req: IncomingMessage,
    res: ServerResponse,
    id: string
) => {
    try {
        const user = await findUser(id)
        setResponse(200, res, user)
    } catch (error) {
        setErrorResponse(error, res)
    }
}
