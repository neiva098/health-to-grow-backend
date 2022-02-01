import { body } from 'express-validator';

export const authValidator = [
    body('password').isString().isLength({ min: 3 }),
    body('email').isEmail(),
];

export const userValidator = (path: string) => [
    body(`${path}.name`).isString().isLength({ min: 5 }),
    body(`${path}.password`).isString().isLength({ min: 3 }),
    body(`${path}.email`).isEmail(),
];
