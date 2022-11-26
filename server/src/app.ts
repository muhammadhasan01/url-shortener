import express from "express";
import config from "../config/default";
import routes from "./routes";
import bodyParser from "body-parser";

const app = express();
const port = config['port'];

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
  routes(app);
});
