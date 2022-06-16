import { getAllUsers } from '../service/user-service'
import { ServerResponse, IncomingMessage } from 'http'
import { setErrorResponse } from '../halpers/setErrorResponse'
import { setResponse } from '../halpers/setResponse'

export const getUsers = async (req: IncomingMessage, res: ServerResponse) => {
    try {
        const users = await getAllUsers()
        if (users) setResponse(200, res, users)
    } catch (error) {
        setErrorResponse(error, res)
    }
}
