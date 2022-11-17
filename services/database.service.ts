import * as dotenv from "dotenv";
import mongoose from "mongoose";

export async function connectToDatabase () {
    dotenv.config();
    try {
      // @ts-ignore
      await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database Connected');
    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
}
