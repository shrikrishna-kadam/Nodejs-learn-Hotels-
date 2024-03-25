
const mongoose = require('mongoose');

require('dotenv').config();
// define mongodb connection to database
// const mongoURL = process.env.DB_url_Local; // 'hotels' is our database name to create
const mongoURL = process.env.DB_url ;


// set up mongodb connection
mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', () => {
    if (mongoURL== process.env.DB_url_Local) {
        console.log(" :: Local MongoDB server !!!");
    } else {
        console.log(" :: MongoDB Atlas server !!!");
    }
})

db.on('error', (err) => {
    console.log("MongoDb connection Error: ", err.message);
})

db.on('disconnected', () => {
    console.log("MongoDB disconnected !!!");
})

 
// Export the Database Connection 
module.exports = db;
