const mongoose = require('mongoose');
require('dotenv').config();
//Define mongodb url
// const mongoURL =  process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;         
//Replace "mydatabase" with your databse name

// Setup mongodb connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
//Get a default connection
//Mongoose maintains a default connections object representing the MongoDB connection
const db = mongoose.connection;
//Define event listner for database connection
db.on('connected', ()=> {
  console.log('Connected to mongodb server');
})
db.on('error', (err)=> {
  console.log('Mongodb connection error:', err);
})
db.on('disconnected', ()=> {
  console.log('disConnected to mongodb server');
})

module.exports = db;
