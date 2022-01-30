import { Request, Response, Router } from 'express';
import { getValidData } from '../../utils/validators';
import controller from './controller';
import * as validators from './utils/validators';

const UserRouter = Router();

/**
 * @swagger
 *  definitions:
 *   BadRequest:
 *    properties:
 *     code:
 *      type: number
 *      description: Codigo da resposta http
 *      required: true
 *      example: 400
 *     message:
 *      type: string
 *      description: Descrição do erro
 *      required: true
 *      example: Bad Request
 *     errors:
 *       type: array
 *       items:
 *          properties:
 *            msg:
 *              type: string
 *              example: Invalid value
 *            param:
 *              type: string
 *              example: password
 *            location:
 *              type: string
 *              example: body
 */

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
