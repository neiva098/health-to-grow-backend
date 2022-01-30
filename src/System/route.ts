import { Request, Response, Router } from 'express';
import UserRouter from '../Modules/User/route';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('Health to Grow Service 1.0.0');
});
routes.use('/api/users', UserRouter);

export default routes;
