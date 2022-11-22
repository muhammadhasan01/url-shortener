import {Express, Request, Response} from "express";

function routes(app: Express) {
  app.get('/health-check', (req: Request, res: Response) => {
    return res.send('healthy');
  })
}


export default routes;
