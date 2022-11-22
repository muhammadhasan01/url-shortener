import express from "express";
import config from "../config/default";
import routes from "./routes";

const app = express();
const port = config['port'];

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
  routes(app);
});
