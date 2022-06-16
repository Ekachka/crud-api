import { createUserEntity } from '../service/create-user-service'
import { getRequestData } from '../halpers/getRequestData'
import { IncomingMessage, ServerResponse } from 'http'
import { setErrorResponse } from '../halpers/setErrorResponse'
import { setResponse } from '../halpers/setResponse'
import { getValidationResult } from '../validation/getValidationResult'

export const createUser = async (req: IncomingMessage, res: ServerResponse) => {
    try {
        const data = await getRequestData(req)
        await getValidationResult(data)
        const users = await createUserEntity(data)
        setResponse(201, res, users)
    } catch (error) {
        setErrorResponse(error, res)
    }
}
