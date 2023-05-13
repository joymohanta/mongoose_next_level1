import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Database connection

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database connetion successful`);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Something error happen`, err);
  }
}
bootstrap();
