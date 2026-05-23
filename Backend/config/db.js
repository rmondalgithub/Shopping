const mongoose = require("mongoose");
 const dns = require("dns");
 dns.setServers(["1.1.1.1","8.8.8.8"]);
 
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected");
    } catch (error) {
        console.log("Database connection error:", error);
    }
}

module.exports = connectDB;