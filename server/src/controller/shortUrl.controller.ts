import {Request, Response} from 'express';
import shortUrl from "../models/shortUrl.model";
import analytics from "../models/analytics.model";

export const createShortUrl = async (req: Request, res: Response) => {
  const {destination} = req.body;
  const newUrl = await shortUrl.create({destination});
  return res.send(newUrl);
}

export const handleRedirect = async (req: Request, res: Response) => {
  const {shortId} = req.params;
  const resource = await shortUrl.findOne({shortId}).lean();
  if (!resource) {
    return res.sendStatus(404);
  }
  await analytics.create({ shortUrl: resource._id })
  const {destination} = resource;
  return res.redirect(destination);
}
