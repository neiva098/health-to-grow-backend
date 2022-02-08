import { body, query } from "express-validator";

export const findAll = [
    query('type').isString()
]

export const create = (path?: string) => {
    const localPath = path ? `${path}.` : ''
    return [
        body(`${localPath}credentialType`).isString(),
        body(`${localPath}credential`).isString(),
        body(`${localPath}type`).isString(),
    ]
}