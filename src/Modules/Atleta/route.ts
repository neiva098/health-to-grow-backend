import { Request, Response, Router } from 'express';
import { getValidData } from '../../System/utils/validators';
import controller from './controller';

const AtletaRouter = Router();

AtletaRouter.post('/auth', async (req: Request, res: Response) => {
    const { body } = getValidData(req);

    const response = await controller.create(body);

    return res.status(200).send(response);
});

export default AtletaRouter;
