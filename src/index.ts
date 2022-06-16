import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http'
import { getUsers } from './controllers/users-controller'
import { createUser } from './controllers/create-user-controller'
import { getUser } from './controllers/get-user-controller'
import { updateUser } from './controllers/update-user-controller'
import { deleteUser } from './controllers/delete-user-controller'
import 'dotenv/config'
import { constants } from './constants'

const PORT = process.env.PORT || 5000

if (!process.env.PORT) {
    process.exit(1)
}

const requests = async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        return await getUsers(req, res)
    }
    if (req.url === '/api/users' && req.method === 'POST') {
        return await createUser(req, res)
    }
    if (req.url?.match(/\/api\/users\/\w+/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        return await getUser(req, res, id)
    }
    if (req.url?.match(/\/api\/users\/\w+/) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        return await updateUser(req, res, id)
    }
    if (req.url?.match(/\/api\/users\/\w+/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        return await deleteUser(req, res, id)
    }

    res.writeHead(404, constants.contentType)
    res.end(JSON.stringify(constants.invalidEndpointRequest))
}

export const index = http.createServer(async (req, res) => {
    try {
        await requests(req, res)
    } catch (err) {
        res.writeHead(505, constants.contentType)
        res.end(JSON.stringify(constants.serverError))
    }
})

index.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
