const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({
    path: path.resolve('/Users/vaidehib23/Desktop/BE/Node_L2/.env')
});

const URL = process.env.MONGO_URL;

// const mongoURL = 'mongodb://localhost:27017/Restaurant';
const mongoURL = URL;
console.log("🔍 MONGO_URL =", process.env.MONGO_URL);

mongoose.connect(mongoURL)
  .then(() => console.log('Connected to MongoDB server'))
  .catch((err) => console.error('MongoDB connection error:', err));

const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = {
  db,
};