import { dataBase } from '../dataBase'

export const getAllUsers = () => {
    return new Promise((resolve, _) => {
        resolve(dataBase.base)
    })
}
