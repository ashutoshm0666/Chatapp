const mongoose = require("mongoose");
const colors = require("colors");
const dns = require("dns");

const connectDB = async () => {
  try {
    try {
      dns.setServers(["8.8.8.8", "8.8.4.4"]);
    } catch (dnsErr) {
      // Ignore if setting DNS fails
    }
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

