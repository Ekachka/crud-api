import { IncomingMessage, ServerResponse } from 'http'
import { setErrorResponse } from '../halpers/setErrorResponse'
import { setResponse } from '../halpers/setResponse'
import { deleteUserData } from '../service/delete-user-service'

export const deleteUser = async (
    req: IncomingMessage,
    res: ServerResponse,
    id: string
) => {
    try {
        const user = await deleteUserData(id)
        setResponse(204, res, user)
    } catch (error) {
        setErrorResponse(error, res)
    }
}
