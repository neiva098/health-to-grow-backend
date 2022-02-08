import { body, param } from 'express-validator';

export const consultValidator = (path?: string) => {
    const localPath = path ? `${path}.` : ''
    return [
        body(`${localPath}dateTime`).isString(),
        body(`${localPath}codigoEspecialista`).isString(),
    ]
};

export const getAvaliable = [
    param('especialista').isString()
]