import express from "express";
import config from "../config/default";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./db";

const app = express();
const port = config['port'];

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
  db();
  routes(app);
});
