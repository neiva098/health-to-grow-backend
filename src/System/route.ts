import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('Health to Grow Service 1.0.0');
});

export default routes;
