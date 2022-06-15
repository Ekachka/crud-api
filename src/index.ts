import * as http from 'http'
import { getUsers } from './controllers/users-controller'
import { createUser } from './controllers/create-user-controller'
import 'dotenv/config'

const PORT = process.env.PORT || 5000

// if (!process.env.PORT) {
//     process.exit(1);
// }

export const index = http.createServer(async (req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        return await getUsers(req, res)
    }
    if (req.url === '/api/users' && req.method === 'POST') {
        return await createUser(req, res)
    }

    await res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found' }))
})

index.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
