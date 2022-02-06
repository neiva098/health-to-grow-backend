import { Request, Response, Router } from 'express';
import AtletaRouter from '../Modules/Atleta/route';
import ConsultaRouter from '../Modules/Consultas/route';
import UserRouter from '../Modules/User/route';

const routes = Router();

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

routes.get('/', (req: Request, res: Response) => {
    res.send('Health to Grow Service 1.0.0');
});
routes.use('/api/users', UserRouter);
routes.use('/api/atletas', AtletaRouter);
routes.use('/api/consultas', ConsultaRouter)

export default routes;
