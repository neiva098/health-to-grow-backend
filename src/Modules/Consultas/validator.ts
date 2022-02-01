import { body } from 'express-validator';

export const consultValidator = (path: string) => [
    body(`${path}.dateTime`).isString(),
    body(`${path}.codigoEspecialista`).isString(),
];
