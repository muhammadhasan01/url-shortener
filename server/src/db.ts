import mongoose from "mongoose";
import config from '../config/default';

const db = async () => {
  const dbUri = config["dbUri"]
  try {
    await mongoose
      .connect(dbUri)
      .then(() => {
        console.log(`DB Connected to ${dbUri}`);
      })
  } catch (e) {
    console.error(e);
  }
}

export default db;
