import * as validators from './validators';
import {  Request, Response, Router } from 'express';
import { getValidData } from '../../System/utils/validators';
import controller from './controller';

const ProfissionalRouter = Router();

ProfissionalRouter.get(
    '/',
    validators.findAll,
    async (req: Request, res: Response) => {
        const { query } = getValidData(req);

        const response = await controller.find(query);

        return res.status(200).send(response);
    },
);


export default ProfissionalRouter;
