import mongoose from "mongoose";

const db = async () => {
  const dbUri = process.env.DB_URI as string;
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
