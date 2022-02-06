import { body, param } from 'express-validator';

export const consultValidator = (path: string) => [
    body(`${path}.dateTime`).isString(),
    body(`${path}.codigoEspecialista`).isString(),
];

export const getAvaliable = [
    param('especialista').isString()
]