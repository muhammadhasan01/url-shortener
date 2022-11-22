import express from "express";
import config from "../config/default";

const app = express();
const port = config['port'];

app.listen(port, () => {
  console.log(`Running on ${port}`)
});
