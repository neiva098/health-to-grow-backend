import { body } from 'express-validator';

export const authValidator = [
    body('password').isString().isLength({ min: 3 }),
    body('email').isEmail(),
];
