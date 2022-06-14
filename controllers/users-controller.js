import {getAllUsers} from "../service/user-service.js";


export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));

    } catch (error) {
        console.log(error);
    }

}

