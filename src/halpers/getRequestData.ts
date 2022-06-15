import { IncomingMessage } from 'http'

export const getRequestData = async (request: IncomingMessage) => {
    const buffers = []

    for await (const chunk of request) {
        buffers.push(chunk)
    }

    const data = Buffer.concat(buffers).toString()
    return JSON.parse(data)
}
