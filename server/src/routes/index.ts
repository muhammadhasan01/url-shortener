import {Express, Request, Response} from "express";
import {createShortUrl, getAnalytics, handleRedirect} from "../controller/shortUrl.controller";
import validateResource from '../middleware/validateResource';
import shortUrlSchema from '../schemas/createShortUrl.schema';

const routes = (app: Express) => {
  app.get("/health-check", (_: Request, res: Response) => {
    return res.send("healthy");
  })

  app.post("/api/url-shortener", validateResource(shortUrlSchema), createShortUrl);
  app.get("/api/url/:shortId", handleRedirect);
  app.get("/api/analytics", getAnalytics);
}


export default routes;
