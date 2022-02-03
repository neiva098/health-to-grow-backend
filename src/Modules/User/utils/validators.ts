import { body } from 'express-validator';
import { atletaValidator } from '../../Atleta/validators';

export const authValidator = [
    body('password').isString().isLength({ min: 3 }),
    body('email').isEmail(),
];

export const userValidator = [
    body('name').isString().isLength({ min: 5 }),
    body('password').isString().isLength({ min: 3 }),
    body('email').isEmail(),
];

export const createAtletaValidator = [
    ...userValidator,
    ...atletaValidator('atletaProfile')
];
