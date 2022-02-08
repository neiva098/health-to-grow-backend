import { create as profissionalValidator} from './../../Profissional/validators';
import { optionalObjectValidator } from './../../../System/utils/validators';
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

export const createUerValidator = [
    ...userValidator,
    optionalObjectValidator(atletaValidator('atletaProfile'), 'atletaProfile'),
    optionalObjectValidator(profissionalValidator('profissionalProfile'), 'profissionalProfile')
];
