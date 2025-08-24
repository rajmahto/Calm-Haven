const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB using the MONGO_URI from .env
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Log the MongoDB host to which the app is connected
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
