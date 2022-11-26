import {Express, Request, Response} from "express";
import {createShortUrl} from "../controller/shortUrl.controller";
import bodyParser from "body-parser";

function routes(app: Express) {
  app.get('/health-check', (_: Request, res: Response) => {
    return res.send('healthy');
  })

  app.post('/shortener', createShortUrl)
}


export default routes;
