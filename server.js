import http from 'http'
import {getUsers} from "./controllers/users-controller.js";
import {createUser} from "./controllers/create-user-controller.js";
import 'dotenv/config'

const PORT= process.env.PORT || 5000

export const server = http.createServer(async (req, res)=>{
    if(req.url === '/api/users' && req.method === 'GET') {
        await getUsers(req, res)
    } else if (req.url === '/api/users' && req.method === 'POST'){
        await createUser(req, res)
    }else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }

})

    server.listen( PORT, ()=> console.log(`Server started on PORT = ${PORT}`));






