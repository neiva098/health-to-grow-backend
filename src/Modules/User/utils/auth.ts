import { NextFunction, Request, Response } from 'express';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { User } from '../entity';
import { HttpError } from '../../../utils/errors';

export const authenticate = async (
    user: User,
    password: string,
): Promise<{ token?: string } & User> => {
    if (!(await user.compareHash(password)))
        throw new HttpError(403, 'User not authorized');

    return Object.assign(user, { token: user.generateToken() });
};

export const authMidleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<unknown> => {
    const token = req.headers.authorization;

    if (!token) {
        throw new HttpError(400, 'No token provided');
    }

    try {
        const verifyPromise: any = promisify(jwt.verify);
        const decoded = await verifyPromise(token, 'secret');

        req.headers.authorization = decoded.id;

        return next();
    } catch (err) {
        throw new HttpError(403, 'Not authorized');
    }
};
