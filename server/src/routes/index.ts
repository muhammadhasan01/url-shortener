import {Express, Request, Response} from "express";
import {createShortUrl, handleRedirect} from "../controller/shortUrl.controller";

function routes(app: Express) {
  app.get("/health-check", (_: Request, res: Response) => {
    return res.send("healthy");
  })

  app.post("/url-shortener", createShortUrl);
  app.get("/:shortId", handleRedirect);
}


export default routes;
