const mongoose = require('mongoose');
//Define mongodb url
const mongoURL =  'mongodb://127.0.0.1:27017/hotels' 
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
