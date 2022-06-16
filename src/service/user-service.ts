import { dataBase } from '../dataBase'

export const getAllUsers = () => {
    return new Promise((resolve) => {
        resolve(dataBase.base)
    })
}
