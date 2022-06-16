export interface IUserData {
    id?: string
    username: string
    age: number
    hobbies: Array<string>
}

export interface IDataBase {
    base: IUserData[]
}

export interface IApiError {
    status: number
    message: string
}
