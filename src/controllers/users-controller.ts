import { getAllUsers } from '../service/user-service'
import { ServerResponse, IncomingMessage } from 'http'

export const getUsers = async (req: IncomingMessage, res: ServerResponse) => {
    try {
        const users = await getAllUsers()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    } catch (error) {
        console.log(error)
    }
}
