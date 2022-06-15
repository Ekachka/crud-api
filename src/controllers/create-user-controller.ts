import { createUserEntity } from '../service/create-user-service'
import { getRequestData } from '../halpers/getRequestData'
import { IncomingMessage, ServerResponse } from 'http'

export const createUser = async (req: IncomingMessage, res: ServerResponse) => {
    try {
        const data = await getRequestData(req)

        const users = await createUserEntity(data)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    } catch (error) {
        // @ts-ignore
        const {status} =  error
        res.writeHead(status, { 'Content-Type': 'application/json' })

        // @ts-ignore
        res.end(JSON.stringify(error.status))
    }
}
