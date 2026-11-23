const mongoose = require("mongoose");
const { mongoUri } = require("./env.js");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`Database ${conn.connection.host} is successfully connected`);
  } catch (err) {
    console.error(`Database error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB };