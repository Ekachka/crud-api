import { IncomingMessage, ServerResponse } from 'http'
import { setErrorResponse } from '../halpers/setErrorResponse'
import { setResponse } from '../halpers/setResponse'
import { updateUserData } from '../service/update-user-service'
import { getRequestData } from '../halpers/getRequestData'
import { getValidationResult } from '../validation/getValidationResult'

export const updateUser = async (
    req: IncomingMessage,
    res: ServerResponse,
    id: string
) => {
    try {
        const data = await getRequestData(req)
        await getValidationResult(data)
        const user = await updateUserData(id, data)
        setResponse(200, res, user)
    } catch (error) {
        setErrorResponse(error, res)
    }
}
