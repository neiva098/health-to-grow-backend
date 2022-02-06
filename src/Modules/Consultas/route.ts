import * as validators from './validator';
import {  Request, Response, Router } from 'express';
import { getValidData } from '../../System/utils/validators';
import controller from './controller';

const ConsultaRouter = Router();

ConsultaRouter.get(
    '/avaliable/:especialista',
    validators.getAvaliable,
    async (req: Request, res: Response) => {
        const { params } = getValidData(req);

        const response = await controller.getAvaliable(params.especialista);

        return res.status(200).send(response);
    },
);



export default ConsultaRouter;
