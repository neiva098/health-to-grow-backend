import { Request, Response, Router } from 'express';
import { getValidData } from '../../System/utils/validators';
import controller from './controller';
import * as validators from './utils/validators';

const UserRouter = Router();

UserRouter.post(
    '/auth',
    validators.authValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const response = await controller.auth(body);

        return res.status(200).send(response);
    },
);

export default UserRouter;
