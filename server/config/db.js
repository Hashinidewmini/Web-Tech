import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        // Use 127.0.0.1 instead of localhost to avoid IPv6 issues
        // const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Buvons";
        
        const conn = await mongoose.connect("");
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch(error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
}