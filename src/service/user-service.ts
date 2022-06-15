import { dataBase } from '../dataBase'
import { IUserData } from '../interfaces'

export const getAllUsers = (): Promise<IUserData[]> => {
    return new Promise((resolve, _) => {
        resolve(dataBase)
    })
}
