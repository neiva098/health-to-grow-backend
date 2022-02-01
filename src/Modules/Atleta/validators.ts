import { body } from 'express-validator';
import { consultValidator } from '../Consultas/validator';
import { userValidator } from '../User/utils/validators';

export const createAtletaValidator = [
    ...userValidator('pessoa'),
    body('consultas').isArray({ min: 2, max: 2 }),
    ...consultValidator('consultas.*'),
];
