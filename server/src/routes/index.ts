import {Express, Request, Response} from "express";
import {createShortUrl, handleRedirect} from "../controller/shortUrl.controller";
import validateResource from '../middleware/validateResource';
import shortUrlSchema from '../schemas/createShortUrl.schema';

function routes(app: Express) {
  app.get("/health-check", (_: Request, res: Response) => {
    return res.send("healthy");
  })

  app.post("/url-shortener", validateResource(shortUrlSchema), createShortUrl);
  app.get("/:shortId", handleRedirect);
}


export default routes;
