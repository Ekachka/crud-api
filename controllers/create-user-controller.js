import {createUserEntity} from "../service/create-user-service.js";
import {getRequestData} from "../halpers/getRequestData.js";


export const createUser = async (req, res) => {
    try {
        const data = await getRequestData(req)
        const {username, age, hobbies} = data

        const users = await createUserEntity(username, age, hobbies)
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));

    } catch (error) {
        console.log(error);
    }

}
