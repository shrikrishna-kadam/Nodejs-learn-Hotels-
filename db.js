
const mongoose = require('mongoose');
// define mongodb connection to database
const mongoURL = 'mongodb://localhost:27017/hotels'; // 'hotels' is our database name to create

// set up mongodb connection
mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server !!!");
})

db.on('error', (err) => {
    console.log("MongoDb connection Error: ", err.message);
})

db.on('disconnected', () => {
    console.log("MongoDB disconnected !!!");
})

 
// Export the Database Connection 
module.exports = db;
