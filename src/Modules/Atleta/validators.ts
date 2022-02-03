import { body } from 'express-validator';
import { consultValidator } from '../Consultas/validator';

export const atletaValidator = (path: string) => [
    body(`${path}.consultas`).isArray({ min: 2, max: 2 }),
    ...consultValidator(`${path}.consultas.*`),
]
