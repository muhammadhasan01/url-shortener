import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./db";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
  db();
  routes(app);
});
